import React from 'react';
import { View,Text, StyleSheet,TouchableOpacity} from 'react-native';
import {router, Stack} from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS,SIZES} from "../../constants";

import { CategoryBtn } from '../../components';


const Categories = () => {
    const data = require("../../components/common/categories/categories.json")
    var category = [];


    for (let i=0, k=0; i<data.categories.length ; i++ , k++ )
        
        {
          category.splice(1,0,
            <View key={k}>
            <CategoryBtn category_name={data.categories[i]["name"]} />
            </View>
          )}
    
      
    //   }
    
    return (
        <SafeAreaProvider style={{flex:1,headerTitle:"",backgroundColor:"white"}}>
        
        <Stack.Screen
            options={{
                headerShadowVisible:false ,
                headerShown:false
            }}/>
            <View style={styles.container}>
                <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>{router.push("(tabs)/ProfileScreen")}}>
                <AntDesign name="left" size={24} color={COLORS.dark} />
                </TouchableOpacity>
                <View style={{flex:1,backgroundColor:"white",height:30}}>
                    <Text style={[styles.title,{color:COLORS.tertiary,bottom:2}]}>Categories</Text>
                </View>
                </View>
                <View style={{marginTop:10}}>
                <Text style={{fontWeight:"700",fontSize:17,color:COLORS.dark}}>Select Categories:</Text>
                </View>
                <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",marginVertical:15}}>
                {category}
                </View>
            </View>
            
            
                    
        </SafeAreaProvider>
    )
 
}

const styles= StyleSheet.create({
  container:{
    marginTop:60,
    marginHorizontal:20,

  },
  title:{
    color:"white",
    fontSize:SIZES.large,
    fontWeight:'bold',
    alignSelf:"center"
  },
  
})


export default Categories