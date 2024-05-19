import React,{useState, useRef} from 'react';
import { View,Text, StyleSheet,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import {router, Stack} from 'expo-router';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import axios from "axios"
import {Picker} from '@react-native-picker/picker';

import { COLORS,SIZES} from "../../constants";

import {KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

// import { Animated } from 'react-native';




const Budget_plan_select=({frequency,stability})=>{
//INCOME FREQUENCY: MONTHLY
  if(frequency=="m"){
    if(stability=="s"){
      return(
        <View style={{flexDirection:"row"}}>
        {/* <KeyboardAwareScrollView> */}
        
        <View style={{borderRadius:25,backgroundColor:"#f4f4f5",marginTop:20}}>
          <View style={{marginTop:30,marginHorizontal:25,bottom:5}}>
            <Text style={{fontWeight:"800",fontSize:SIZES.xxxLarge,color:COLORS.dark}}>Pay yourself first:</Text>
            <Text style={{fontWeight:"500",fontSize:SIZES.medium,color:COLORS.tertiary,fontStyle:"italic",marginTop:15}}>The "pay yourself first" strategy advises you to save a certain 
              amount of your monthly salary for your goals before you do 
              anything else. </Text>
              </View>
          <View style={{margin:25,flexDirection:"row",flexWrap:"wrap"}}>
            
          <Text style={{fontWeight:"800",fontSize:SIZES.large,color:COLORS.dark}}>How does it work:</Text>
          <Text  style={{fontWeight:"700",fontSize:SIZES.medium,color:COLORS.tertiary,marginTop:15}}> {"\u2023"} A part of your money will be put{"\n"}    into savings each time you get{"\n"}    your paycheck.</Text>
          
          <Text  style={{fontWeight:"800",fontSize:SIZES.large,color:COLORS.dark}}>{"\n"}From my monthly salary, I would like to set aside:</Text>
          <TextInput inputMode='numeric' style={{height:50,width:"100%",borderRadius:5,borderWidth:3,borderColor:COLORS.secondary,marginVertical:10,padding:10}}></TextInput>
          {/*           
          <Text style={{fontWeight:"700",fontSize:20,color:COLORS.dark,fontStyle:"italic",marginTop:10}} > Save</Text>
          <TextInput inputMode='numeric' style={{height:50,width:100,borderRadius:5,borderWidth:3,borderColor:COLORS.secondary,marginHorizontal:10,padding:10}}></TextInput>
          <Text style={{fontWeight:"700",fontSize:20,color:COLORS.dark,fontStyle:"italic",marginTop:10}} >€   from my </Text>
          <Text style={{fontWeight:"700",fontSize:20,color:COLORS.dark,fontStyle:"italic",marginTop:10}} >weekly income.</Text> */}
          </View>
        </View>
        <View style={{borderRadius:25,backgroundColor:"#f4f4f5",marginTop:20}}>
          <View style={{marginTop:30,marginHorizontal:25,bottom:5}}>
            <Text style={{fontWeight:"800",fontSize:SIZES.xxxLarge,color:COLORS.dark}}>Pay yourself first:</Text>
            <Text style={{fontWeight:"500",fontSize:SIZES.medium,color:COLORS.tertiary,fontStyle:"italic",marginTop:15}}>The "pay yourself first" strategy advises you to save a certain 
              amount of your monthly salary for your goals before you do 
              anything else. </Text>
              </View>
          <View style={{margin:25,flexDirection:"row",flexWrap:"wrap"}}>
            
          <Text style={{fontWeight:"800",fontSize:SIZES.large,color:COLORS.dark}}>How does it work:</Text>
          <Text  style={{fontWeight:"700",fontSize:SIZES.medium,color:COLORS.tertiary,marginTop:15}}> {"\u2023"} A part of your money will be put{"\n"}    into savings each time you get{"\n"}    your paycheck.</Text>
          
          <Text  style={{fontWeight:"800",fontSize:SIZES.large,color:COLORS.dark}}>{"\n"}From my monthly salary, I would like to set aside:</Text>
          <TextInput inputMode='numeric' style={{height:50,width:"100%",borderRadius:5,borderWidth:3,borderColor:COLORS.secondary,marginVertical:10,padding:10}}></TextInput>
          {/*           
          <Text style={{fontWeight:"700",fontSize:20,color:COLORS.dark,fontStyle:"italic",marginTop:10}} > Save</Text>
          <TextInput inputMode='numeric' style={{height:50,width:100,borderRadius:5,borderWidth:3,borderColor:COLORS.secondary,marginHorizontal:10,padding:10}}></TextInput>
          <Text style={{fontWeight:"700",fontSize:20,color:COLORS.dark,fontStyle:"italic",marginTop:10}} >€   from my </Text>
          <Text style={{fontWeight:"700",fontSize:20,color:COLORS.dark,fontStyle:"italic",marginTop:10}} >weekly income.</Text> */}
          </View>
        </View>


        {/* </KeyboardAwareScrollView> */}
        </View>
      )

    }
    else{
      return(
        <KeyboardAwareScrollView >
        <View>
        <View style={{borderRadius:25,backgroundColor:"#f4f4f5",marginTop:20}}>
          <View style={{marginTop:30,marginHorizontal:25,bottom:5}}>
            <Text style={{fontWeight:"800",fontSize:SIZES.xxxLarge,color:COLORS.dark}}>Pay yourself first:</Text>
            <Text style={{fontWeight:"500",fontSize:SIZES.medium,color:COLORS.tertiary,fontStyle:"italic",marginTop:15}}>The "pay yourself first" strategy advises you to save a certain 
              amount of your monthly salary for your goals before you do 
              anything else. </Text>
          </View>
          <View style={{margin:25,flexDirection:"row",flexWrap:"wrap"}}>
          <Text style={{fontWeight:"800",fontSize:SIZES.large,color:COLORS.dark}}>How does it work:</Text>
          <Text  style={{fontWeight:"700",fontSize:SIZES.medium,color:COLORS.tertiary,marginTop:15}}> {"\u2023"} You can decide whether or not you {"\n"}    wish to save money each month.</Text>
          <Text  style={{fontWeight:"700",fontSize:SIZES.medium,color:COLORS.tertiary,marginTop:15}}> {"\u2023"} The amount you would like to save {"\n"}    will be requested of you when you {"\n"}    get your paycheck.</Text>
          </View>
        </View>
        </View>
        </KeyboardAwareScrollView>
      )
    }
  }
//INCOME FREQUENCY: WEEKLY
  else if( frequency=="w"){
    //STABLE INCOME
    if(stability=="s"){
      return(
        
        <KeyboardAwareScrollView >
        <View>
        <View style={{borderRadius:25,backgroundColor:"#f4f4f5",marginTop:20}}>
          <View style={{marginTop:30,marginHorizontal:25,bottom:5}}>
            <Text style={{fontWeight:"800",fontSize:SIZES.xxxLarge,color:COLORS.dark}}>Pay yourself first:</Text>
            <Text style={{fontWeight:"500",fontSize:SIZES.medium,color:COLORS.tertiary,fontStyle:"italic",marginTop:15}}>The "pay yourself first" strategy advises you to save a certain 
              amount of your weekly salary for your goals before you do 
              anything else. </Text>
              </View>
          <View style={{margin:25,flexDirection:"row",flexWrap:"wrap"}}>
            
          <Text style={{fontWeight:"800",fontSize:SIZES.large,color:COLORS.dark}}>How does it work:</Text>
          <Text  style={{fontWeight:"700",fontSize:SIZES.medium,color:COLORS.tertiary,marginTop:15}}> {"\u2023"} A part of your money will be put{"\n"}    into savings each time you get{"\n"}    your paycheck.</Text>
          
          <Text  style={{fontWeight:"800",fontSize:SIZES.large,color:COLORS.dark}}>{"\n"}From my weekly salary, I would like to set aside:</Text>
          <TextInput inputMode='numeric' style={{height:50,width:"100%",borderRadius:5,borderWidth:3,borderColor:COLORS.secondary,marginVertical:10,padding:10}}></TextInput>
          
          </View>
        </View>
        </View>
        </KeyboardAwareScrollView>
      )
      
      
    }
    else{
      return(
        <KeyboardAwareScrollView >
        <View>
        <View style={{borderRadius:25,backgroundColor:"#f4f4f5",marginTop:20}}>
          <View style={{marginTop:30,marginHorizontal:25,bottom:5}}>
            <Text style={{fontWeight:"800",fontSize:SIZES.xxxLarge,color:COLORS.dark}}>Pay yourself first:</Text>
            <Text style={{fontWeight:"500",fontSize:SIZES.medium,color:COLORS.tertiary,fontStyle:"italic",marginTop:15}}>The "pay yourself first" strategy advises you to save a certain 
              amount of your weekly salary for your goals before you do 
              anything else. </Text>
          </View>
          <View style={{margin:25,flexDirection:"row",flexWrap:"wrap"}}>
          <Text style={{fontWeight:"800",fontSize:SIZES.large,color:COLORS.dark}}>How does it work:</Text>
          <Text  style={{fontWeight:"700",fontSize:SIZES.medium,color:COLORS.tertiary,marginTop:15}}> {"\u2023"} You can decide whether or not you {"\n"}    wish to save money each week.</Text>
          <Text  style={{fontWeight:"700",fontSize:SIZES.medium,color:COLORS.tertiary,marginTop:15}}> {"\u2023"} The amount you would like to save {"\n"}    will be requested of you when you {"\n"}    get your paycheck.</Text>
          </View>
        </View>
        </View>
        </KeyboardAwareScrollView>
      )
      

    }
  }
//INCOME FREQUENCY: BI-WEEKLY
  else if (frequency=="bw"){
    if(stability=="s"){
      return(
        
        <KeyboardAwareScrollView >
        <View>
        <View style={{borderRadius:25,backgroundColor:"#f4f4f5",marginTop:20}}>
          <View style={{marginTop:30,marginHorizontal:25,bottom:5}}>
            <Text style={{fontWeight:"800",fontSize:SIZES.xxxLarge,color:COLORS.dark}}>Pay yourself first:</Text>
            <Text style={{fontWeight:"500",fontSize:SIZES.medium,color:COLORS.tertiary,fontStyle:"italic",marginTop:15}}>The "pay yourself first" strategy advises you to save a certain 
              amount of your bi-weekly salary for your goals before you do 
              anything else. </Text>
              </View>
          <View style={{margin:25,flexDirection:"row",flexWrap:"wrap"}}>
            
          <Text style={{fontWeight:"800",fontSize:SIZES.large,color:COLORS.dark}}>How does it work:</Text>
          <Text  style={{fontWeight:"700",fontSize:SIZES.medium,color:COLORS.tertiary,marginTop:15}}> {"\u2023"} A part of your money will be put{"\n"}    into savings each time you get{"\n"}    your paycheck.</Text>
          
          <Text  style={{fontWeight:"800",fontSize:SIZES.large,color:COLORS.dark}}>{"\n"}From my bi-weekly salary, I would like to set aside:</Text>
          <TextInput inputMode='numeric' style={{height:50,width:"100%",borderRadius:5,borderWidth:3,borderColor:COLORS.secondary,marginVertical:10,padding:10}}></TextInput>
          
          </View>
        </View>
        </View>
        </KeyboardAwareScrollView>
      )
      
    }
    else{
      return(
        <KeyboardAwareScrollView >
        <View>
        <View style={{borderRadius:25,backgroundColor:"#f4f4f5",marginTop:20}}>
          <View style={{marginTop:30,marginHorizontal:25,bottom:5}}>
            <Text style={{fontWeight:"800",fontSize:SIZES.xxxLarge,color:COLORS.dark}}>Pay yourself first:</Text>
            <Text style={{fontWeight:"500",fontSize:SIZES.medium,color:COLORS.tertiary,fontStyle:"italic",marginTop:15}}>The "pay yourself first" strategy advises you to save a certain 
              amount of your bi-weekly salary for your goals before you do 
              anything else. </Text>
          </View>
          <View style={{margin:25,flexDirection:"row",flexWrap:"wrap"}}>
          <Text style={{fontWeight:"800",fontSize:SIZES.large,color:COLORS.dark}}>How does it work:</Text>
          <Text  style={{fontWeight:"700",fontSize:SIZES.medium,color:COLORS.tertiary,marginTop:15}}> {"\u2023"} You can decide whether or not you {"\n"}    wish to save money every two{"\n"}    weeks.</Text>
          <Text  style={{fontWeight:"700",fontSize:SIZES.medium,color:COLORS.tertiary,marginTop:15}}> {"\u2023"} The amount you would like to save {"\n"}    will be requested of you when you {"\n"}    get your paycheck.</Text>
          </View>
        </View>
        </View>
        </KeyboardAwareScrollView>
      )
      
    }
  }
//INCOME FREQUENCY: DAILY
  else{
    if(stability=="s"){
      return(
        <KeyboardAwareScrollView>
        <View>
        <View style={{borderRadius:25,backgroundColor:"#f4f4f5",marginTop:20}}>
          <View style={{margin:30,bottom:5}}>
            <Text style={{fontWeight:"800",fontSize:SIZES.xxxLarge,color:COLORS.dark}}>Pay yourself first:</Text>
            <Text style={{fontWeight:"500",fontSize:SIZES.medium,color:COLORS.tertiary,fontStyle:"italic",marginTop:15}}>The "pay yourself first" strategy advises you to save a certain 
              amount of your daily salary for your goals before you do 
              anything else.     {"\n"} </Text>
          </View>
        </View>
        <View style={{borderRadius:25,backgroundColor:"#f4f4f5",marginTop:20}}>
          <View style={{margin:25,flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
          
          <Text style={{fontWeight:"700",fontSize:20,color:COLORS.dark,fontStyle:"italic",marginTop:10}} > Save</Text>
          <TextInput inputMode='numeric' style={{height:50,width:100,borderRadius:5,borderWidth:3,borderColor:COLORS.secondary,marginHorizontal:10,padding:10}}></TextInput>
          <Text style={{fontWeight:"700",fontSize:20,color:COLORS.dark,fontStyle:"italic",marginTop:10}} >€   from my </Text>
          <Text style={{fontWeight:"700",fontSize:20,color:COLORS.dark,fontStyle:"italic",marginTop:10}} >daily income.</Text>
          </View>
        </View>
        </View>
        </KeyboardAwareScrollView>
      )
      
    }
    else{
      return(
        <Text>dns</Text>
      )

    }

  }
}



const MyBudgetPlan = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  
  // const pickerRef = useRef();


  const [frequency , setFrequency]  = useState("m"); 
  const [stability , setStability]  = useState("s"); 
  
  const [Enable1 , setEnable1]  = useState("cinsashd"); 
  const [Enable2 , setEnable2]  = useState("cinsashd"); 


  

  return (
    <SafeAreaProvider style={{flex:1,headerTitle:"",backgroundColor:"white"}}>
      
      <Stack.Screen
        options={{
            headerShadowVisible:false ,
            headerShown:false
        }}/>
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>{router.push("(tabs)/ProfileScreen")}}>
              <FontAwesomeIcon icon={faChevronLeft} size={18} />
            </TouchableOpacity>
            <View style={{flex:1,backgroundColor:"white",height:30}}>
              <Text style={[styles.title,{color:COLORS.tertiary,bottom:2}]}>My Budget Plan</Text>
            </View>
          </View>
          <View style={{borderWidth:1,borderColor:COLORS.primary, marginBottom:15,width:500,right: 30}}></View>
          
          
            <View style={[styles.container_2]}>
              <View style={{width: 180 ,flex:0.8}}>
                <Text style={styles.title_2}>Income Frequency:</Text>
              </View>
              <Picker
                selectedValue={Enable1} 
                style={{ width: 180,flex:0.8 }} 
                mode={"dialog"} 
                itemStyle={{height:130}}
                onValueChange={(itemValue) => {setEnable1(itemValue); setFrequency(itemValue) }}
              >

                <Picker.Item label="Monthly" value="m"/>
                <Picker.Item label="Weekly" value="w" />
                <Picker.Item label="Bi-Weekly" value="bw" />
                <Picker.Item label="Daily" value="d" />
              </Picker>
            </View>
            
            <View style={[styles.container_2,{marginTop:40,marginBottom:20}]}>
              <View style={{flex:0.7}}>
                <Text style={styles.title_2}>Stable Income:</Text>
              </View>
              <Picker
                  selectedValue={Enable2} 
                  style={{ width: 180 ,flex:0.7}} 
                  mode={"dialog"} 
                  itemStyle={{height:130}}
                  onValueChange={(itemValue) => {setEnable2(itemValue);setStability(itemValue) }}
                >

                  <Picker.Item label="Yes" value="s" />
                  <Picker.Item label="No" value="ns" />
              </Picker>
            </View>
            
            <View style={{backgroundColor:COLORS.secondary,padding:20, borderRadius:25}}>
                <Text style={[styles.title]}>Suggested Budget Plan</Text>
                  <ScrollView >
                    <Budget_plan_select frequency={frequency} stability={stability}/>
                  </ScrollView>
                  
                
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
  container_2:{
    marginHorizontal:15,
    backgroundColor:"white",
    flexDirection:"row",
    height:80,
    alignItems:"center",
    // justifyContent:"space-evenly"

  },
  row:{
    flexDirection:"row",
    
  },
  container_3:{
    borderWidth:2,
    borderColor:COLORS.secondary,
    borderRadius:25
  },
  title:{
    color:"white",
    fontSize:SIZES.large,
    fontWeight:'bold',
    alignSelf:"center"
  },
  title_2: {
    fontSize: 18,
    color: COLORS.tertiary,
    fontWeight:"bold"
  }
})


export default MyBudgetPlan