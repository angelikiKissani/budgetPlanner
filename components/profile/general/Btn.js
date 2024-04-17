import React from "react";
import {View,Text,StyleSheet,Image,Pressable} from 'react-native'



import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons/faPenToSquare'
import {faRightFromBracket}from '@fortawesome/free-solid-svg-icons/faRightFromBracket'
import { faLock} from '@fortawesome/free-solid-svg-icons/faLock'
import { faBell} from '@fortawesome/free-solid-svg-icons/faBell'
import {faIcons}  from '@fortawesome/free-solid-svg-icons/faIcons'
import {COLORS,icons} from "../../../constants"

 
const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )
const IconSelection = (icon_name)=>{
    if (icon_name==="faPenToSquare") return (
      <FontAwesomeIcon icon={faPenToSquare} color={COLORS.tertiary} size={32}/>    
    )
    else if (icon_name==="faLock") return (
      <FontAwesomeIcon icon={faLock} color={COLORS.tertiary} size={32}/>    
    )
    else if (icon_name==="faBell") return (
      <FontAwesomeIcon icon={faBell} color={COLORS.tertiary} size={32}/>    
    )
    else if (icon_name=="budget_plan") return (
      <Image source={icons.budget_plan_logo} style={styles.logo}/>
    )
    else if (icon_name=="categories") return (
      <FontAwesomeIcon icon={faIcons} color={COLORS.tertiary} size={32}/>    
  
    )
    else if (icon_name=="logout") return (
      <FontAwesomeIcon icon={faRightFromBracket} color={COLORS.tertiary} size={32}/>    
  
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