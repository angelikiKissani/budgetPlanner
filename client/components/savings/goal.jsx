import React,{useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, TextInput,Pressable,Alert } from 'react-native'
import styles from './savings.style'
import Btn_progress from '../home/savingsprogress/Btn_progress'
import { COLORS, SIZES } from '../../constants'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';


const Goal = ({icon_name,icon_family,goal_name,start_date,finish_date,progress,goal_money,money_per_month,saved_this_month,onRefresh}) => {
    const [visible,setVisible] =useState();
    const [addMoney,setAddMoney] =useState();
    const [newAdd,setNewAdd] =useState();
    const [finishDate,setFinishDate]=useState("");
    const [startDate,setStartDate]=useState("");
    const [name,setName]=useState('');
    const [goalmoney,setGoalmoney] =useState();


    useEffect(()=>{
        setGoalmoney(goal_money.toString());
        const f_parsed_date=parseDate(finish_date);
        const s_parsed_date=parseDate(start_date);
        setFinishDate(f_parsed_date);
        setStartDate(s_parsed_date)
        setName(goal_name);
        
    },[!visible])
    useEffect(()=>{
        firstOfTheMonth()
    },[])

    //function used for start_date and finish_date
    const parseDate = (dateString) => {
        const dateParts = dateString.split('/').map(part => parseInt(part, 10)); // Split by '/' and convert to integers
        return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // year, month (0-indexed), day
    };

    var percentage= Number(progress)*100/ Number(goal_money);

    // visible=> edit goal
    //tap on edit
    const pressedEdit = ( )=>{
    
        if(visible===true) {
            setVisible(false);
        }
        else {
            setVisible(true);}

    }
    //tap on goal
    const pressedGoal = () =>{
         setAddMoney(true);
    }
    //add money to your goal
    const pressedDone = async()=>{
        console.log(newAdd);
        if(newAdd==undefined){setAddMoney(false);}
        else if((progress+newAdd)>goal_money) {
            Alert.alert("Your goal is "+goal_money+"€. You can not add more money.")
            setNewAdd(0);
        }
        else {
            console.log((progress+newAdd)<=goal_money);
            
            let storedData =await AsyncStorage.getItem("auth-rn");
            const parsed =JSON.parse(storedData);
            const {data}= await axios.post("http://192.168.1.45:8001/api/add-money-goal",{name:goal_name,saved_this_month:(saved_this_month+newAdd),progress:(progress+newAdd),user_id:parsed.user._id });
            setNewAdd(0);
            setAddMoney(false);
        }

        onRefresh();  
    }
    // save Updated Goal
    const pressedSave = async ()=>{
        if(name==""){
            Alert.alert("Please add a Goal name");
            return;
          }
        if(goalmoney==""){
        Alert.alert("Please add Money goal");
        return;
        };

        if(goalmoney<progress){
            Alert.alert("You cannot set a smaller financial goal than the amount of money you have already saved.");
            return
        }


        var start_date_MONTH=startDate.getMonth()+1;
        var finish_date_MONTH=finishDate.getMonth()+1;
        var start_date_YEAR=startDate.getFullYear();
        var finish_date_YEAR=finishDate.getFullYear();
        var calc=(Number(goalmoney)/(finish_date_MONTH-start_date_MONTH+1+12*(finish_date_YEAR-start_date_YEAR))).toFixed(1);
        console.log(calc);

        let storedData =await AsyncStorage.getItem("auth-rn");
        const parsed =JSON.parse(storedData);
        // console.log(goal_name,name,finishDate.toLocaleDateString(),finish_date,Number(goal_money))
        
        const {data}= await axios.post("http://192.168.1.45:8001/api/update-goal",{name_old:goal_name,name_new:name,money_per_month:calc, finish_date:finishDate.toLocaleDateString(),goal_money:Number(goalmoney),user_id:parsed.user._id });
        setVisible(false);
        onRefresh();  
        
    }
    // press the icon button to go back to the goal description
    const pressedIcon = ()=>{
        setAddMoney(false)
    }
    //Delete goal
    const pressedDelete = async ()=>{
        let storedData =await AsyncStorage.getItem("auth-rn");
        const parsed =JSON.parse(storedData);
        // console.log(parsed.user)
        const {data}= await axios.post("http://192.168.1.45:8001/api/delete-goal",{name:goal_name,user_id:parsed.user._id });
        // console.log(data);
        onRefresh();  
        setVisible(false);
        

    }

    //first of the month
    const firstOfTheMonth = async ()=>{
        const now = new Date();
        var end_date=finish_date.split('/').map(part => parseInt(part, 10));
       
        // console.log(Number(goal_money))  
       if(now.getDate()==1){
            console.log("first of the month")
            var calc2=(Number(goal_money)/(end_date[1]-(now.getMonth()+1)+1+12*(end_date[2]-now.getFullYear()))).toFixed(1);
            // console.log(calc2);

            let storedData =await AsyncStorage.getItem("auth-rn");
            const parsed =JSON.parse(storedData);

            const {data}= await axios.post("http://192.168.1.45:8001/api/first_of_the_month",{name:name,money_per_month:calc2, user_id:parsed.user._id });
            setVisible(false);
            onRefresh();  
 
        }
    }


    return (
        
    <TouchableOpacity onPress={pressedGoal} disabled={visible}>
        <View style={[styles.row_2]}>
            {/* PROGRESS */}
            <View style={{alignItems:"center",height:"100"}}>
                <Btn_progress icon_family={icon_family} icon_name={icon_name} progress={percentage} onPress={pressedIcon}/>
                {/* <View style={{flexDirection:"row",alignContent:"flex-end"}}> */}
                <Text style={{color:"#FFFFFF",fontSize:SIZES.xxLarge,fontWeight:"800",marginLeft:10,marginTop:3}}>{progress}€</Text>
                <Text style={{color:"#FFFFFF",fontSize:11,fontWeight:"700",marginLeft:10}}>Goal: {goal_money}€</Text>
                {/* </View> */}
            </View>
            
            {/* DESCRIPTION */}
            <View style={[styles.col2]}>


                {/* ADD MONEY */}
                {addMoney && (
                    <>
                    <View >
                        <Text style={{fontSize:SIZES.xxLarge,color: COLORS.dark,fontWeight:"800",marginTop:6,fontStyle:"italic",marginLeft:15}}>{goal_name}</Text>
                        
                    </View>
                    <View style={{borderWidth:2,borderColor:COLORS.primary,shadowColor: "#000",shadowOffset: {width: 0,height: 1,},shadowOpacity: 0.18,shadowRadius: 1.00,elevation: 1,}}></View>
                    
                    <View >
                        <Text style={{fontSize:SIZES.medium,color:COLORS.dark,fontWeight:700,margin:10,marginBottom:5,alignSelf:"center"}}>Raise or lower your goal-money:</Text>        
                        <View style={{flex:1,flexDirection:"row",height:55,marginHorizontal:10,marginBottom:5,alignItems:"center"}}>
                            
                            <TouchableOpacity style={{width:"30%"}}onPress={()=>{   if(newAdd==undefined||newAdd==0){setNewAdd(-1)}
                                                                                    else{setNewAdd(newAdd-1);}}} >
                            <Ionicons name="remove-circle-sharp" size={30} color={COLORS.tertiary} style={{alignSelf:"flex-end"}}   />
                            </TouchableOpacity>
                            <TextInput inputMode={'numeric'} value={newAdd==undefined ? "0" : newAdd.toString()} textAlign='center' onChangeText={(num)=>{setNewAdd(Number(num))}} keyboardType='numeric' style={{width:"27%",marginRight:10,fontSize:25}} >
                
                            </TextInput>
                            <TouchableOpacity style={{width:"30%"}} onPress={()=>{if(newAdd==undefined){setNewAdd(1)}
                                                                                else{setNewAdd(newAdd+1);}}}>
                                <Ionicons name="add-circle-sharp" size={30} color={COLORS.tertiary} style={{alignSelf:"flex-start"}}  />
                            </TouchableOpacity>
                            <Ionicons name="checkmark-sharp" size={30} color={COLORS.tertiary} style={{alignSelf:"flex-end"}} onPress={pressedDone} />
                        </View>
                        
                    </View>
                    </>
                )}




                {/* GOAL DESCRIPTION */}
                {!addMoney && (
                <View>   
                    <View style={{flexDirection:"row"}}>
                        <Text style={{flex:1,fontSize:SIZES.xxLarge,color: COLORS.dark,fontWeight:"800",marginTop:6,fontStyle:"italic",marginLeft:15}}>{goal_name}</Text>
                        {!visible &&(
                                    <TouchableOpacity onPress={pressedEdit} style={{ alignItems:"flex-end",justifyContent:"flex-end",marginRight:2}} >
                                        <MaterialIcons name="mode-edit" size={28} color={COLORS.dark} />
                                    </TouchableOpacity>
                                )}
                    </View>
                    <View style={{borderWidth:2,borderColor:COLORS.primary,shadowColor: "#000",shadowOffset: {width: 0,height: 1,},shadowOpacity: 0.18,shadowRadius: 1.00,elevation: 1,}}></View>
                    
                    <View style={{flexDirection:"row",height:80,marginHorizontal:12,marginTop:15}}>
                            <View style={{flex:1,margin:2,borderRadius:10}}>
                                <Text style={{margin:2,color:COLORS.dark,fontSize:SIZES.large,fontWeight:600}}>This month:</Text>
                                
                            </View>
                            <View>
                                <View style={{backgroundColor:COLORS.tertiary,alignSelf:"flex-end",paddingHorizontal:10,paddingVertical:5,borderRadius:25,marginBottom:5}}>
                                    <Text style={{color:"white",fontWeight:600,fontSize:SIZES.medium}}>Expected: {money_per_month.toString()} €
                                        </Text>
                                </View>
                                <View style={{backgroundColor:COLORS.secondary,alignSelf:"flex-start",paddingHorizontal:10,paddingVertical:5,borderRadius:25}}>
                                    <Text style={{color:"white",fontWeight:600,fontSize:SIZES.medium}}>Saved: {saved_this_month} €
                                        </Text>
                                </View>
                            </View>
                            
                            
                            
                    </View>
                    {/* EDIT GOAL */}
                    {visible && !addMoney &&(
                        <>
                        <View style={{borderWidth:1.5,borderColor:COLORS.primary}}></View>
                    
                        <View style={{flexDirection:"row"}}>
                            <View style={{flex:1,marginTop:7,alignItems:"flex-start"}}>

                                    <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.gray2}}>
                                        <Text style={{fontSize:SIZES.medium,marginHorizontal:5,fontWeight:600}}>Goal name: </Text>
                                        <TextInput style={{flex:1}} value={name} onChangeText={(text)=>setName(text)} />
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.gray2}}>
                                        <Text style={{fontSize:SIZES.medium,marginHorizontal:5,fontWeight:600}}>Start Date: </Text>
                                        <DateTimePicker disabled={true} style={{flex:1,marginBottom:2 }} value={parseDate(start_date)} mode={"date"} is24Hour={true} />
              
                                        {/* <Text>{start_date}</Text> */}
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.gray2}}>
                                        <Text style={{fontSize:SIZES.medium,marginHorizontal:5,fontWeight:600}}>End Date: </Text>
                                        
                                        <DateTimePicker 
                                            style={{flex:1,marginBottom:2}} 
                                            minimumDate={parseDate(start_date)} 
                                            value={finishDate} 
                                            onChange={(e,selectedDate)=>{setFinishDate(selectedDate)}}
                                            mode={"date"} 
                                            is24Hour={true}  />
                
                                    </View>                                                                        
                                    <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.gray2}}>
                                        <Text style={{fontSize:SIZES.medium,marginHorizontal:5,fontWeight:600}}>Money goal: </Text>
                                        <TextInput style={{flex:1}} keyboardType='numeric' value={goalmoney} onChangeText={(text)=>{setGoalmoney(text)}}/>
                                        <Text>€</Text>
                                    </View>  
                                    <View style={{flexDirection:"row",alignSelf:"center"}}>       
                                    <Pressable 
                                    onPress={pressedSave}
                                    style={{
                                        alignItems:"center",
                                        alignSelf:"center",
                                        marginVertical:10,
                                        width:"25%",height:35,
                                        justifyContent:"center",
                                        borderRadius:15,
                                        borderWidth:2,
                                        borderColor:COLORS.dark
                                        }} >
                                        <Text style={{fontSize:SIZES.medium,fontWeight:900,color:COLORS.dark}}>Save</Text>
                                    </Pressable> 
                                    <Pressable 
                                    onPress={pressedDelete}
                                    style={{
                                        marginHorizontal:10,
                                        marginVertical:10,
                                        width:"46%",height:35,
                                        justifyContent:"center",
                                        borderRadius:15,
                                        backgroundColor:COLORS.dark
                                        }} >
                                        <Text style={{alignSelf:"center",fontSize:SIZES.medium,fontWeight:900,color:"white"}}>Delete Goal</Text>
                                    </Pressable>   
                                    </View>      
                            </View>
                            <TouchableOpacity onPress={pressedEdit} style={{alignItems:"flex-end",justifyContent:"flex-end",marginBottom:5,marginRight:2}} >
                                <MaterialIcons name="edit-off" size={28} color={COLORS.dark} />
                            </TouchableOpacity>
                        </View>
                        
                        </>
                    )}
                </View>
                )}
            
                
                
            </View>
            
        </View> 
    </TouchableOpacity>
          
   
  )
  
}

export default Goal;