import React,{useState} from 'react';
import { View,Text, StyleSheet,TouchableOpacity,TextInput,useWindowDimensions, Pressable,ImageBackground,Image} from 'react-native';
import {router, Stack} from 'expo-router';
import { Keyboard } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaProvider } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';





import { COLORS,SIZES,icons} from "../../constants"







const EditProfile = () => {
  const [name,setName] = useState();
  const [surname,setSurname]=useState();
  const [email,setEmail]=useState()
  const {height}=useWindowDimensions();
  
  const saveNewPasswordPressed = () =>{
    console.log("saveNewPasswordPressed")
  }

  

  return (
    <SafeAreaProvider style={{flex:1,headerTitle:"",backgroundColor:"white"}}>
      
      <Stack.Screen
        options={{
            headerShadowVisible:false ,
            headerShown:false
        }}/>
        <Pressable onPress={Keyboard.dismiss}>
          <View style={styles.container}>

              {/* SCREEN TITLE */}
              <View style={styles.row}>
                <TouchableOpacity onPress={()=>{router.push("(tabs)/ProfileScreen")}}>
                <AntDesign name="left" size={24} color={COLORS.dark} />
                </TouchableOpacity>
                <View style={{flex:1,backgroundColor:"white",height:40}}>
                    <Text style={[styles.title,{color:COLORS.tertiary,bottom:2}]}>Edit Profile</Text>
                </View>
              </View>
              
              {/* PROFILE SETTINGS */}
              <View style={{marginVertical:20,paddingBottom:10,borderBottomWidth:2,borderBottomColor:COLORS.tertiary,flexDirection:"row"}}>
                <AntDesign name="user" size={25} color={COLORS.tertiary} style={{marginRight:5,marginTop:8}} />
              
                <View >
                  <TextInput 
                      value={name} 
                      placeholder='name' 
                      placeholderTextColor={COLORS.dark} 
                      onChangeText={newName =>setName({newName})}
                      style={{margin:10,fontSize:18 , 
                        borderBottomWidth:1,
                        borderBottomColor:COLORS.gray2,
                        width:200}}></TextInput>
                  <TextInput value={surname} placeholder='surname'placeholderTextColor={COLORS.dark} style={{margin:10,fontSize:18 , borderBottomWidth:1,borderBottomColor:COLORS.gray2,width:200}}></TextInput>
                  <TextInput value={email} placeholder='email'placeholderTextColor={COLORS.dark} style={{margin:10,fontSize:18 , borderBottomWidth:1,borderBottomColor:COLORS.gray2,width:200}}></TextInput>
                  
                  
                </View>
                
                <View >
                      <View>
                          <Image source={icons.profile} style={[styles.profilepic,{ height: height* 0.11,width: height* 0.11}]}></Image>
                      </View>
                      <View style={{alignSelf:"center",marginLeft:5}} > 
                          <Text style={{fontSize:15,margin:5,fontWeight:700,color:COLORS.dark}}>Edit Picture</Text>
                      </View>
                </View>
              </View>

              {/* PASSWORD SETTINGS */}
              <View style={{marginBottom:10,paddingBottom:10,borderBottomWidth:2,borderBottomColor:COLORS.tertiary,flexDirection:"row"}}>
                <MaterialIcons name="password" size={25} color={COLORS.tertiary} style={{marginRight:5,marginTop:8}} />
                <View >
                  <TextInput 
                      value={name} 
                      placeholder='password' 
                      placeholderTextColor={COLORS.dark} 
                      
                      style={{margin:10,fontSize:18 , 
                        borderBottomWidth:1,
                        borderBottomColor:COLORS.gray2,
                        width:200}}></TextInput>
                  <TextInput value={surname} placeholder='new password'placeholderTextColor={COLORS.dark} style={{margin:10,fontSize:18 , borderBottomWidth:1,borderBottomColor:COLORS.gray2,width:200}}></TextInput>
                  <TextInput value={email} placeholder='repeat new password'placeholderTextColor={COLORS.dark} style={{margin:10,fontSize:18 , borderBottomWidth:1,borderBottomColor:COLORS.gray2,width:200}}></TextInput>

                </View>
                <View style={{justifyContent:'flex-end',height:120,width:120,alignItems:'flex-end'}}>
                  <Pressable 
                      onPress={saveNewPasswordPressed} 
                      style={{
                        paddingHorizontal:20,
                        alignItems:"center",
                        marginTop:10,
                        width:80,height:50,
                        paddingHorizontal:10,
                        borderRadius:25,
                        paddingVertical:15, 
                        backgroundColor:COLORS.tertiary,}} >
                    <Text style={{fontSize:SIZES.medium,fontWeight:"bold",color:"white"}}>Save</Text>
                  </Pressable>
                </View>
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