import { StyleSheet,View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

import {Welcome,Summary,ExpencesProgress, SavingsProgress} from "../../components"


export default function Tab() {
  return (
    
    <SafeAreaProvider style={styles.container}>
      <Stack.Screen
            
            options={{
                headerShadowVisible:false ,
                headerShown:false,
                
                
            }}/>
            <View style={{flex:1}}>
            
            <Welcome/>
            <Summary/>
            <ExpencesProgress/>
            <SavingsProgress/>
        </View>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container:{
      flex:1,
      headerTitle:"",
      backgroundColor:"white",
      
  },

})  