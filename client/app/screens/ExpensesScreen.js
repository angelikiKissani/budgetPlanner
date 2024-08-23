import { StyleSheet,View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import FooterList from '../../components/footer/FooterList';

import { HeaderExpenses } from '../../components';


export default function ExpensesScreen() {
  return (
    <SafeAreaProvider style={styles.container}>
    <Stack.Screen
          options={{
              headerShadowVisible:false ,
              headerShown:false,
          }}/>
          <View style={{flex:1}}>
            <HeaderExpenses/>
            <FooterList/>
            
            
          
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