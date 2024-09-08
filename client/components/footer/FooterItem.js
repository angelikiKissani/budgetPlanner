import React, { useState } from 'react'
import {View, Image,StyleSheet, TouchableOpacity} from 'react-native'
import IconSelector from "../common/iconselection/IconSelector"



const FooterItem = ({name , handlePress,pressed }) =>{
 return (
      
      <TouchableOpacity style={{width: 110,height: 110,marginVertical:13,alignItems: "center"}} onPress={handlePress}  >
          <IconSelector icon={name} pressed={pressed}/>
          
      </TouchableOpacity>
      )
    
}

export default FooterItem