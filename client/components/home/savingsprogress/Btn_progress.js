import React from "react";
import {View,Text,StyleSheet,Image,Pressable} from 'react-native'



import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faCarSide} from '@fortawesome/free-solid-svg-icons/faCarSide'
import { faPlaneDeparture} from '@fortawesome/free-solid-svg-icons/faPlaneDeparture'
import { faGraduationCap} from '@fortawesome/free-solid-svg-icons/faGraduationCap'
import { faCakeCandles} from '@fortawesome/free-solid-svg-icons/faCakeCandles'

import { AnimatedCircularProgress } from 'react-native-circular-progress';



import {COLORS,icons} from "../../../constants"


const IconSelection = (icon_name)=>{
    if (icon_name==="faCarSide") return (
        <View style={styles.col}>
            <FontAwesomeIcon icon={faCarSide} color={COLORS.dark} size={30}/>   
        </View> 
    )
    else if (icon_name==="faPlaneDeparture") return (
        <View style={styles.col}>
            <FontAwesomeIcon icon={faPlaneDeparture} color={COLORS.dark} size={30}/>
        </View>    
    )
    else if (icon_name==="faGraduationCap") return (
        <View style={styles.col}>
            <FontAwesomeIcon icon={faGraduationCap} color={COLORS.dark} size={30}/>  
        </View>  
    )
    else if (icon_name==="faCakeCandles") return (
        <View style={styles.col}>
            <FontAwesomeIcon icon={faCakeCandles} color={COLORS.dark} size={30}/> 
        </View>   
      )
    else if (icon_name==="add_btn") return(
        <View style={styles.add_btn_container}>
        <Image source={icons.add_more} style={styles.add_btn}/>
        </View>
    )
  


}


const Btn_progress=({icon_name,onPress, progress,add_btn})=>{


    return(
      <Pressable onPress={onPress} style={styles.container}>

        <AnimatedCircularProgress
        size={60}
        width={4}
        fill={progress}
        rotation={0}
        tintColor={COLORS.dark}
        // onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor={COLORS.primary} >
        {
            () => (
                IconSelection(icon_name)
               
            )
        }
        </AnimatedCircularProgress>
      
      </Pressable>
    )

}

const styles=StyleSheet.create({
    container: {
        paddingLeft:10
      },
      col:  {
        backgroundColor:"white",
        borderRadius:50,
        padding:10,
        left:0
    
      },
      add_btn_container:{
        marginHorizontal:0,
        paddingTop:20,
        position:"absolute",
        right:0,
    
        height:72,
        borderLeftColor:"white",
        borderRightColor:"transparent",
        borderTopColor:"transparent",
        borderBottomColor:"transparent",
        borderWidth:1
    
    
      },
      add_btn:{
        marginLeft:10,
        height:30,
        width:30
    
      },
    
    
    



})



export default Btn_progress