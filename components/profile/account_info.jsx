import React, { useContext,useState,useEffect } from 'react'
import { View, Text,Image,ImageBackground, useWindowDimensions,StyleSheet } from 'react-native'

import { icons,COLORS,SIZES } from '../../constants';
import {AuthContext} from '../../context/auth'




//contains all the basic info of the user 
const Account_Info = () => {
  const {height}=useWindowDimensions();

  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [image,setImage] =useState("")
  // const [password,setPassword]=useState("");
  
  const [state,setState] = useContext(AuthContext);

  useEffect(()=>{
   
    if (state){
      const {name , email,image} = state.user;
      setName(name);
      setEmail(email);
      setImage(image)
    }
  } , [state] )


  
  return (
    <View style={styles.container_}>
    <ImageBackground source={icons.background3_2} style={[styles.image,{ height: height* 0.27}]} imageStyle={{ borderBottomRightRadius: 25}}>
      <View style={styles.container}><Text style={styles.header}> Profile</Text></View>
      <View style={styles.container2}>
        <View style={styles.row}>
            <View>
                <Image source={image} style={[styles.profilepic,{ height: height* 0.11,width: height* 0.11}]}></Image>
            </View>
            <View style={styles.col2} >
                <Text style={styles.name}>{name} </Text>
                <Text style={styles.email}>{email}</Text>   
                
            </View>
        </View>
      </View>
      
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

  container_:{
    height:330,

  },
  image:{
    backgroundColor:"COLORS.lightWhite",
    bottom:9
    
    
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