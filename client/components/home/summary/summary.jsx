import React from 'react'
import { View, Text } from 'react-native'

import styles from './summary.style'


const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)


const Summary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Status</Text>
      <View>
        <Row>
            <View style={styles.col1}>
              <Text style={styles.title}>1349.89 €</Text>
              <Text style={styles.subtitle}>Available Balance</Text>
            </View>
            <View style={styles.col2}>
              <Text style={styles.title}>349.98 €</Text>
              <Text style={styles.subtitle}>Savings</Text>
            </View>
        </Row>
      </View>
    </View>
    
  )
}

export default Summary;