import React from "react";
import {View,Text,StyleSheet,Image,Pressable, Touchable, TouchableOpacity} from 'react-native'


import { AnimatedCircularProgress } from 'react-native-circular-progress';



import {COLORS,} from "../../../constants"
import IconSelector from "../../common/iconselection/IconSelector";

const Btn_progress=({icon_family,icon_name,onPress, progress,add_btn})=>{


    return(

    add_btn?
    <TouchableOpacity onPress={onPress} style={styles.add_btn_container}>
        <IconSelector family={icon_family} color={COLORS.dark} icon={icon_name} size={31} />
      </TouchableOpacity>
    :
    <Pressable onPress={onPress} style={styles.container}>

        <AnimatedCircularProgress
        size={65}
        width={6}
        fill={progress}
        rotation={0}
        fillTransparency={false}
        tintColor={COLORS.dark}
        
        lineCap="round"
        borderWidth={10}
        style={{shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.20,
          shadowRadius: 1.41,
          
          elevation: 2,}}
        // onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor={'#E0E0E0'}
         >
        {
            () => (
              <View style={styles.col}>
                <IconSelector family={icon_family} color={COLORS.dark} icon={icon_name} size={31} />
              </View>
            )
        }
        </AnimatedCircularProgress>
      
      </Pressable>
  
  
     
    )

}

const styles=StyleSheet.create({
    container: {
        paddingLeft:5
      },
    col:  {
      backgroundColor:"white",
      borderRadius:50,
      height:56,
      width:56,
      alignItems:"center",
      justifyContent:"center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      
      elevation: 3,
  
    },
    add_btn_container:{
      
      justifyContent:"center",
      alignItems:"flex-end",
      flexDirection:"row"
  
      // // height:100,
      // borderLeftColor:"white",
      // borderRightColor:"transparent",
      // borderTopColor:"transparent",
      // borderBottomColor:"transparent",
      // borderWidth:1
  
  
    },
  
    
    
    



})



export default Btn_progress