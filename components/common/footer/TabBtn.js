import React from 'react'
import {View, Image,StyleSheet} from 'react-native'

const TabBtn = ({iconUrl ,dimension }) => {
  return (
    <View style={styles.container}>
      <Image  
        source={iconUrl} 
        style={styles.image(dimension)}
      />
      </View>
      
  )
}


const styles = StyleSheet.create({
  container:{
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  
  image: (dimension) => ({
    width: dimension,
    height: dimension
  })
});


export default TabBtn