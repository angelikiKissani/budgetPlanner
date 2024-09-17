import React,{useContext, useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../../../context/auth'
import styles from './summary.style'



const Summary = () => {
  const [balance1,setBalance]=useState()
  const [savings1,setSavings]=useState()
  const [state,setState]=useContext(AuthContext)

  useEffect(()=>{
    if (state){
      setBalance(state.user.accounting_balance);
      setSavings(state.user.savings);  
    }
  } , [state] )
  return (
    <View>
    <View style={styles.container}>
      
           
              <View>
                <Text style={styles.subtitle}>Total Balance</Text>
                <Text style={styles.title}>€{balance1}</Text>
              </View>
              <View style={styles.split}></View>
              <View>
                <Text style={styles.subtitle}>Savings</Text>
                <Text style={styles.title}>€{savings1}</Text>
              </View>
        
    </View>
    <View style={styles.split2}></View>
    </View>
              
    
  )
}

export default Summary;