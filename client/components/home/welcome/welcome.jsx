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
      console.log(state);
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
    
    <ImageBackground source={icons.background3_2} style={[styles.image,{ height: height* 0.27}]} imageStyle={{ borderBottomLeftRadius: 35,borderBottomRightRadius: 35,bottom:15,flex:1}}>
      
      <ProfileB onPress={pressedProfileBtn} image={image}/>
      <View style={styles.container}>
        <Text style={styles.welcomeBack}>Welcome back,</Text>
        <Text style={styles.userName}>{name}!</Text>
      </View>
      
      
    </ImageBackground>
    
  )
}

const ProfileB=({image,onPress})=> {
  const {height}=useWindowDimensions()
  return (
    <TouchableOpacity onPress={onPress}>
    <Image source={image} 
           style={[styles.profilepic,{height:height*0.043,width:height*0.043}]}></Image>
    
    </TouchableOpacity>
  )
}



export default Welcome;