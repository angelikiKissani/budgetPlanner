import { StyleSheet,View, Text, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

import {Welcome,Summary,ExpensesProgress, SavingsProgress} from "../../components"
import FooterList from '../../components/footer/FooterList';


export default function Home({navigation}) {
  return (
    
    <SafeAreaProvider style={styles.container}>
      <Stack.Screen
            
            options={{
                headerShadowVisible:false ,
                headerShown:false,
                
                
            }}/>
            <View style={{flex:1}}>
            
            <Welcome navigation={navigation}/>
            <ScrollView style={{flex:1}} >
              <Summary/>
              <ExpensesProgress/>
              <SavingsProgress navigation={navigation}/>
              
              
            </ScrollView>
            <FooterList pressedHome={true}/>
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