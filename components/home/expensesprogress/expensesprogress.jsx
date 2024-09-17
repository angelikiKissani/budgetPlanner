import React,{useState,useEffect,useCallback,useContext,useRef} from 'react'
import { View, Text,Image,Dimensions, ScrollView,RefreshControl } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import styles from './expensesprogress.style'
import {AuthContext} from "../../../context/auth"
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
import {BarChart} from "react-native-chart-kit";
import { COLORS } from '../../../constants';


const ExpensesProgress = () => {
  const [state,setState] = useContext(AuthContext);
  const [data, setData] = useState([]);
  var data_Chart = [];
  const [transactions,setTransactions]=useState([]);
  const screenWidth = Dimensions.get("window").width;


  useFocusEffect(
    useCallback(() => {
      fetchTransactions(state.user._id);
    }, [state.user._id])
  );

  useEffect(()=>{
    try{
      const chartData = transactions.map(expense => ({
        category: expense.category,
        amount: expense.price,
        date:expense.date,
      }))
      
      prepareDataForChart(chartData);
    }catch(err){console.log(err)}
  },[transactions])

  const fetchTransactions = async (user_id)=>{
    try{
      const {data}=await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/fetch-transaction",{user_id: user_id})
      setTransactions(data.result1)
      const stored= JSON.parse(await AsyncStorage.getItem("auth-rn"));
      stored.user=data.user;
      await AsyncStorage.setItem("auth-rn",JSON.stringify(stored));
      setState({...state,user:data.user})
    }catch(err) {console.log('Error fetching transactions:', err);}
    
  
  }



  const prepareDataForChart=(chartData)=>{
    const wrapLabel = (label) => {
      const words = label.split(' ');
      // console.log(words)
      if (words.length > 1) {
        return words.join('\n');
      }
      
      return label; 
    };
    
    for(i=0;i<chartData.length;i++){
      datesplit=chartData[i].date.split("/")
      month_year=datesplit[1]+"/"+datesplit[2];
      
      if(month_year=="08/2024"){
        var exists=0
        
        if(chartData[i].category==undefined){continue}
        const wrappedLabel=wrapLabel(chartData[i].category)
        for(j=0;j<data_Chart.length;j++){
          
          // already added the expense to the data array for the chart
          //so i increase the amount
          if(wrappedLabel==data_Chart[j][0]){
            exists=1;
            var value= data_Chart[j][1]-chartData[i].amount
            data_Chart[j][1]=Number(value.toFixed(2));
            break;
          }
          
        }
        //add the expense
        if(exists==0){
          
          data_Chart.push([wrappedLabel,-chartData[i].amount])
        }
      }
    }
    data_Chart.sort((a, b) => b[1] - a[1])
    
    setData(data_Chart)

    
  }
  const chartLabels = data.map(item => item[0]); 
  const chartDataValues = data.map(item => item[1]); 

  return (
    <View style={styles.container}>
    <Text style={styles.header}>Progress</Text>
    <View style={styles.container2}>
      
    {data.length > 0 && (  
      <View>
      <BarChart
        data={{
          labels: chartLabels.slice(0,5),
          datasets: [
            {
              data:chartDataValues.slice(0,5)
            }
          ]
      }}
      width={screenWidth - 80}
      height={250}
      
      
      chartConfig={{
        
        barRadius:15,
        fillShadowGradientFromOpacity:1,
        fillShadowGradient:COLORS.dark,
        fillShadowGradientFrom:COLORS.dark,
        
        fillShadowGradientTo:COLORS.light_secondary,
        backgroundColor: "white",
        backgroundGradientFrom: "white",
        backgroundGradientTo: "white",
        decimalPlaces: 2, 
        color: (opacity = 1) => COLORS.primary,
        labelColor: (opacity = 1) => COLORS.dark,
        
        
        
      }}
      fromZero={true}
      showBarTops={false}
      xLabelsOffset={-5}
      withInnerLines={false}
      withHorizontalLabels={false}
      withVerticalLabels={false}
      bezier
      showValuesOnTopOfBars={true}
      
      style={{
        
        paddingRight:12,
        marginVertical: 5,
        borderRadius: 15,
          }}
      />
      <View style={{ flexDirection: 'row', marginTop: -40,width:screenWidth-75,height:50,justifyContent:"space-around",
      left:5.5,
        paddingRight:15,
        paddingLeft:15,
        marginVertical: 5, }}>
        {chartLabels.slice(0,5).map((label, index) => (
          <Text
            key={index}
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 13,
              color:COLORS.dark,
              marginTop: 2, // Adjust as necessary for spacing
            }}
          >
            {label}
          </Text>
        ))}
      </View>
      
      </View>
      
    )}
      
    
    </View>
  </View>
  )
}

export default ExpensesProgress;


{/* <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 230, flexDirection: 'row' }}>
      {chartDataValues.slice(0, 5).map((value, index) => {
        const labelXPos = ((screenWidth - 40) / 5) * index + ((screenWidth - 30) / 20); 
        return (
          <Text
            key={index}
            style={{
              position: 'absolute',
              left: labelXPos,
              top: 206 - (value / Math.max(...chartDataValues)) * 200,
              color: COLORS.dark,
              fontWeight: 'bold',
            }}
          >
          €{value.toFixed(1)}
          </Text>
        );
      })}
      </View> */}