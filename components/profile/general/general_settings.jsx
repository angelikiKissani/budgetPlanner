import { View, Text,ScrollView } from 'react-native'
import React from 'react'



import Settings_Btn from "./Btn"




import styles from './general_setings.style'



const General_settings=() =>{
  //routes
  const pressedEditProfile =()=>{
    return console.log("pressedEditProfile")

  }
  const pressedPrivacy =()=>{
    return console.log("pressedPrivacy")
    
  }

  const pressedNotifications =()=>{
    return console.log("pressedNotifications")
    
  }
  const pressedBudgetPlan =()=>{
    return console.log("pressedBudgetPlan")
    
  }
  const pressedCategories =()=>{
    return console.log("pressedCategories")
    
  }

  const pressedSignOut =()=>{
    return console.log("pressedSignOut")
    
  }



  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>General</Text>

      <Settings_Btn icon_name={"faPenToSquare"} title={"Edit Profile"} subtitle={"Update and modify your profile"} onPress={pressedEditProfile}/>
      <Settings_Btn icon_name={"faLock"} title={"Privacy"} subtitle={"Change your password"} onPress={pressedPrivacy}/>
      <Settings_Btn icon_name={"faBell"} title={"Notifications"} subtitle={"Change your notification settings"} onPress={pressedNotifications}/>
      
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