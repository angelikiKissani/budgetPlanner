import React from "react";
import {View,Text,StyleSheet,Image,Pressable} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

import { AnimatedCircularProgress } from 'react-native-circular-progress';



import {COLORS,icons} from "../../../constants"


const IconSelection = (icon_name)=>{
    if (icon_name==="faCarSide") return (
        <View style={styles.col}>
            <Ionicons name="car" size={30} color={COLORS.dark} />
            
        </View> 
    )
    else if (icon_name==="faPlaneDeparture") return (
        <View style={styles.col}>
            <Entypo name="aircraft" size={30} color={COLORS.dark}/>
            
        </View>    
    )
    else if (icon_name==="faGraduationCap") return (
        <View style={styles.col}>
          <Entypo name="graduation-cap" size={30} color={COLORS.dark} />
        </View>  
    )
    else if (icon_name==="faCakeCandles") return (
        <View style={styles.col}>
            <Entypo name="cake" size={30} color={COLORS.dark}/>
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