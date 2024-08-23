import { StyleSheet,View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

import {Welcome,Summary,ExpencesProgress, SavingsProgress} from "../../components"
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
            <Summary/>
            <ExpencesProgress/>
            <SavingsProgress/>
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