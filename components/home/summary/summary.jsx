import React,{useContext, useEffect, useState} from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { AuthContext } from '../../../context/auth'
import styles from './summary.style'



const Summary = () => {
  const [balance1,setBalance]=useState()
  const [savings1,setSavings]=useState()
  const [visible,setVisible]=useState(false);
  const [state,setState]=useContext(AuthContext)

  useEffect(()=>{
    if (state){
      setBalance(state.user.accounting_balance);
      setSavings(state.user.savings);  
    }
  } , [state] )
  const availableBalance = parseFloat(balance1 - savings1).toFixed(2);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <View>
    <TouchableOpacity style={styles.container} onPress={toggleVisibility}>
      
           
              <View>
                <Text style={styles.subtitle}>Available Balance:</Text>
                <Text style={styles.title}>€{availableBalance}</Text>
              </View>
              <View style={styles.split}></View>
              <View>
                <Text style={styles.subtitle}>Savings:</Text>
                <Text style={styles.title}>€{savings1}</Text>
              </View>
              
      
        
    </TouchableOpacity>
    {visible && (
      <View>
        <View style={styles.split2}></View>
                <View style={styles.detailsContainer}>
                  
                  <View>
                    <Text style={styles.subtitle}>{""}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.subtitle}>Total Balance from all accounts:</Text>
                    <Text style={styles.title}>€{balance1}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.subtitle}>Savings:</Text>
                    <Text style={styles.title}>€{savings1}</Text>
                  </View>
                  <View style={styles.detailRow}>
                    <Text style={styles.subtitle}>Available Balance:</Text>
                    <Text style={styles.title}>€{availableBalance}</Text>
                  </View>
                </View>
                </View>
              )}
    <View style={styles.split2}></View>
    </View>
              
    
  )
}

export default Summary;