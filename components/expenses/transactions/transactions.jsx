import React from 'react'
import {Text,View,useWindowDimensions, ImageBackground } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEuroSign } from '@fortawesome/free-solid-svg-icons/faEuroSign'
import styles from './transactions.style'
import { COLORS } from '../../../constants'





const Row=({children})=>{
  return(
    <View style={styles.row}>{children}</View>
  )

}

const Transactions = ({description,price,category,date,time}) => {

  return (

      <Row>
        <View style={styles.icon_container}>
          <FontAwesomeIcon icon={faEuroSign} size={22} color={COLORS.tertiary} style={styles.icon}/>
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
      </Row>


  )};


export default Transactions