import React from 'react'
import { View, Text,Image,ImageBackground, useWindowDimensions, } from 'react-native'
import {router} from  'expo-router';
import {icons} from "../../../constants"
import styles from './card.style'
// import axios from "axios"


const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
  )

const Card = () => {
  const {height}=useWindowDimensions();


  return (
    <View style={styles.container_}>
    <ImageBackground source={icons.background3_2} style={[styles.image,{ height: height* 0.26}]} imageStyle={{ borderBottomRightRadius: 25}}>
      <View style={styles.container}><Text style={styles.header}> Profile</Text></View>
      <View style={styles.container2}>
        <Row>
            <View>
                <Image source={icons.profile} style={[styles.profilepic,{ height: height* 0.11,width: height* 0.11}]}></Image>
            </View>
            <View style={styles.col2} >
                <Text style={styles.name}>Angeliki  Kissani </Text>
                <Text style={styles.email}>angelakissani@gmail.com</Text>   
                
            </View>
        </Row>
      </View>
      
    </ImageBackground>
    </View>
  )
}





export default Card;