import React from "react";
import {View,Text,StyleSheet,Image,Pressable} from 'react-native'

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import {COLORS,icons} from "../../../constants"

 
const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )
const IconSelection = (icon_name)=>{
    if (icon_name==="faPenToSquare") return (
      <MaterialIcons name="mode-edit" size={32} color={COLORS.tertiary}/>  
    )
    else if (icon_name==="faLock") return (
      <Ionicons name="lock-closed" size={32} color={COLORS.tertiary} />
    )
    
    else if (icon_name=="budget_plan") return (
      <Image source={icons.budget_plan_logo} style={styles.logo}/>
    )
    else if (icon_name=="categories") return (
      <FontAwesome5 name="icons" size={32} color={COLORS.tertiary} />
  
    )
    else if (icon_name=="logout") return (
      <MaterialIcons name="logout" color={COLORS.tertiary} size={32}/>    
  
    )

}


const Settings_Btn=({icon_name, title,subtitle,style_logout, onPress})=>{


    return(
      <Pressable onPress={onPress} style={styles.container}>
        <Row>
          <View style={styles.box}>
              {IconSelection(icon_name)}         
         </View>
          <View style={styles.col}>
            <Text style={styles.title}>{title}</Text>
            {style_logout ? null : <Text style={styles.subtitle}>{subtitle}</Text>}

          </View>
       
        </Row>
      
      </Pressable>
    )

}

const styles=StyleSheet.create({
    container:{
        marginTop:10,
        marginBottom:5,
        backgroundColor:"white",
        height:70,
        width:"90%",
        shadowColor: COLORS.gray,
        borderRadius:20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,

        
    },
    row: {
        flexDirection: "row",
        
      },
    box:{
      margin:10,
      marginLeft:15,
      width:50,
      height:50,
      backgroundColor:COLORS.secondary,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center"
    },
    col:{
      justifyContent:"center",
      marginLeft:5

    },

    title: {
      fontSize: 17,
      color: COLORS.tertiary,
      fontWeight:"bold"
    },
    subtitle:{
      fontSize: 13,
      color: COLORS.secondary,
      fontWeight:"bold"

    },
    logo:{
      width:37,height:30
    }



})


export default Settings_Btn