import React,{useState} from 'react';
import { View,Text, StyleSheet,TouchableOpacity,TextInput,Button,Switch, Pressable} from 'react-native';
import {router, Stack} from 'expo-router';
import { Keyboard } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaProvider } from "react-native-safe-area-context";



import { COLORS,SIZES} from "../../constants"


const AutoSelected = ({isAuto}) =>{

  const [date,setDate] =useState(new Date());
  const [days,setDays]= useState();
  // const [show,setShow]=useState(false);
  const [mode,setMode]=useState('date');

  const onChangeDays = (selectedDays)=>{
    setDays(selectedDays);
  };
  const onChangeDate = (e,selectedDate)=>{
    setDate(selectedDate);
    // setShow(false);
  };


  if (isAuto===true){
    console.log(isAuto)
    Keyboard.dismiss()
    return(
      <View>

        {/* choose a certain sum of money for saving */}
        <View style={{flexDirection:"row" ,marginBottom:30 }}>
          <View style={{flex:1,marginRight:10}} >
          <Text style={{fontWeight:"800",fontSize:18,color:COLORS.dark}}>Amount of Money: </Text>
          <Text style={{fontWeight:"500",fontSize:15,color:COLORS.tertiary,fontStyle:"italic"}}>The desired amount you want{"\n"}to save. </Text>
          </View>
          <TextInput editable 
            keyboardType='numeric'
            maxLength={2} 
            value={days}
            selectionColor={"#ffffff"} 
            placeholderTextColor={"#ffffff"}
                        

            style={{width:50,
                    height:50,
                    backgroundColor:COLORS.secondary,
                    fontWeight:"bold",
                    fontSize:19,
                    paddingHorizontal:12,
                    borderRadius:10,
                    color:"#ffffff"}} 
            />
        </View>

        {/* Select days between Tranfers */}
        <View style={{flexDirection:"row"}}>
          <View style={{flex:1}}  >
          <Text style={{fontWeight:"800",fontSize:18,color:COLORS.dark}}>Days between transfers: </Text>
          <Text style={{fontWeight:"500",fontSize:15,color:COLORS.tertiary,fontStyle:"italic"}}>Transfer money every several days  </Text>
          </View>
          <TextInput editable 
            keyboardType='numeric'
            maxLength={2} 
            value={days}
            selectionColor={"#ffffff"} 
            placeholderTextColor={"#ffffff"}
                        

            style={{width:50,
                    height:50,
                    backgroundColor:COLORS.secondary,
                    fontWeight:"bold",
                    fontSize:19,
                    paddingHorizontal:12,
                    borderRadius:10,
                    color:"#ffffff"}} 
            />
        </View>
        {/* Select First Date Transfer */}
        <View style={{flexDirection:"row",marginVertical:30}}>
          <View >
            <Text style={{fontWeight:"800",fontSize:18,color:COLORS.dark}}>Date: </Text>
            <Text style={{fontWeight:"500",fontSize:15,color:COLORS.tertiary,fontStyle:"italic"}}>Select a date for the first {"\n"}transfer </Text>
          </View>
          <DateTimePicker style={{flex:1 }} value={date} mode={mode} is24Hour={true} onChange={onChangeDate}/>
         </View>
         
      </View>
    )
  }
}




const MyBudgetPlan = () => {
  
  const [Enable1 , setEnable1]  = useState("cinsashd"); 

  const [isAuto,setIsAuto]= useState(false);
  
  const toggleSwitch = () => {
    setIsAuto(previousState => !previousState );
  
  }
  const donePressed = () => {
    console.log("donePressed")
  }
  

  return (
    <SafeAreaProvider style={{flex:1,headerTitle:"",backgroundColor:"white"}}>
      
      <Stack.Screen
        options={{
            headerShadowVisible:false ,
            headerShown:false
        }}/>
        <Pressable onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.row}>
            <TouchableOpacity onPress={()=>{router.push("(tabs)/ProfileScreen")}}>
            <AntDesign name="left" size={24} color={COLORS.dark} />
            </TouchableOpacity>
            <View style={{flex:1,backgroundColor:"white",height:40}}>
              <Text style={[styles.title,{color:COLORS.tertiary,bottom:2}]}>My Budget Plan</Text>
            </View>
          </View>
          <View style={{backgroundColor:COLORS.secondary,padding:8, borderRadius:25}}>
                
                    
          <View style={{borderRadius:25,backgroundColor:"#ffffff",marginTop:5,padding:18}}>
            <View style={{bottom:5,marginTop:10,alignItems:"center"}}>
              <Text style={{fontWeight:"800",fontSize:SIZES.xLarge,color:COLORS.dark}}>Save money for your goals</Text>
              <Text style={{fontWeight:"500",fontSize:SIZES.medium,color:COLORS.tertiary,fontStyle:"italic",marginTop:15}}>You can "transfer" funds to savings either automatically or manually.</Text>
            </View>
            <View style={{flexDirection:"row",flexWrap:"wrap",marginTop:30}}>
              <View style={{flex:1,flexDirection:"column"}}>
                <Text style={{fontWeight:"800",fontSize:SIZES.large,color:COLORS.dark}}>Automatic:  </Text>
                <Text style={{fontWeight:"500",fontSize:SIZES.medium,color:COLORS.tertiary,fontStyle:"italic"}}>Save money automatically  </Text>
              </View>
              <Switch 
                trackColor={{false: '#767577', true: COLORS.secondary}}
                thumbColor={isAuto ? COLORS.white : COLORS.white}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={!isAuto}
                
              ></Switch>
            </View>
            <View style={{marginTop:30}}>
              <AutoSelected isAuto={!isAuto} ></AutoSelected>
            </View>
            <Pressable 
              onPress={donePressed} 
              style={{
                paddingHorizontal:20,
                alignItems:"center",
                marginTop:10,
                width:"100%",
                paddingHorizontal:10,
                borderRadius:5,
                paddingVertical:15, 
                backgroundColor:COLORS.secondary,}} >
            <Text style={{fontSize:SIZES.medium,fontWeight:"bold",color:"white"}}>Done</Text>

          </Pressable>

          </View>
      
                  
    
            </View>
            
          

        </View>
        </Pressable>
                 
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