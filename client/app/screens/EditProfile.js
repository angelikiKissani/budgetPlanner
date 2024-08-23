import React,{useContext, useState,useEffect} from 'react';
import { View,Text, StyleSheet,TouchableOpacity,TextInput,useWindowDimensions, Pressable,ImageBackground,Image} from 'react-native';
import {router, Stack} from 'expo-router';
import { Keyboard } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AuthContext } from '../../context/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from '@expo/vector-icons/Entypo';
import * as ImagePicker from "expo-image-picker"
import axios from 'axios';


import { COLORS,SIZES,icons} from "../../constants"


const EditProfile = ({navigation}) => {
  const {height}=useWindowDimensions();


  const [name,setName] = useState();
  const [surname,setSurname]=useState();
  const [email,setEmail]=useState();
  const [fullName,setFullName]=useState();
  const [password,setPassword] =useState();
  const [state,setState] = useContext(AuthContext);
  const [image,setImage] =useState({ url:"",public_id:""})
  const [uploadImage,setUploadImage] =useState("");
  const [newPassword,setNewPassword] = useState("");
  const [repeat,setRepeat]=useState("");
  

  useEffect(()=>{
      if (state){
        const {name,email,image} = state.user;
        
        setEmail(email);
        setName(name.split(" ")[0]);
        setSurname(name.split(" ")[1]);
        setImage(image);
        
      }
    } , [state] )

  // UPLOAD IMAGE 
  const handleUpload= async()=>{
    let permissionResult =await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (permissionResult.granted ===false){ 
      alert("Camera acess is required") ;
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true,
      aspect:[4,3],
      base64:true,
    })
    if (pickerResult.canceled===true){return;};

    let base64Image = `data:image/jpg;base64,${pickerResult.assets[0].base64}`;
    setUploadImage(base64Image);

    // find the user from Async storage and use the data to store the new image with axios.post
    let storedData =await AsyncStorage.getItem("auth-rn");
    const parsed =JSON.parse(storedData);
    // console.log(parsed.user)
    const {data}= await axios.post("http://192.168.1.45:8001/api/upload-image",{image:base64Image,user:parsed.user });
    console.log("upload response=>",data);


    // update async storage with the new data
    const stored=JSON.parse(await AsyncStorage.getItem("auth-rn"));
    stored.user = data;
    console.log(stored);
    console.log(data);
    await AsyncStorage.setItem("auth-rn",JSON.stringify(stored));
    setState({...state,user:data});
    setImage(data.image);

    

  }
  
  const saveNewPasswordPressed = async() =>{
    
    if(newPassword==="" || repeat=="" ){
      alert("Please confirm that all passwords have been entered.")
      return
      
    }
    else if (newPassword.length>20 ||newPassword.length<8 ){
      alert("Password should be at least 8 characters long and max 20 characters long")
      return
    }
    else if (newPassword!=repeat){
      alert("New password does not match.Enter new password again.")
      return
    }
    try{
      setPassword(newPassword)
      let storedData = await AsyncStorage.getItem("auth-rn");
      const parsed = JSON.parse(storedData);
      console.log(password)
      const resp =await axios.post("http://192.168.1.45:8001/api/update-password",{password , user:parsed.user});
      const data= resp.data;
      if(data.error) alert(data.error);
      else{ alert("Password updated successfully")}

    }catch(error){console.log(error)}
 
  }
  const updatePersonalInfoPressed =async() =>{
    if(/[*%#:&\s]/.test(name) || /[*%#:&\s]/.test(surname) ){
      alert("Please avoid using any of the following characters or spaces:*%#:&")
      return
      
    }
    
    try{
      var fname=name+" "+surname
      
      let storedData = await AsyncStorage.getItem("auth-rn");
      const parsed = JSON.parse(storedData);
      console.log(fname)
      const resp =await axios.post("http://192.168.1.45:8001/api/update-name",{name:fname , user:parsed.user});
      const data= resp.data;

      if(data.error) alert(data.error);
      else{ alert("Name and Surname updated successfully")}

      const stored=JSON.parse(await AsyncStorage.getItem("auth-rn"));
      stored.user = data;
      console.log(stored);
      console.log(data);
      await AsyncStorage.setItem("auth-rn",JSON.stringify(stored));
      setState({...state,user:data});


    }catch(error){console.log(error)}

  }

  

  return (
    <SafeAreaProvider style={{flex:1,headerTitle:"",backgroundColor:"white"}}>
      <Stack.Screen options={{headerShadowVisible:false ,headerShown:false}}/>
        <Pressable onPress={Keyboard.dismiss}>
          <View style={styles.container}>

              {/* SCREEN TITLE */}
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
                <AntDesign name="left" size={24} color={COLORS.dark} />
                </TouchableOpacity>
                <View style={{flex:1,backgroundColor:"white",height:40}}>
                    <Text style={[styles.title,{color:COLORS.tertiary,bottom:2}]}>Edit Profile</Text>
                </View>
              </View>
              
              {/* PROFILE SETTINGS */}
              <View style={{marginVertical:20,paddingBottom:10,borderBottomWidth:2,borderBottomColor:COLORS.tertiary}}>
                <View style={{flexDirection:"row"}}>
                  <AntDesign name="user" size={25} color={COLORS.tertiary} style={{marginRight:5,marginTop:8}} />
                
                  <View >
                    <TextInput 
                        value={name}
                        onChangeText={(text)=>setName(text)} 
                        placeholder='name' 
                        autoCapitalize='none'
                        autoComplete='off'
                        autoCorrect="false"
                        placeholderTextColor={COLORS.dark} 
                        style={{margin:10,fontSize:18 , 
                          borderBottomWidth:1,
                          borderBottomColor:COLORS.gray2,
                          width:200}}></TextInput>
                    <TextInput value={surname} 
                        autoCapitalize='none'
                        autoComplete='off'
                        autoCorrect="false"
                      placeholder='surname' onChangeText={text=>setSurname(text)}placeholderTextColor={COLORS.dark} style={{margin:10,fontSize:18 , borderBottomWidth:1,borderBottomColor:COLORS.gray2,width:200}}></TextInput>
                    <View style={{margin:10, borderBottomWidth:1,borderBottomColor:COLORS.gray2,width:200}}><Text style={{fontSize:18 }} >{email}</Text></View>
                    
                    
                  </View>
                  {/* image selection */}
                  <View style={{flex:1}}>
                        <View style={{flex:1,alignItems:"center"}}>
                          {image && image.url ? <Image source={{uri: image.url}} style={[styles.profilepic,{ height: height* 0.10,width: height* 0.10}]}/> 
                          :(
                            uploadImage ? <Image source={{uri:uploadImage}} style={[styles.profilepic,{ height: height* 0.10,width: height* 0.10}]}/>:
                            (<TouchableOpacity onPress={()=>handleUpload()} style={{flex:1,justifyContent:"center"}}>
                              <Entypo name="camera" size={30} color={COLORS.dark} style={{alignSelf:'center',padding:20,borderWidth:2,borderRadius:25,borderColor:COLORS.dark}}/>
                              <Text style={{fontSize:15,marginBottom:5,marginTop:15,fontWeight:700,color:COLORS.dark}}>Edit Picture</Text>
                            </TouchableOpacity>)
                          )}
                          
                        </View>
                        {image && image.url ? (
                          <TouchableOpacity onPress={()=>{handleUpload()}} style={{alignSelf:"center"}}>
                            <Text style={{fontSize:15,marginBottom:5,marginTop:15,fontWeight:700,color:COLORS.dark}}>Edit Picture</Text>
                          </TouchableOpacity>
                        ):(<></>)}
                        
                  </View>
                </View>
                <Pressable 
                      onPress={updatePersonalInfoPressed} 
                      style={{
                        paddingHorizontal:20,
                        alignItems:"center",
                        alignSelf:"center",
                        marginTop:10,
                        width:"100%",height:40,
                        justifyContent:"center",
                        borderRadius:15,
                        paddingVertical:1, 
                        backgroundColor:COLORS.tertiary,}} >
                    <Text style={{fontSize:SIZES.medium,fontWeight:"bold",color:"white"}}>Update Personal Info </Text>
                  </Pressable>
                
              </View>

              {/* PASSWORD SETTINGS */}
              <View style={{marginBottom:10,paddingBottom:10,borderBottomWidth:2,borderBottomColor:COLORS.tertiary}}>
                <View style={{flexDirection:"row"}}>
                  <MaterialIcons name="password"  size={25} color={COLORS.tertiary} style={{marginRight:5,marginTop:8}} />
                  <View >
                    <TextInput value={newPassword} placeholder='New password' onChangeText={text=>{setNewPassword(text)}} placeholderTextColor={COLORS.dark} style={{margin:10,fontSize:18 , borderBottomWidth:1,borderBottomColor:COLORS.gray2,width:200}}></TextInput>
                    <TextInput value={repeat} placeholder='Repeat new password'onChangeText={text=>{setRepeat(text)}} placeholderTextColor={COLORS.dark} style={{margin:10,fontSize:18 , borderBottomWidth:1,borderBottomColor:COLORS.gray2,width:200}}></TextInput>
                
                  </View>
                </View>
                <Pressable 
                        onPress={saveNewPasswordPressed} 
                        style={{
                          paddingHorizontal:20,
                          alignItems:"center",
                          alignSelf:"center",
                          marginTop:10,
                          width:"100%",height:40,
                          justifyContent:"center",
                          borderRadius:15,
                          paddingVertical:1, 
                          backgroundColor:COLORS.tertiary,}} >
                      <Text style={{fontSize:SIZES.medium,fontWeight:"bold",color:"white"}}>Save new password</Text>
                </Pressable>
              </View>
          </View>
        </Pressable>
                 
    </SafeAreaProvider>
  )
 
}

const styles= StyleSheet.create({
  container:{
    marginTop:60,
    marginHorizontal:20,
  
    
  },
  container_2:{
    marginHorizontal:15,
    backgroundColor:"white",
    flexDirection:"row",
    height:80,
    alignItems:"center",
    // justifyContent:"space-evenly"

  },
  row:{
    flexDirection:"row",
    
  },
  container_3:{
    borderWidth:2,
    borderColor:COLORS.secondary,
    borderRadius:25
  },
  title:{
    color:"white",
    fontSize:SIZES.large,
    fontWeight:'bold',
    alignSelf:"center"
  },
  title_2: {
    fontSize: 18,
    color: COLORS.tertiary,
    fontWeight:"bold"
  },
  
  profilepic:{ 
    
    marginTop:5,
    marginLeft:10,
    borderRadius:80,
  
  }
})


export default EditProfile