import React from 'react'
import {Text,View,useWindowDimensions, ImageBackground,StyleSheet,ScrollView } from 'react-native'
import { icons,COLORS,SIZES } from '../../../constants';

import Transactions from "../transactions/transactions"
import Change_date from '../transactions/change_date';
import SearchBar from '../search_bar/search_bar';


const HeaderExpenses = () => {
  const {height}=useWindowDimensions();
  var transaction = [];


  const customData = require("../data.json");
    
  for (let i=0, k=0; i<customData.transactions.length ; i++ , k++ ){
    if(i==0 || customData.transactions[i]["date"]!=customData.transactions[i-1]["date"]){
      transaction.splice(0,0,
        <View key={k}>
        <Change_date date={customData.transactions[i]["date"]}/>
        </View>
      )
      transaction.splice(1,0,
        <View key={k+1}>
        <Transactions description={customData.transactions[i]["name"]} time={customData.transactions[i]["time"]} date={customData.transactions[i]["date"]} category={customData.transactions[i]["category"]} price={customData.transactions[i]["price"]} />
        </View>
      )
      k+=1
      
    }
    else{
      transaction.splice(1,0,
        <View key={k}>
        <Transactions description={customData.transactions[i]["name"]} time={customData.transactions[i]["time"]}  date={customData.transactions[i]["date"]} category={customData.transactions[i]["category"]} price={customData.transactions[i]["price"]} />
        </View>
      )}

  
  }

  
  
  return (
    // <ImageBackground source={icons.background_4_2} style={[{ height: height* 0.25}]} >
      // <Text style={styles.header}>Expences</Text>
      <View style={styles.container}>
        {/* <Text style={styles.title}>My Categories {"\n"}</Text> */}
        <SearchBar/>
        <Text style={styles.title}>Transactions </Text>
        <View style={styles.extra}></View>
        <ScrollView style={styles.scroll_view}>
        {transaction}
        </ScrollView>
      </View>



    // </ImageBackground>
  )
  };


const styles = StyleSheet.create({
  scroll_view:{
    paddingHorizontal:15,
    left:-10,
    marginHorizontal:-10,
    marginBottom:190,

    

  },

  container:{
    
    backgroundColor:"white",
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingTop:40,
    paddingLeft:20,
      


  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.dark,
    fontWeight:"bold",
    marginBottom:5,    
  }
  ,
  extra:{
    // borderWidth:1,
    width:380,
    backgroundColor:"white",
    shadowColor: COLORS.dark,
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.80,
    shadowRadius: 2.00,
    
    elevation: 3,
    

  }

})

export default HeaderExpenses
