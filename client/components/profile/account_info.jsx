import React, { useContext,useState,useEffect } from 'react'
import { View, Text,Image,ImageBackground, useWindowDimensions,StyleSheet } from 'react-native'

import { icons,COLORS,SIZES } from '../../constants';
import {AuthContext} from '../../context/auth2'
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from 'axios';



//contains all the basic info of the user 
const Account_Info = () => {
  const {height}=useWindowDimensions();

  // const {email,setEmail}=useState("");
  // const {name,setName}=useState("");
  // // const [password,setPassword]=useState("");
  
  // // const {role,setRole}= useState("");
  // const [state,setState] = useContext(AuthContext);

  // useEffect(()=>{
  //   console.log(state)
  //   if (state){
  //     const {name , email} = state.user;
  //     setName(name);
  //     setEmail(email);
  //     // setRole(role);
  //   }
  // } , [state] )

  // const handleSubmit = async ()=>{
  //   if(email ==='' ){
  //     alert("afar")
  //     return;
  //   }
  //   const resp = await axios.post("http://192.168.1.45:8001/api/signin",{email,password});
  //   if (resp.data.error){
  //     alert(resp.data.error)
  //   }
  //   else{
  //     // alert("Sign In Successful")
  //     setState(resp.data)
  //     await AsyncStorage.setItem("auth-rn",JSON.stringify(resp.data))
  //     router.push("(tabs)")}
  //   }

  
  return (
    <View style={styles.container_}>
    <ImageBackground source={icons.background3_2} style={[styles.image,{ height: height* 0.26}]} imageStyle={{ borderBottomRightRadius: 25}}>
      <View style={styles.container}><Text style={styles.header}> Profile</Text></View>
      <View style={styles.container2}>
        <View style={styles.row}>
            <View>
                <Image source={icons.profile} style={[styles.profilepic,{ height: height* 0.11,width: height* 0.11}]}></Image>
            </View>
            <View style={styles.col2} >
                <Text style={styles.name}>name </Text>
                <Text style={styles.email}>email</Text>   
                
            </View>
        </View>
      </View>
      
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

  container_:{
    height:330

  },
  image:{
    backgroundColor:COLORS.lightWhite,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.35,

    elevation: 19,
    
  },
  row: {
    flexDirection: "row",
    
  },

  container: {
    marginTop:80,
    marginLeft:22
  },

  container2: {
    marginTop:20,
    height:180,
    alignSelf:"center",
    backgroundColor:"white",
    width: "89%",
    paddingTop:10,
    paddingLeft:20,
    borderRadius:25
    
  },
  col2:{
    padding:20,
    paddingTop:50

    

  },
  header: {
    fontSize: 24,
    color: COLORS.tertiary,
    fontWeight:"bold"
  },
  profilepic:{ 
    
    marginTop:32,
    marginLeft:10,
    borderRadius:80,
  
  },
  name:{
    color:COLORS.tertiary,
    fontSize:SIZES.medium,
    fontWeight:"900",
    textAlign:"center"
  },
  email:{
    color:COLORS.secondary,
    fontSize:SIZES.medium,
    fontWeight:"500",
    textAlign:"center",
    marginTop:5

  }
}


);



export default Account_Info;