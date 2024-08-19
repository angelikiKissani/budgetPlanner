import React from 'react'
import {Text,View} from 'react-native'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './transactions.style'
import { COLORS } from '../../../constants'



const Transactions = ({description,price,category,date,time}) => {

  return (

    <View style={styles.row}>
        <View style={styles.icon_container}>
        <MaterialCommunityIcons name="bank-transfer-out" size={22} color={COLORS.tertiary} style={styles.icon}/>
        </View>
        <View style={styles.description_container}>
          <View>
          <Text style={styles.text1}>{description}</Text>
          <Text style={styles.date_text}>{date} {time}</Text>
          </View>
          <View style={styles.category_container}>
            <Text style={styles.text2}>{category}</Text>
          </View>
        </View>
        <View style={styles.price_container}>
          <Text style={styles.price_text}>{"-"}{price}{"€"}</Text>
        </View>
      </View>


  )};


export default Transactions