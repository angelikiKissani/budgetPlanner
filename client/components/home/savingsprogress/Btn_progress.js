import React from "react";
import {View,Text,StyleSheet,Image,Pressable} from 'react-native'


import { AnimatedCircularProgress } from 'react-native-circular-progress';



import {COLORS,} from "../../../constants"
import IconSelector from "../../common/iconselection/IconSelector";

const Btn_progress=({icon_family,icon_name,onPress, progress,add_btn})=>{


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
              <View style={add_btn? styles.add_btn_container : styles.col}>
                <IconSelector family={icon_family} color={COLORS.dark} icon={icon_name} size={30} />
              </View>
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
      
      alignItems:"flex-end",
  
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
      width:30,
      
     
  
    },
    
    
    



})



export default Btn_progress