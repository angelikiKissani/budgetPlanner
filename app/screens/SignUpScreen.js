import React,{useContext, useState} from 'react';
import {Text, View, StyleSheet,TextInput} from 'react-native';
import { router,Stack } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import {KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { SafeAreaProvider } from "react-native-safe-area-context";
import axios from 'axios';

import { COLORS,SIZES } from '../../constants';
import {SignUpButton} from '../../components';
import { AuthContext } from '../../context/auth';



const EMAIL_REGEX= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = ({navigation}) => {
  const {control, handleSubmit,formState:{errors}, watch}=useForm();
  const pswrd=watch("password");
  const [state,setState] = useContext(AuthContext);


  const pressedSignUp= async data => {
    name=data.name
    email=data.email
    password=data.password
    const resp= await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/signup",{name,email,password})
    if (resp.data.error){
      alert(resp.data.error)
    }
    else{
      // setState(resp.data)
      // await AsyncStorage.setItem("auth-rn",JSON.stringify(resp.data))
      alert("You can Sign In now")
      navigation.navigate("SignIn")
    }
    

  }
  const pressedTermsOfUse =() =>{
    // console.warn("TermsOfUse")
  }
  const pressedPrivacyPolicy =() =>{
    // console.warn("PrivacyPolicy")
  }
  const pressedSignIn = () => { 
  // router.push("screens/SignInScreen")
  navigation.navigate("SignIn")
  
  }



  return (
    <SafeAreaProvider style={{flex:1,headerTitle:"",backgroundColor:"white"}}>
      <Stack.Screen
          options={{
              headerShadowVisible:false ,
              headerShown:false
          }}/>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      
        <Text style={styles.signUp}>
          SignUp
        </Text>
        <Text style={styles.title}>
          NAME
        </Text>
        <Controller 
              control={control}
              name='name'
              rules={{
                required:"Name is required",
                minLength:{
                  value:3,
                  message:"Should be at least 3 characters long"},
                maxLength:{
                  value:20,
                  message:"Should be max 20 characters long"
                }}}
              render={({field:{value,onChange,onBlur},fieldState:{error}})=>
                <>
                  <View style={[styles.input_container,{borderColor: error ? COLORS.warm : COLORS.gray}]}>
                    <TextInput 
                      value={value} 
                      onChangeText={onChange} 
                      onBlur={onBlur} 
                      autoComplete='false'
                      autoCorrect="false"
                      placeholder={"Name"}
                      placeholderTextColor={COLORS.gray2} 
                      style={styles.input} />
                  </View>
                  {error&&(
                    <Text style={{color:COLORS.warm}}>{error.message}</Text>
                    
                  )}
              </>
              }
            /> 
        <Text style={styles.title}>
          EMAIL
        </Text>
        
        <Controller 
                control={control}
                name='email'
                rules={{
                  required:"Email Address is required",
                  pattern:{
                    value:EMAIL_REGEX,
                    message:"Invalid Email"
                  }
                }}
                render={({field:{value,onChange,onBlur},fieldState:{error}})=>
                  <>
                    <View style={[styles.input_container,{borderColor: error ? COLORS.warm : COLORS.gray}]}>
                      <TextInput 
                        value={value} 
                        onChangeText={onChange} 
                        onBlur={onBlur} 
                        autoCapitalize={false}
                        autoComplete='false'
                        autoCorrect="false"
                        placeholder={"Email"}
                        placeholderTextColor={COLORS.gray2} 
                        style={styles.input} 
                        autoCompleteType="email"
                        keyboardType='email-address'
                        clearButtonMode="always"/>
                    </View>
                    {error&&(
                      <Text style={{color:COLORS.warm}}>{error.message}</Text>
                      
                    )}
                </>
                }
              /> 
        <Text style={styles.title}>
          PASSWORD
        </Text>
        <Controller 
                control={control}
                name='password'
                rules={{
                  required:"Password is required",
                  minLength:{
                    value:8,
                    message:"Password should be at least 8 characters long"},
                  maxLength:{
                    value:20,
                    message:"Password should be max 20 characters long"
                  }
                  }
                }
                render={({field:{value,onChange,onBlur},fieldState:{error}})=>
                  <>
                    <View style={[styles.input_container,{borderColor: error ? COLORS.warm : COLORS.gray}]}>
                      <TextInput 
                        value={value} 
                        onChangeText={onChange} 
                        onBlur={onBlur} 
                        autoCapitalize={false}
                        autoComplete='false'
                        autoCorrect="false"
                        placeholder={"Password"} 
                        placeholderTextColor={COLORS.gray2} 
                        style={styles.input} />
                    </View>
                    {error&&(
                      <Text style={{color:COLORS.warm}}>{error.message}</Text>
                    )}
                </>
                }
              /> 
        <Text style={styles.title}>
          REPEAT PASSWORD
        </Text>
        
        <Controller 
                control={control}
                name='repeatPassword'
                rules={{validate: value => value== pswrd || "Passwords do not match"}}
                render={({field:{value,onChange,onBlur},fieldState:{error}})=>
                  <>
                    <View style={[styles.input_container,{borderColor: error ? COLORS.warm : COLORS.gray}]}>
                      <TextInput 
                        value={value} 
                        onChangeText={onChange} 
                        onBlur={onBlur} 
                        autoCapitalize={false}
                        autoComplete='false'
                        autoCorrect="false"
                        placeholder={"Repeat password"} 
                        placeholderTextColor={COLORS.gray2} 
                        style={styles.input} />
                    </View>
                    {error&&(
                      <Text style={{color:COLORS.warm}}>{error.message}</Text>
                    )}
                </>
                }
              /> 
        <Text style={styles.text}>
          By registering, you agree to the <Text style={styles.link} onPress={pressedTermsOfUse}>Terms of Use</Text> and <Text style={styles.link} onPress={pressedPrivacyPolicy}>Privacy Policy</Text> 
        </Text>


        <SignUpButton 
          text={"Sign Up"} 
          onPress={handleSubmit(pressedSignUp)} 
          cont_style={"container_1"}
          text_style={"text_1"} />
        <SignUpButton 
          text={"Already have an account? Sign In"} 
          onPress={pressedSignIn}
          cont_style={"container_2"}
          text_style={"text_4"}
          />


      
        </KeyboardAwareScrollView>
    </SafeAreaProvider>
  )
}

const styles= StyleSheet.create({
  
    container:{
        
        paddingTop:"35%" ,
        margin:20 

    },
    signUp:{
      fontSize:SIZES.xxLarge,
      color:COLORS.tertiary,
      fontWeight:"bold",
      marginStart:0,
      alignSelf:"center",
      
    },
    title:{
      fontSize:SIZES.large,
      color:COLORS.secondary,
      marginHorizontal:3,
      fontWeight:"500",
      marginTop:20
    },
    
    text:{
      fontSize:SIZES.small,
      fontWeight:"bold",
      color:COLORS.secondary,
      marginVertical:22
      

    },
    link:{
      textDecorationLine:"underline",
      color:COLORS.tertiary
    },
    input_container:{
      backgroundColor: "white",
      borderBottomWidth:1,
      borderBottomColor: COLORS.secondary,
     
      width:"100%",
      shadowColor:COLORS.gray,

      paddingVertical:10,
      paddingHorizontal:5,
      marginVertical:2


  },
  input:{
      color:COLORS.tertiary,
      fontSize:SIZES.large

  }
})

    


export default SignUpScreen