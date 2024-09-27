import React,{useContext, useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, TextInput,Pressable,Alert } from 'react-native'
import styles from './savings.style'
import Btn_progress from '../home/savingsprogress/Btn_progress'
import { COLORS, SIZES } from '../../constants'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AuthContext } from '../../context/auth'


const Goal = ({icon_name,icon_family,goal_name,start_date,finish_date,progress,goal_money,money_per_month,saved_this_month,onRefresh}) => {
    
    
    const [visible,setVisible] =useState();
    const [addMoney,setAddMoney] =useState();
    const [newAdd,setNewAdd] =useState(0);
    const [finishDate,setFinishDate]=useState("");
    const [startDate,setStartDate]=useState("");
    const [name,setName]=useState('');
    const [goalmoney,setGoalmoney] =useState();
    const [moneyPerMonth,setMoneyPerMonth]=useState();
    var percentage= Number(progress)*100/ Number(goal_money);
    const [today,setToday] =useState(new Date())
    const [state,setState]=useContext(AuthContext)

    useEffect(()=>{
        setGoalmoney(goal_money.toString());
        const f_parsed_date=parseDate(finish_date);
        const s_parsed_date=parseDate(start_date);
        setFinishDate(f_parsed_date);
        setStartDate(s_parsed_date)
        setName(goal_name);
        
    },[!visible])
    
    //function used for start_date and finish_date to convert date-type -> string 
    const parseDate = (dateString) => {
        const dateParts = dateString.split('/').map(part => parseInt(part, 10)); 
        return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // year, month, day
    };

    //Tap on edit
    const pressedEdit = ( )=>{
    
        if(visible===true) {
            setVisible(false);
        }
        else {
            setVisible(true);}

    }
    //Tap on goal
    const pressedGoal = () =>{
         setAddMoney(true);
    }
    //Add money to your goal
    const pressedDone = async()=>{
        let addValue = parseFloat(newAdd.toFixed(1));
        if (isNaN(addValue) ) {
            setAddMoney(false);
            setNewAdd(0);
            return;
        }
        if(addValue==undefined){setAddMoney(false);}
        else if((progress+addValue)>goal_money) {
            Alert.alert("Your goal is "+goal_money+"€. You can not add more money.")
            setNewAdd(0);
        }
        else {
            // console.log((progress+newAdd)<=goal_money);
            
            let storedData =await AsyncStorage.getItem("auth-rn");
            const parsed =JSON.parse(storedData);
            const {data}= await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/add-money-goal",{name:goal_name,saved_this_month:(saved_this_month+addValue),newAdd:addValue,progress:(progress+addValue),user_id:parsed.user._id });
            if (data.success === false) {
                // Display error message if success is false
                alert(`${data.message}`);
                return; // Stop further execution
              }
            setNewAdd(0);
            setAddMoney(false);
            console.log(data.user)
            const stored=JSON.parse(await AsyncStorage.getItem("auth-rn"));
            stored.user = data;
            await AsyncStorage.setItem("auth-rn",JSON.stringify(stored));
            setState({...state,user:data});
            // console.log(state)
        }

        onRefresh();  
    }
    //Save Updated Goal
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
        



        var today_month=today.getMonth()+1;
        var today_year=today.getFullYear();
        // FINISH-DATE MONTH AND YEAR
        var finish_date_MONTH=finishDate.getMonth()+1;
        var finish_date_YEAR=finishDate.getFullYear();
        if(finish_date_MONTH<today_month && !(today_year<finish_date_YEAR)){
            Alert.alert("Choose a date after "+today.getDate()+"/"+today_month+"/"+today_year)
            return
        }

        //remainder
        var remainder= (Number(goalmoney))-progress

        //CALCULATE MONEY PER MONTH
        var calc= (remainder/(finish_date_MONTH-today_month+1+12*(finish_date_YEAR-today_year))).toFixed(1);
        // console.log(calc);

        let storedData =await AsyncStorage.getItem("auth-rn");
        const parsed =JSON.parse(storedData);
        // console.log(goal_name,name,finishDate.toLocaleDateString(),finish_date,Number(goal_money))
        const {data}= await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/update-goal",{name_old:goal_name,name_new:name,money_per_month:calc, finish_date:finishDate.toLocaleDateString(),goal_money:Number(goalmoney),user_id:parsed.user._id });
        setVisible(false);
        onRefresh();  
        
    }
    // Press the icon button to go back to the goal description
    const pressedIcon = ()=>{
        setAddMoney(false)
    }
    //Delete goal
    const pressedDelete = async ()=>{
        let storedData =await AsyncStorage.getItem("auth-rn");
        const parsed =JSON.parse(storedData);
        // console.log(parsed.user)
        const {data}= await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/delete-goal",{name:goal_name,user_id:parsed.user._id });
        
        
        const stored=JSON.parse(await AsyncStorage.getItem("auth-rn"));
        stored.user = data;
        await AsyncStorage.setItem("auth-rn",JSON.stringify(stored));
        setState({...state,user:data});
        
        
        onRefresh();  
        setVisible(false);
        

    }



    return (
        <TouchableOpacity onPress={pressedGoal} disabled={visible}>
            <View style={[styles.row_2]}>
                {/* PROGRESS */}
                <View style={{alignItems:"center",height:"100"}}>
                    <Btn_progress icon_family={icon_family} icon_name={icon_name} progress={percentage} onPress={pressedIcon}/>
                    <Text style={{color:"#FFFFFF",fontSize:SIZES.xxLarge,fontWeight:"800",marginLeft:10,marginTop:3}}>{progress}€</Text>
                    <Text style={{color:"#FFFFFF",fontSize:11,fontWeight:"700",marginLeft:10}}>Goal: {goal_money}€</Text>
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
                            <Text style={{fontSize:SIZES.medium,color:COLORS.dark,fontWeight:700,margin:10,marginBottom:5,alignSelf:"flex-start"}}>Raise or lower your goal-money:</Text>        
                            <View style={{flex:1,flexDirection:"row",height:55,marginHorizontal:10,marginBottom:5,alignItems:"center"}}>
                                
                                <TouchableOpacity style={{width:"30%"}}onPress={()=>{   if(newAdd==undefined||newAdd==0){setNewAdd(-1)}
                                                                                        else{setNewAdd(parseFloat((newAdd - 1).toFixed(2)))}}} >
                                <Ionicons name="remove-circle-sharp" size={30} color={COLORS.tertiary} style={{alignSelf:"flex-end"}}   />
                                </TouchableOpacity>
                                
                                <TextInput   keyboardType='decimal-pad'
                                            inputMode='decimal'
                                            value={newAdd==undefined ? "0": (newAdd).toString()}
                                             
                                            onChangeText={(num) => {
                                                console.log(typeof(num))
                                                console.log(num)
                                                // setNewAdd(parseFloat($(num).text().replace(',', '.')))
                                                if (num === '' || num.slice=== ',' || num === '-.') {
                                                    setNewAdd(0);
                                                    
                                                } 
                                                else if(num.slice(-1) === ','){
                                                    setNewAdd(num.replace(/,/, '.'));
                                                }
                                                
                                                else {
                                                    var newN=num.replace(/,/, '.')
                                                    console.log(newN)
                                                    const parsedNum = parseFloat(newN)
                                                    console.log(parsedNum)
                                                    setNewAdd(isNaN(parsedNum) ? 0 : parsedNum);
                                                }
                                            }}

                                            textAlign='center' 
                                             style={{width:"27%",marginRight:10,fontSize:25}} >
                    
                                </TextInput>
                                <TouchableOpacity style={{width:"30%"}} onPress={()=>{if(newAdd==undefined){setNewAdd(1)}
                                                                                    else{setNewAdd(parseFloat((newAdd + 1).toFixed(2)))}}}>
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
                        <View style={{borderWidth:1,borderColor:COLORS.primary,shadowColor: "#000",shadowOffset: {width: 0,height: 1,},shadowOpacity: 0.18,shadowRadius: 1.00,elevation: 1,}}></View>
                        
                        <View style={{flexDirection:"row",height:70,marginHorizontal:12,marginTop:10}}>
                                <View style={{maxWidth:"80",marginRight:5}}>
                                    <Text style={{color:COLORS.dark,fontSize:SIZES.large,fontWeight:600}}>This month:</Text>
                                </View>
                                <View style={{justifyContent:"flex-start"}} >
                                    <View style={{backgroundColor:COLORS.tertiary,alignSelf:"flex-start",paddingHorizontal:6,paddingVertical:4,borderRadius:5,marginBottom:4}}>
                                        <Text style={{color:"white",fontWeight:600,fontSize:SIZES.medium}}>Expected: {money_per_month} €
                                        </Text>
                                    </View>
                                    <View style={{backgroundColor:COLORS.secondary,alignSelf:"flex-start",paddingHorizontal:6,paddingVertical:4,borderRadius:5,marginBottom:4}}>
                                        <Text style={{color:"white",fontWeight:600,fontSize:SIZES.medium}}>Saved: {saved_this_month} €
                                            </Text>
                                    </View>
                                </View>
                         
                        </View>
                        <View><Text style={{fontSize: SIZES.small,color: COLORS.dark,fontWeight:"500",marginLeft:5}}>Achieve your goal by {finish_date}.</Text></View>
                        
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
                                            {/* <DateTimePicker disabled={true} style={{flex:1,marginBottom:2 }} value={parseDate(start_date)} mode={"date"} is24Hour={true} />
                */}
                                            <Text>{start_date}</Text>
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