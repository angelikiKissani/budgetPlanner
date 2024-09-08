import React,{useContext,useEffect,useState} from 'react'
import { View, Text,ScrollView,TouchableOpacity } from 'react-native'

import styles from './savingsprogress.style'
import Btn_progress from "./Btn_progress"
import axios from 'axios';
import { GoalContext } from '../../../context/goals';
import { AuthContext } from '../../../context/auth'
import { COLORS } from '../../../constants'
import IconSelector from '../../common/iconselection/IconSelector'





const SavingsProgress = ({navigation}) => {
const [goals,setGoals] =useContext(GoalContext);
const [state,setState] = useContext(AuthContext);
const [user,setUser] =useState();
  useEffect(() => {
    if (user) {
        fetchGoals();
    }
  }, [user]);  
  useEffect(()=>{
    if (state){
      setUser(state.user);
      
      
    }
  } , [state] )


  const fetchGoals = async() =>{
     const {data}=await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/show-goal",{user_id:user._id})
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
                    <Btn_progress icon_family={item.icon_family} icon_name={item.icon_name} progress={Number(item.progress)*100/ Number(item.goal_money)} />
                  </View>
                ))}
              
               </ScrollView>
               <View style={{borderWidth:1,borderColor:COLORS.dark,height:60,alignSelf:"center",bottom:8,}}></View>
              <TouchableOpacity style={styles.add_btn_container} onPress={pressedBtn}>
                <IconSelector family={"MaterialIcon"} color={COLORS.dark} icon={"add"} size={31} />
              </TouchableOpacity>
            
           </View>
          </View></View>
  
  
  )
}

export default SavingsProgress;