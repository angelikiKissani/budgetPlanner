import React, { useEffect, useState,useCallback, useContext} from 'react'
import { View, Text,useWindowDimensions, ImageBackground,Pressable,Modal,TextInput, Alert,RefreshControl, TouchableOpacity } from 'react-native'
import {icons } from '../../constants'
import { ScrollView } from 'react-native'
import styles from './savings.style'
import { COLORS,SIZES } from '../../constants'
import IconPicker from "react-native-icon-picker";
import Goal from './goal'
import Btn_progress from '../home/savingsprogress/Btn_progress'
import IconSelector from '../common/iconselection/IconSelector'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { GoalContext } from '../../context/goals'
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';



const Savings = () => {

  const {height}=useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);


  const [goal_name,setGoalName] =useState("");
  const [start_date,setStartDate] =useState(new Date());
  const [finish_date,setFinishDate] =useState(new Date());
  const [goal_money,setGoalMoney] =useState("");
  const [icon,setIcon] =useState("");
  const [today,setToday] =useState(new Date())

  const [goals,setGoals] =useContext(GoalContext);

  

  const [selected,setSelected] =useState();
  const [showIconPicker, setShowIconPicker] = useState(false);



  
  //refresh page
  const [refresh, setRefresh] = useState(false);
  const onRefresh = useCallback( () => {
    setRefresh(true);
    setTimeout(()=>{
      setRefresh(false)
    },2000)

  }, [] );

  useEffect(()=>{
    fetchGoals();
  },[refresh,modalVisible])
  

  //Tap on Add new goal
  const pressedAddNewGoal = () =>{
    setModalVisible(true)    
  }

   //Show goals
   const fetchGoals = async() =>{
    let storedData =await AsyncStorage.getItem("auth-rn");
    const parsed =JSON.parse(storedData);
    console.log(parsed)
    const {data}=await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/show-goal",{user_id:parsed.user._id})
    setGoals(data)
  }
  //Save new goal 
  const pressedSaveNewGoal = async () =>{
    // console.log(goal_name , start_date.toLocaleDateString() , finish_date.toLocaleDateString(), goal_money, icon.family , icon.icon  )
    // console.log(icon);
    if(goal_name==""){
      Alert.alert("Please add a Goal name");
      return;
    }
    if(goal_money==""){
      Alert.alert("Please add Money goal");
      return;
    };
    if(icon==""){
      Alert.alert("Please add an icon");
      return;
    };


    let storedData =await AsyncStorage.getItem("auth-rn");
    const parsed =JSON.parse(storedData);
    
    var start_date_MONTH=start_date.getMonth()+1;
    var finish_date_MONTH=finish_date.getMonth()+1;
    var start_date_YEAR=start_date.getFullYear();
    var finish_date_YEAR=finish_date.getFullYear();
    var calc=(goal_money/(finish_date_MONTH-start_date_MONTH+1+12*(finish_date_YEAR-start_date_YEAR))).toFixed(1);
    // console.log(parsed);
    const {data}= await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/add-goal",{name:goal_name,start_date:start_date.toLocaleDateString(),money_per_month:calc,finish_date:finish_date.toLocaleDateString(),goal_money:Number(goal_money),icon_name:icon.icon,icon_family:icon.family,user_id:parsed.user._id });
    if(data.error=="Goal name exists"){Alert.alert("You have previously used this goal name. Try again.")}
    else{
      setModalVisible(false);
    }
    


  }



return (
    <View style={{flex:1}}>
      <ImageBackground source={icons.background3_3} style={[{ height: height* 0.2}]} imageStyle={{left: 80}} >
        <Text style={styles.header}>Savings</Text>
        <View style={styles.container_2}>

          {/* BAR WITH SAVINGS */}
          <View style={styles.container_3}>
            <View style={styles.row}>
              <ScrollView style={{flex:1,flexDirection:"row"}} horizontal={true}>
                {goals && goals.map( item=>(
                  <View key={item._id}>
                    <Btn_progress icon_family={item.icon_family} icon_name={item.icon_name} progress={Number(item.progress)*100/ Number(item.goal_money)} />
                  </View>
                ))}
              
               </ScrollView>
               <View style={{borderWidth:1,borderColor:COLORS.dark,height:60,alignSelf:"center",bottom:8,}}></View>
            <TouchableOpacity style={styles.add_btn_container } onPress={pressedAddNewGoal}>
              <IconSelector family={"MaterialIcon"} color={COLORS.dark} icon={"add"} size={31} />
            </TouchableOpacity>
           
           </View>
          </View>
          
          {/* ADD NEW GOAL */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <KeyboardAwareScrollView style={{marginTop:180}}>
              <View style={styles.modalView}>
              <Pressable
                  style={{alignSelf:"flex-end"}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <IconSelector icon={"close"} family={"AntDesign"} size={20} color={COLORS.dark}/>
                </Pressable>
              <View style={{margin:10,alignItems:"center"}}>
              <Text style={[styles.title,{fontSize:SIZES.xLarge,marginBottom:10}]}> Set a new goal</Text>
              <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.gray2}}>
                  <Text style={{fontSize:SIZES.medium,marginHorizontal:5,fontWeight:600}}>Goal name: </Text>
                  <TextInput value={goal_name} onChangeText={(text)=>{setGoalName(text)}} style={{width:500}}/>
              </View>
              <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.gray2}}>
                  <Text style={{fontSize:SIZES.medium,marginHorizontal:5,fontWeight:600}}>Start Date: </Text>
                  <Text>{start_date.toLocaleDateString()}</Text>
                  {/* <DateTimePicker disabled={true} style={{flex:1,marginBottom:2 }} value={today} mode={"date"} is24Hour={true} 
                                  /> */}
              </View>
              <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.gray2}}>
                  <Text style={{fontSize:SIZES.medium,marginHorizontal:5,fontWeight:600}}>End Date: </Text>
                  <DateTimePicker style={{flex:1,marginBottom:2 }} minimumDate={start_date} value={finish_date} mode={"date"} is24Hour={true}  onChange={(e,selectedDate)=>{setFinishDate(selectedDate)}}/>
                
                  
              </View>                                                                    
              <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.gray2}}>
                  <Text style={{fontSize:SIZES.medium,marginHorizontal:5,fontWeight:600}}>Money goal: </Text>
                  
                  <TextInput value={goal_money} textContentType='numeric' keyboardType='numeric' onChangeText={(text)=>{setGoalMoney(text)}} style={{width:100}}/><Text>€</Text>
              </View> 

              <IconPicker
                showIconPicker={showIconPicker}
                toggleIconPicker={() => setShowIconPicker(!showIconPicker)}
                iconDetails={[
                  { family: "AntDesign",icons: ["camera","heart"], color:COLORS.dark},
                  { family: "Entypo", color:COLORS.dark, icons: ["graduation-cap","credit-card","cake","laptop","location-pin"] },
                  { family: "FontAwesome5", color:COLORS.dark, icons: ["piggy-bank","car","house-user","umbrella-beach","book-open","couch","icons","motorcycle","paint-brush","briefcase-medical"] },
                  
                  { family: "Fontisto", color:COLORS.dark, icons: ["shopping-package","shopping-bag-1"] },
                  
                  { family: "MaterialIcons", color:COLORS.dark,icons: ["child-care", "phone-iphone","business-center","apartment","sports-gymnastics","family-restroom"],
                  },
                ]}
                content={
                  <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.dark}}>
                  <Text style={{fontSize:SIZES.medium,marginHorizontal:5,color:COLORS.dark,fontWeight:600}}>Select icon: </Text>
              
                  {selected &&
                    (<View style={{marginBottom:4}}>
                    <IconSelector family={icon.family} size={20} color={icon.color} icon={icon.icon} />
                    </View>
                    )}
                  </View> 
                }
                onSelect={(selectedIcon)=>{setIcon(selectedIcon)
                  setShowIconPicker(false);
                  setSelected(true);
                }}
                
              />


                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={pressedSaveNewGoal}>
                  <Text style={styles.textStyle}>Save new goal</Text>
                </Pressable>
                </View>
              </View>
              </KeyboardAwareScrollView>
            </View>
          
          </Modal>

          {/* MY GOALS */}
          <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh}/>} >
          <KeyboardAwareScrollView style={{height:"100%"}}>
            <View style={styles.container_4}>
              <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginHorizontal:5}}>
                <View>
                  <Text style={styles.title}>My Goals</Text>
                  <Text style={{fontSize: SIZES.small,color: COLORS.dark,fontWeight:"500",marginRight:15}}>Put saved money towards a goal!</Text>
                </View>
                <Pressable onPress={pressedAddNewGoal}>
                <Text style={styles.addnewgoal}> Add new goal</Text>
                </Pressable>
              </View>
            
              
              {goals && goals.map(item=>(
                
                <Goal key={item._id}
                      icon_family={item.icon_family} 
                      icon_name={item.icon_name} 
                      goal_name={item.name} 
                      start_date={item.start_date} 
                      finish_date={item.finish_date} 
                      progress={item.progress} 
                      goal_money={item.goal_money} 
                      money_per_month={item.money_per_month} 
                      onRefresh={fetchGoals} 
                      saved_this_month={item.saved_this_month}/>
                 
              
              ))}
        

              
            </View>
            </KeyboardAwareScrollView>
          </ScrollView>
        </View>
          
            
      </ImageBackground>
      </View>
    
    )
    
}



export default Savings;