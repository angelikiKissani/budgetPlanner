import React, { useContext ,useState,useEffect} from 'react'
import { View, Text,Image,ImageBackground, useWindowDimensions, TouchableOpacity, } from 'react-native'
import {router} from  'expo-router';
import {icons} from "../../../constants"
import styles from './welcome.style'
import { AuthContext } from '../../../context/auth';

const Welcome = ({navigation}) => {
  const {height}=useWindowDimensions();
  const [state,setState] = useContext(AuthContext);
  const [name,setName]=useState("");
  const [image,setImage] = useState("");

  useEffect(()=>{
    if (state){
      const {name,image } = state.user;
      fullName=name.split(" ");
      setName(fullName[0]);
      setImage(image)
      
    }
  } , [state] )


  const pressedProfileBtn= () => {
    navigation.navigate("Profile")

    
  }

  return (
    <ImageBackground source={icons.background3_2} style={[styles.image,{ height: height* 0.266,flex:1}]} imageStyle={{ borderBottomLeftRadius: 25,borderBottomRightRadius: 25}}>
      
      <ProfileB onPress={pressedProfileBtn} image={image}/>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Back,{"\n"}{name}!</Text>
      </View>
      
    </ImageBackground>
  )
}

const ProfileB=({image,onPress})=> {
  const {height}=useWindowDimensions()
  return (
    <TouchableOpacity onPress={onPress}>
    <Image source={image} 
           style={[styles.profilepic,{height:height*0.05,width:height*0.05}]}></Image>
    
    </TouchableOpacity>
  )
}



export default Welcome;