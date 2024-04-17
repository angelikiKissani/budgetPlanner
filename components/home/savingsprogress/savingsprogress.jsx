import React from 'react'
import { View, Text,Image } from 'react-native'
import { COLORS, icons } from '../../../constants'
import styles from './savingsprogress.style'
import { router } from 'expo-router'
import Btn_progress from "./Btn_progress"


const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

const pressedBtn=()=>{
  router.push("(tabs)/SavingsScreen")
  
}

const SavingsProgress = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Savings</Text>
    <View style={styles.container2}>
      <Row>
        <Btn_progress icon_name={"faCarSide"} progress={80} onPress={pressedBtn}/>
        <Btn_progress icon_name={"faPlaneDeparture"} progress={30} onPress={pressedBtn}/>
        <Btn_progress icon_name={"faGraduationCap"} progress={50} onPress={pressedBtn}/>
        <Btn_progress icon_name={"faCakeCandles"} progress={10} onPress={pressedBtn}/>
        <Btn_progress icon_name={"add_btn"} progress={0} onPress={pressedBtn}/>
        
      
        

      
      </Row> 
    </View>
  </View>
  )
}

export default SavingsProgress;