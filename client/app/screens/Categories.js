import React,{useEffect, useState,useCallback, useContext} from 'react';
import { View,Text, StyleSheet,TouchableOpacity,TextInput,ScrollView,RefreshControl} from 'react-native';
import {router, Stack} from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS,SIZES} from "../../constants";
import {CategoriesContext} from "../../context/categories"
import { CategoryBtn } from '../../components';
import IconSelector from '../../components/common/iconselection/IconSelector';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Categories = ({navigation}) => {

    // const data = require("../../components/common/categories/categories.json")
    // var category = [];
    const [categoryName,setCategoryName]=useState("");
    const [categories,setCategories]=useState([]);;
    useEffect(()=>{
      fetchCategories();
    },[refresh])
      //refresh page
    const [refresh, setRefresh] = useState(false);
    const onRefresh = useCallback( () => {
      setCategoryName("");
      setRefresh(true);
      setTimeout(()=>{
        setRefresh(false)
      },2000)

    }, [] );
      

    const fetchCategories = async ()=>{
      let storedData =await AsyncStorage.getItem("auth-rn");
      const parsed =JSON.parse(storedData);
      const {data}=await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/fetch-categories",{user_id:parsed.user._id})
      setCategories(data.result)
  
  
    } 


    const pressedAddNewCategory = async()=>{
      let storedData =await AsyncStorage.getItem("auth-rn");
      const parsed =JSON.parse(storedData);
      const result = await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/add-new-category",{name:categoryName,user_id:parsed.user._id});
      setCategoryName("");
      fetchCategories();
      onRefresh();
    }
      
    
    
    return (
        <SafeAreaProvider style={{flex:1,headerTitle:"",backgroundColor:"white"}}>
        
        <Stack.Screen
            options={{
                headerShadowVisible:false ,
                headerShown:false
            }}/>
            <View style={styles.container}>
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
                <AntDesign name="left" size={24} color={COLORS.dark} />
                </TouchableOpacity>
                <View style={{flex:1,backgroundColor:"white",height:30}}>
                    <Text style={[styles.title,{color:COLORS.tertiary,bottom:2}]}>Add category</Text>
                </View>
                </View>
                <View style={{marginTop:10}}>
                {/* <Text style={{fontWeight:"700",fontSize:17,color:COLORS.dark}}></Text> */}
                <View style={{flexDirection:"row"}}>
                  <Text style={{fontSize:SIZES.medium,color:COLORS.dark,top:5}}>New Category: </Text>
                <TextInput style={{flex:1,fontSize:SIZES.medium,color:COLORS.dark}} value={categoryName} onChangeText={(text)=>setCategoryName(text)}  >

                </TextInput>
                <TouchableOpacity onPress={pressedAddNewCategory}>
                <IconSelector icon="done" family="MaterialIcons" size="30" color={COLORS.dark}></IconSelector>
                </TouchableOpacity>
                </View>
                <View style={{borderWidth:0.8,borderColor:COLORS.dark}}></View>
                </View>
                <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh}/>} >
                <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",marginVertical:15,marginBottom:150}}>
                {categories && categories.map(item=>(
                  <CategoryBtn key={item._id} category_name={item.name} />
                ))}
                </View>
                </ScrollView>
            </View>
            
            
                    
        </SafeAreaProvider>
    )
 
}

const styles= StyleSheet.create({
  container:{
    marginTop:60,
    marginHorizontal:20,

  },
  title:{
    color:"white",
    fontSize:SIZES.large,
    fontWeight:'bold',
    alignSelf:"center"
  },
  
})


export default Categories