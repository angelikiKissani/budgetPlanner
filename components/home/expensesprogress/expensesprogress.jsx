import React,{useState,useEffect,useCallback,useContext,useRef} from 'react'
import { View, Text,Image,Dimensions, ScrollView,RefreshControl } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import styles from './expensesprogress.style'
import {AuthContext} from "../../../context/auth"
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';
import {BarChart} from "react-native-chart-kit";
import { COLORS, SIZES } from '../../../constants';


const ExpensesProgress = () => {
  const [state,setState] = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [today,setToday]=useState(new Date())
  const [currentMonthData, setCurrentMonthData] = useState([]);
  var data_Chart = [];
  const [transactions,setTransactions]=useState([]);
  const screenWidth = Dimensions.get("window").width;
  
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();
  let lastMonth = today.getMonth();
  let year;



  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  if (lastMonth===0){
    lastMonth = 12;
    year= today.getFullYear()-1
  }
  else{
    lastMonth = lastMonth;
      year= today.getFullYear()
  }
  const formattedLastMonth = lastMonth.toString().padStart(2, '0');
  const lastMonthYear = `${formattedLastMonth}/${year}`;
  const formattedCurrentMonth = currentMonth.toString().padStart(2, '0');
  const currentMonthYear = `${formattedCurrentMonth}/${currentYear}`;



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
      prepareDataForChart(chartData, lastMonthYear, setData);
      prepareDataForChart(chartData, currentMonthYear, setCurrentMonthData);
      // prepareDataForChart(chartData);
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



  const prepareDataForChart = (chartData, targetMonthYear, setDataCallback) => {
    const data_Chart = [];
    const wrapLabel = (label) => {
      const words = label.split(' ');
      return words.length > 1 ? words.join('\n') : label;
    };

    for (let i = 0; i < chartData.length; i++) {
      const datesplit = chartData[i].date.split("/");
      const month_year = `${datesplit[1]}/${datesplit[2]}`;

      if (month_year === targetMonthYear) {
        let exists = 0;
        if (chartData[i].category === undefined) continue;
        const wrappedLabel = wrapLabel(chartData[i].category);
        
        for (let j = 0; j < data_Chart.length; j++) {
          if (wrappedLabel === data_Chart[j][0]) {
            exists = 1;
            const value = data_Chart[j][1] - chartData[i].amount;
            data_Chart[j][1] = Number(value.toFixed(2));
            break;
          }
        }
        if (exists === 0) {
          data_Chart.push([wrappedLabel, -chartData[i].amount]);
        }
      }
    }
    data_Chart.sort((a, b) => b[1] - a[1]);
    setDataCallback(data_Chart);
  };


  const renderBarChart = (chartLabels, chartDataValues, monthName) => (
    <View>
      <Text style={{ margin: 20, fontSize: SIZES.large,fontStyle:"italic", color: COLORS.dark, fontWeight: '700' ,alignSelf:"center"}}>
       {monthName}
      </Text>
      <BarChart
        data={{
          labels: chartLabels.slice(0, 5),
          datasets: [
            {
              data: chartDataValues.slice(0, 5),
            },
          ],
        }}
        width={screenWidth - 60}
        height={250}
        chartConfig={{
          barRadius: 15,
          barPercentage:1.2,
          fillShadowGradientFromOpacity: 1,
          fillShadowGradient: COLORS.dark,
          fillShadowGradientFrom: COLORS.dark,
          fillShadowGradientTo: COLORS.light_secondary,
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
        showValuesOnTopOfBars={true}
        style={{
          paddingRight: 12,
          marginVertical: 5,
          borderRadius: 15,
        }}
      />
      <View style={{ 
        flexDirection: 'row',
         marginTop: -40, 
         width: screenWidth - 45, 
         height: 50, 
         justifyContent: "space-around", 
         alignItems:"center",
         left: 5.5, 
         paddingRight: 15, 
         paddingLeft: 15, 
         marginVertical: 5 }}>
        {chartLabels.slice(0, 5).map((label, index) => (
           <View key={index} style={{ width: (screenWidth - 100) / 5, alignItems: 'center' }}>
          <Text
            key={index}
            ellipsizeMode="tail" 
            adjustsFontSizeToFit={true}
            style={{
             
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 12,
              color: COLORS.dark,
              // marginTop: 2,
              marginHorizontal:2,
              bottom:5
            }}
          >
            {label}
          </Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Progress</Text>
      <View style={styles.container2}>
        {currentMonthData.length > 4 ? renderBarChart(currentMonthData.map(item => item[0]), currentMonthData.map(item => item[1]), months[currentMonth - 1])
        :
        <View style={{ padding: 20, paddingBottom: 25, alignItems: "center" }}>
            <Text style={{ color: COLORS.primary, fontSize: SIZES.medium }}>To make visualisations we require additional transaction data.</Text>
          </View>}
        </View>
        <View style={styles.container2}>
          {data.length >0 ? renderBarChart(data.map(item => item[0]), data.map(item => item[1]), months[lastMonth - 1]) : (
            <View style={{ padding: 20, paddingBottom: 25, alignItems: "center" }}>
              <Text style={{ color: COLORS.primary, fontSize: SIZES.medium }}>To make visualisations we require additional transaction data.</Text>
            </View>
          )}
        </View>
      
    </View>
  );











  // const chartLabels = data.map(item => item[0]); 
  // const chartDataValues = data.map(item => item[1]); 

  // return (
  //   <View style={styles.container}>
  //   <Text style={styles.header}>Progress</Text>
  //   <View style={styles.container2}>
      
  //   {data.length > 0 ?   
  //     <View>
  //     <View>
  //       <Text style={{margin:20,fontSize:SIZES.medium,color:COLORS.dark,fontWeight:700}}>
  //       Your expenses from last month: {months[lastMonth-1]}
  //       </Text>
  //     </View>
  //     <BarChart
  //       data={{
  //         labels: chartLabels.slice(0,5),
  //         datasets: [
  //           {
  //             data:chartDataValues.slice(0,5)
  //           }
  //         ]
  //     }}
      
  //     width={screenWidth - 80}
  //     height={250}
      
      
  //     chartConfig={{
        
  //       barRadius:15,
  //       fillShadowGradientFromOpacity:1,
  //       fillShadowGradient:COLORS.dark,
  //       fillShadowGradientFrom:COLORS.dark,
        
  //       fillShadowGradientTo:COLORS.light_secondary,
  //       backgroundColor: "white",
  //       backgroundGradientFrom: "white",
  //       backgroundGradientTo: "white",
  //       decimalPlaces: 2, 
  //       color: (opacity = 1) => COLORS.primary,
  //       labelColor: (opacity = 1) => COLORS.dark,
        
        
        
  //     }}
  //     fromZero={true}
  //     showBarTops={false}
  //     xLabelsOffset={-5}
  //     withInnerLines={false}
  //     withHorizontalLabels={false}
  //     withVerticalLabels={false}
  //     bezier
  //     showValuesOnTopOfBars={true}
      
  //     style={{
        
  //       paddingRight:12,
  //       marginVertical: 5,
  //       borderRadius: 15,
  //         }}
  //     />
  //     <View style={{ flexDirection: 'row', marginTop: -40,width:screenWidth-75,height:50,justifyContent:"space-around",
  //     left:5.5,
  //       paddingRight:15,
  //       paddingLeft:15,
  //       marginVertical: 5, }}>
  //       {chartLabels.slice(0,5).map((label, index) => (
  //         <Text
  //           key={index}
  //           style={{
  //             textAlign: 'center',
  //             fontWeight: '700',
  //             fontSize: 13,
  //             color:COLORS.dark,
  //             marginTop: 2,
  //           }}
  //         >
  //           {label}
  //         </Text>
  //       ))}
  //     </View>
      
  //     </View>
  //     :<>
  //     <View style={{padding:20,paddingBottom:25,alignItems:"center"}}>
  //       <Text style={{color:COLORS.primary,fontSize:SIZES.medium}}>To make visualisations</Text>
  //       <Text style={{color:COLORS.primary,fontSize:SIZES.medium}}> we require additional transaction data.</Text>
  //     </View>
  //     </>
  //   }
    
      
    
  //   </View>
  // </View>
  // )
}

export default ExpensesProgress;


