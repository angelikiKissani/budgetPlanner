import React from 'react'
import { View, Text,Image,ImageBackground, useWindowDimensions, TouchableOpacity, } from 'react-native'
import {router} from  'expo-router';
import {icons} from "../../../constants"
import styles from './welcome.style'

const Welcome = () => {
  const {height}=useWindowDimensions();

  const pressedProfileBtn= () => {

    router.push("(tabs)/ProfileScreen");
  }

  return (
    <ImageBackground source={icons.background3_2} style={[styles.image,{ height: height* 0.26}]} imageStyle={{ borderBottomLeftRadius: 25,borderBottomRightRadius: 25}}>
      
      <ProfileB onPress={pressedProfileBtn}/>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Back,{"\n"}Angeliki!</Text>
      </View>
      
    </ImageBackground>
  )
}

const ProfileB=({onPress})=> {
  const {height}=useWindowDimensions()
  return (
    <TouchableOpacity onPress={onPress}>
    <Image source={icons.profile} 
           style={[styles.profilepic,{height:height*0.05,width:height*0.05}]}></Image>
    
    </TouchableOpacity>
  )
}



export default Welcome;