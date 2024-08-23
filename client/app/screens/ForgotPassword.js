import React,{useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {COLORS,SIZES } from '../../constants';
import {ForgotPasswordB,ForgotPasswordI} from '../../components';
import { router } from 'expo-router';
import axios from 'axios';






const ForgotPassword = ({navigation}) => {
  const [visible,setVisible]=useState();
  const [email,setEmail]=useState("");
  const [password,setPassword] =useState("");
  const [resetCode,setResetCode] =useState("");


  const pressedSignIn = () => { 
    navigation.navigate("SignIn")
  }

   const pressedSendCode= async () => {
    if (!email){ 
      alert("Email is required");
      return;
    }
    try{
      const data= await axios.post("http://192.168.1.45:8001/api/forgotPassword",{email});
      if (data.error) alert(data.error);
      else{
        setVisible(true); 
      }
    }catch(err) {alert("Error sending email. Try again."); console.log(err);}
  
}
  const pressedPasswordReset =async () =>{
    try{
      const resp= await axios.post("http://192.168.1.45:8001/api/resetPassword",{email,resetCode,password});
      if (data.error) alert(data.error);
      else{
        // alert("Now you can login with your new password!");
        navigation.navigate("SignIn")
      }
    }catch(err) {alert("Password reset failed. Try again."); console.log(err);}
  

  }


  return (
    <View style={styles.container}>  
      <Text style={styles.signUp}>
        Reset your Password
      </Text>
      <ForgotPasswordI 
        placeholder={"Email Address"} 
        value={email} 
        onChangeText={(text)=>setEmail(text)}
       />      
       {visible && (
        <>
          <ForgotPasswordI 
            placeholder={"New password"} 
            value={password} 
            onChangeText={(text)=>setPassword(text)}/>
          <ForgotPasswordI 
            placeholder={"Password Reset Code"} 
            value={resetCode} 
            onChangeText={(text)=>setResetCode(text)}/>
       
        
        
        </>
       )}
      <ForgotPasswordB 
        text={visible? "Reset Password":"Request Reset Code"} 
        onPress={visible? pressedPasswordReset : pressedSendCode} 
        cont_style={"container_1"}
        text_style={"text_1"} />
      <ForgotPasswordB 
          text={ "Back to Sign In"} 
          onPress={pressedSignIn}
          cont_style={"container_2"}
          text_style={"text_2"}
          />
      

     
    </View>
  )
}

const styles= StyleSheet.create({
  
    container:{
        paddingTop:"40%" ,
        margin:20 

    },
    signUp:{
      fontSize:SIZES.xxLarge,
      color:COLORS.tertiary,
      fontWeight:"bold",
      margin:15,
      marginStart:0,
      
    },
    image:{
        width:"80%",
        maxWidth:350,
        height:"10%",
        padding:100,
    },
    text:{
      fontSize:SIZES.small,
      fontWeight:"bold",
      color:COLORS.secondary,
      marginVertical:10,
      

    },
    link:{
      textDecorationLine:"underline",
      color:COLORS.tertiary
    }
})

    


export default ForgotPassword