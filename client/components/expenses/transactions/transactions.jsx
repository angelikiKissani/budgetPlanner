import React, { useEffect, useState } from 'react'
import {Text,TouchableOpacity,View,Modal,Pressable, ScrollView} from 'react-native'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './transactions.style'
import { COLORS } from '../../../constants'
import IconSelector from "../../common/iconselection/IconSelector"
import { SIZES } from '../../../constants';
import CategoryBtn from '../../common/categories/CategoryBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import SearchBar from '../search_bar/search_bar';




const Transactions = ({description,price,category,date,time,onRefresh}) => {
  // const data = require("../../common/categories/categories.json");
  // var categoryArray = [];
  const [categoryModalVisible,setCategoryModalVisible]=useState(false);
  const [categories,setCategories]=useState([]);
  
  const pressedAddCategory = ()=>{
    setCategoryModalVisible(true)
    fetchCategories();
  }

  

    

  const fetchCategories = async ()=>{
    let storedData =await AsyncStorage.getItem("auth-rn");
    const parsed =JSON.parse(storedData);
    const {data}=await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/fetch-categories",{user_id:parsed.user._id})
    setCategories(data.result)


  } 



  const pressedCategory = async (category_name)=>{
    let storedData =await AsyncStorage.getItem("auth-rn");
    const parsed =JSON.parse(storedData);
    const {result}=await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/add-category",{category:category_name,description:description,user_id:parsed.user._id})
    setCategoryModalVisible(false)
    
    onRefresh()

  }
  

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={categoryModalVisible}
        onRequestClose={() => {
          setModalVisible(!categoryModalVisible);
        }}>
          <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Pressable
                  style={{alignSelf:"flex-end"}}
                  onPress={() => setCategoryModalVisible(!categoryModalVisible)}>
                  <IconSelector icon={"close"} family={"AntDesign"} size={20} color={COLORS.dark}/>
                </Pressable>
              <View style={{alignItems:"center"}}>
              <Text style={[styles.text1,{marginBottom:25}]}> Select Category</Text>
              <View style={{width:350,left:15}}>
             
              </View>
                <ScrollView>
                  <View style={{width:350,flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
                  {categories && categories
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map(item=>(

                  <CategoryBtn key={item._id} category_name={item.name} onPress={()=>pressedCategory(item.name)} />
                ))}
                  </View>
                </ScrollView>
              
            

                
                </View>
              </View>
            </View>
          
      </Modal>



    <View style={styles.row}>
        <View style={styles.icon_container}>
        <MaterialCommunityIcons name="bank-transfer-out" size={22} color={COLORS.tertiary} style={styles.icon}/>
        </View>
        <View style={styles.description_container}>
          <View style={{maxWidth:130}}>
            <Text style={styles.text1}>{description}</Text>
            <Text style={styles.date_text}>{date} {time}</Text>
          </View> 
          {price>0 ?<></>:
          (category==undefined|| price>0 ?
            <>
            <TouchableOpacity style={{padding:15}} onPress={pressedAddCategory}>
              <IconSelector icon={"add-category"}></IconSelector>
            </TouchableOpacity>
            </>
          :
          <TouchableOpacity style={styles.category_container} onPress={pressedAddCategory}>
            <Text style={styles.text2}>{category}</Text>
          </TouchableOpacity> 
          )
          }
          
        </View>
        <View style={styles.price_container}>
          <Text style={styles.price_text}>{price}{"€"}</Text>
        </View>
      </View>

</View>
  )};


export default Transactions