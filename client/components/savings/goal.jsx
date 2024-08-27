import React,{useState} from 'react'
import { View, Text, TouchableOpacity, TextInput,Pressable } from 'react-native'
import styles from './savings.style'
import Btn_progress from '../home/savingsprogress/Btn_progress'
import { COLORS, SIZES } from '../../constants'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';


const Goal = ({icon_name,icon_family,goal_name,start_date,finish_date,progress,goal_money,saved_this_month,onRefresh}) => {
    const [visible,setVisible] =useState()
    const [addMoney,setAddMoney] =useState();
    const [newAdd,setNewAdd] =useState();
    var percentage= Number(progress)*100/ Number(goal_money);
    var money_per_month=75;
    // visible->edit goal
    // addMoney

    const pressedEdit = ( )=>{
    
        if(visible===true) {
            setVisible(false);
        }
        else {
            setVisible(true);}

    }
    const pressedGoal = () =>{
         setAddMoney(true);
    }

    const pressedDone = ()=>{
        console.log("pressedDone")
    }
    const pressedSave = ()=>{
        console.log("pressedSave")
    }
    const pressedIcon = ()=>{
        setAddMoney(false)
    }
    const pressedDelete = async ()=>{
        let storedData =await AsyncStorage.getItem("auth-rn");
        const parsed =JSON.parse(storedData);
        // console.log(parsed.user)
        const {data}= await axios.post("http://192.168.1.45:8001/api/delete-goal",{name:goal_name,user_id:parsed.user._id });
        
        onRefresh();  
        setVisible(false);
        

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
                    
                    <View style={{}}>
                        <Text style={{fontSize:SIZES.medium,color:COLORS.dark,fontWeight:700,margin:5}}>Add money for your goal:</Text>        
                        <View style={{flexDirection:"row",height:65,width:160,marginHorizontal:10,alignItems:"center"}}>
                            
                            <TouchableOpacity style={{width:80}}onPress={()=>{ if(newAdd==undefined||newAdd==0){return}
                                                                                                                                            else{setNewAdd(newAdd-1);}}} >
                            <Ionicons name="remove-circle-sharp" size={30} color={COLORS.tertiary} style={{alignSelf:"flex-end"}}   />
                            </TouchableOpacity>
                            <TextInput inputMode={'numeric'} value={newAdd==undefined ? "0" : newAdd.toString()} textAlign='center' onChangeText={(num)=>{setNewAdd(Number(num))}} keyboardType='numeric' style={{height:80,width:70,marginRight:10,fontSize:25}} >
                
                            </TextInput>
                            <TouchableOpacity style={{width:83}} onPress={()=>{if(newAdd==undefined){setNewAdd(1)}
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
                                    <Text style={{color:"white",fontWeight:600,fontSize:SIZES.medium}}>Expected: {money_per_month} €
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
                                {/* <Text style={{fontSize:SIZES.medium,color:COLORS.dark,fontWeight:700,marginBottom:5,marginLeft:15}}>Edit your Goal</Text> */}
                                    
                                    <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.gray2}}>
                                        <Text style={{fontSize:SIZES.medium,marginHorizontal:5,fontWeight:600}}>Goal name: </Text>
                                        <TextInput value={goal_name} />
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.gray2}}>
                                        <Text style={{fontSize:SIZES.medium,marginHorizontal:5,fontWeight:600}}>Start Date: </Text>
                                        <TextInput value={start_date} />
                                    </View>
                                    <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.gray2}}>
                                        <Text style={{fontSize:SIZES.medium,marginHorizontal:5,fontWeight:600}}>End Date: </Text>
                                        <TextInput value={finish_date} />
                                    </View>                                                                        
                                    <View style={{flexDirection:"row",alignItems:"center",margin:15,fontSize:18 ,width:230, borderBottomWidth:1,borderBottomColor:COLORS.gray2}}>
                                        <Text style={{fontSize:SIZES.medium,marginHorizontal:5,fontWeight:600}}>Money goal: </Text>
                                        <TextInput value={goal_money.toString()+"€"} />
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