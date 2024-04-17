import React from 'react'
import { View, Text,Image } from 'react-native'
import { icons } from '../../../constants'
import styles from './expencesprogress.style'


const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)


const ExpencesProgress = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Progress</Text>
    <View style={styles.container2}>
      <Row>
          <View style={styles.col1}>
            <Image source={icons.stats} style={[styles.image1]}></Image>
          </View>
          <View style={styles.col2}>
            <Image source={icons.pie} style={[styles.image2]}></Image>
          </View>
      </Row>
    </View>
  </View>
  )
}

export default ExpencesProgress;