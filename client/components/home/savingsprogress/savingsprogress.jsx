import React,{useContext,useEffect} from 'react'
import { View, Text,Image,ScrollView } from 'react-native'
import { COLORS, icons } from '../../../constants'
import styles from './savingsprogress.style'
import { router } from 'expo-router'
import Btn_progress from "./Btn_progress"
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
import { GoalContext } from '../../../context/goals'





const SavingsProgress = ({navigation}) => {
const [goals,setGoals] =useContext(GoalContext)
  useEffect(()=>{
    fetchGoals();
  },[])

  const fetchGoals = async() =>{

    let storedData =await AsyncStorage.getItem("auth-rn");
    const parsed =JSON.parse(storedData);
    const {data}=await axios.post("http://192.168.1.45:8001/api/show-goal",{user_id:parsed.user._id})
    setGoals(data)

  }



  const pressedBtn=()=>{
    navigation.navigate("Savings")
    
  }

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Savings</Text>
    <View style={styles.container2}>
      <View style={styles.row}>
      <ScrollView style={{flex:1,flexDirection:"row"}} horizontal={true}>
            {goals && goals.map( item=>(
              <View key={item._id}>
                <Btn_progress icon_family={item.icon_family} icon_name={item.icon_name} onPress={pressedBtn} progress={Number(item.progress)*100/ Number(item.goal_money)} />
                </View>
                ))}
              
               </ScrollView>
            <Btn_progress icon_family={"MaterialIcon"} icon_name={"add"} progress={0} onPress={pressedBtn} add_btn={true} />
            
      
        </View>
    </View>
  </View>
  )
}

export default SavingsProgress;