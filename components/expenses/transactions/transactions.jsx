import React, { useEffect, useState } from 'react'
import {Text,TouchableOpacity,View,Modal,Pressable, ScrollView} from 'react-native'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './transactions.style'
import { COLORS } from '../../../constants'
import IconSelector from "../../common/iconselection/IconSelector"
import CategoryBtn from '../../common/categories/CategoryBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'




const Transactions = ({description,price,category,goal,date,time,onRefresh,id}) => {

  const [categoryModalVisible,setCategoryModalVisible]=useState(false);
  const [categories,setCategories]=useState([]);
  const [goals,setGoals]=useState([]);
  const [isGoal,setIsGoal]=useState(false);
  

  useEffect(()=>{
    if (goal==undefined|| (goal.goal_name=="" &&goal.goal_id=="")){
      setIsGoal(false);
    }
    else setIsGoal(true)
  })
  
  const pressedAddCategory = ()=>{
    setCategoryModalVisible(true)
    fetchCategories();
    fetchGoals();
  }

  

  const fetchCategories = async ()=>{
    let storedData =await AsyncStorage.getItem("auth-rn");
    const parsed =JSON.parse(storedData);
    const {data}=await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/fetch-categories",{user_id:parsed.user._id})
    setCategories(data.result)


  } 
  const fetchGoals = async() =>{
    let storedData =await AsyncStorage.getItem("auth-rn");
    const parsed =JSON.parse(storedData);
    const {data}=await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/show-goal",{user_id:parsed.user._id})
    var data_goals=data.map(item=>[item._id,item.name])
    console.log(data_goals)
    setGoals(data_goals)
    
  }



 
  const pressedRemove = async ()=>{
    let storedData =await AsyncStorage.getItem("auth-rn");
    const parsed =JSON.parse(storedData);
    const result=await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/remove-goal",{transaction_id:id  ,price:-price,user_id:parsed.user._id})
    console.log(result.data)
    
    setCategoryModalVisible(false)
    onRefresh()

  }


  const pressedGoal = async (goal_name)=>{
    let storedData =await AsyncStorage.getItem("auth-rn");
    const parsed =JSON.parse(storedData);
    const result=await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/add-goal-category",{goal_name:goal_name,user_id:parsed.user._id,price:-price,transaction_id:id})
    console.log(result.data)
    
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
                    style={{alignSelf:"flex-end",left:15,width:50,height:50,alignContent:"flex-end",justifyContent:"flex-end"}}
                    onPress={() => setCategoryModalVisible(!categoryModalVisible)}>
                    <IconSelector icon={"close"} family={"AntDesign"} size={20} color={COLORS.dark}/>
                  </Pressable>
                <Text style={[styles.text1,{marginBottom:20,left:10,alignSelf:"flex-start"}]}> Spend money from your goal:</Text>
                
                <ScrollView>
                  <View style={{width:350,flexDirection:"row",flexWrap:"wrap",justifyContent:"center",marginBottom:25}}>
                    {goals && goals
                      .map(item=>(

                      <CategoryBtn key={item[0]} category_name={item[1]} goal={true} onPress={()=>pressedGoal(item[1])} />
                    ))}
                        
                  </View>
                  {/* <View style={{width:350,flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
                  {categories && categories
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(item=>(

                    <CategoryBtn key={item._id} goal={false} category_name={item.name} onPress={()=>pressedCategory(item.name,price)} />
                  ))}
                  </View> */}                
                </ScrollView>
                <Pressable style={styles.buttonClose} onPress={pressedRemove}>
                  <Text style={[styles.text1,{textDecorationLine:"underline"}]}>Remove goal</Text>
                  
                </Pressable>
              
            

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
          {isGoal?
            <>
            <TouchableOpacity style={styles.goal_container} onPress={pressedAddCategory}>
              <Text style={styles.text2}>{goal.goal_name}</Text>
            </TouchableOpacity>
            </>
            :
            <>
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
            </>
          }
          
          
        </View>
        <View style={styles.price_container}>
          <Text style={styles.price_text}>{price}{"€"}</Text>
        </View>
      </View>

</View>
  )};


export default Transactions