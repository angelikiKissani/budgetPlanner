import React from 'react'
import {Text,View,useWindowDimensions, ImageBackground } from 'react-native'

import styles from './transactions.style'





// const Row=({children})=>{
//   return(
//     <View style={styles.row}>{children}</View>
//   )

// }

const Change_date = ({date}) => {

  return (
   
      <View style={styles.date_container} >
        <Text style={styles.date}>{date}</Text>
      </View>
    

  )};


export default Change_date