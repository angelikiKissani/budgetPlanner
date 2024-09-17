import { View, Text,ScrollView,Switch,StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { router } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { COLORS } from '../../../constants';
import AuthContext from "../../../context/auth"
import AsyncStorage from '@react-native-async-storage/async-storage';
import Settings_Btn from "./Btn"




import styles from './general_setings.style'

const NotificationsEnabled = ({enable}) =>{
  if(enable==true){
    console.log("NOTIFICATIONS ON")}
  else{
    console.log("NOTIFICATIONS OFF")
  }
}

const General_settings=() =>{

  const [enable,setEnable] = useState(false)
  const [state,setState] = useContext(AuthContext)

  const toggleSwitch = () => {
    setEnable(previousState => !previousState );
  
  }

  //routes
  const pressedEditProfile =()=>{
    router.push("screens/EditProfile")

  }
  

  const pressedBudgetPlan =()=>{
    return (
      router.push("screens/MyBudgetPlan")
    )
    
  }
  const pressedCategories =()=>{
    router.push("screens/Categories")
    
  }

  const pressedSignOut = async()=>{
    
      setState({token:"",user:null});
      await AsyncStorage.removeItem("auth-rn")
    
    
  }



  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>General</Text>

      <Settings_Btn icon_name={"faPenToSquare"} title={"Edit Profile"} subtitle={"Update and modify your profile"} onPress={pressedEditProfile}/>
      {/* <Settings_Btn icon_name={"faLock"} title={"Privacy"} subtitle={"Change your password"} onPress={pressedPrivacy}/>
       */}
      
      {/* Notifications switch */}
      <View style={styles.notif_Cont}>
        <View style={{flexDirection:'row'}}>
        
          <View style={{margin:10, marginLeft:15,width:50,height:50,backgroundColor:COLORS.secondary,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
            <MaterialIcons name="notifications" size={40} color={COLORS.tertiary} />     
          </View>
          <View style={{justifyContent:"center", marginLeft:5,marginRight:40}}>
            <Text style={{fontSize: 17,color: COLORS.tertiary,fontWeight:"bold"}}>Push Notifications</Text>
            {/* <Text style={{fontSize: 13,color: COLORS.secondary,fontWeight:"bold"}}>Change your notification settings</Text> */}
          </View>
          <Switch 
            style={{marginVertical:20}}
            trackColor={{false: '#767577', true: COLORS.secondary}}
            thumbColor={enable ? COLORS.white : COLORS.white}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={enable}
            
          ></Switch>
          <NotificationsEnabled enable={enable}/>
          </View>
        </View>


      {/* <Settings_Btn icon_name={"faBell"} title={"Notifications"} subtitle={"Change your notification settings"} onPress={pressedNotifications}/> */}
      
       <View style={styles.container2}>
      <Text style={styles.title}>Budget Settings</Text>
      </View>
      <Settings_Btn icon_name={"budget_plan"} title={"Budget Plan"} subtitle={"Modify your Budget Plan"} onPress={pressedBudgetPlan}/>
      <Settings_Btn icon_name={"categories"} title={"Categories"} subtitle={"Select categories for your expenses"} onPress={pressedCategories}/>
      
      <Text>{"\n\n"}</Text>
      <Settings_Btn icon_name={"logout"} title={"Sign Out"} style_logout={true} onPress={pressedSignOut}/>

    </View>
    </ScrollView>
    

  )
}




export default General_settings