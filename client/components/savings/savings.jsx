import React from 'react'
import { View, Text,useWindowDimensions, ImageBackground } from 'react-native'
import { COLORS,icons } from '../../constants'

import { ScrollView } from 'react-native'
import styles from './savings.style'

import Btn_progress from '../home/savingsprogress/Btn_progress'


const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)

const Row_2 = ({ children }) => (
  <View style={styles.row_2}>{children}</View>
)


const Savings = () => {
const {height}=useWindowDimensions();

  return (

    <ImageBackground source={icons.background3_3} style={[{ height: height* 0.25}]} >
      <Text style={styles.header}>Savings</Text>
      <View style={styles.container_2}>
        <View style={styles.container_3}>
          <Row>
            <Btn_progress icon_name={"faCarSide"} progress={80} />
            <Btn_progress icon_name={"faPlaneDeparture"} progress={30} />
            <Btn_progress icon_name={"faGraduationCap"} progress={50} />
            <Btn_progress icon_name={"faCakeCandles"} progress={10} />
            <Btn_progress icon_name={"add_btn"} progress={0} />
  
          </Row> 
        </View>
        <ScrollView >
         <View style={styles.container_4}>
          <Text style={styles.title}>My Goals</Text>
          <Row_2 style={[styles.row_2,{backgroundColor:COLORS.dark}]}>
            <Btn_progress icon_name={"faCarSide"} progress={80}/>
            <View style={[styles.col2]}>
              <Text></Text>

            </View>
          </Row_2> 
          <Row_2>
            <Btn_progress icon_name={"faPlaneDeparture"} progress={30}/>
            <View style={styles.col2}>
              <Text></Text>

            </View>
          </Row_2> 
          <Row_2>
            <Btn_progress icon_name={"faGraduationCap"} progress={50}/>
            <View style={styles.col2}>
              <Text></Text>

            </View>
          </Row_2> 
          <Row_2>
            <Btn_progress icon_name={"faCakeCandles"} progress={10}/>
            <View style={styles.col2}>
              <Text></Text>

            </View>
          </Row_2> 
          </View>
        </ScrollView>
      </View>
        
          
    </ImageBackground>
   
  )
  
}

export default Savings;