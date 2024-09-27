import { React , useCallback, useContext, useEffect, useState } from 'react'
import {Text,View,StyleSheet,ScrollView,RefreshControl } from 'react-native'
import { COLORS,SIZES } from '../../../constants';
import { useFocusEffect } from '@react-navigation/native';
import Transactions from "../transactions/transactions"
import Change_date from '../transactions/change_date';
import SearchBar from '../search_bar/search_bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AuthContext } from '../../../context/auth';
import {TransactionContext} from "../../../context/transaction"

const HeaderExpenses = () => {
  const [state,setState] = useContext(AuthContext);
  const [transactions,setTransactions]=useContext(TransactionContext)
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Add state for the search term
  let transactionList = [];
  

  //REFRESH PAGE
  const [refresh, setRefresh] = useState(false);
  const onRefresh = useCallback( () => {
    setRefresh(true);
    setTimeout(()=>{
      setRefresh(false)
    },2000)

  }, [] );
    useEffect(()=>{
      fetchTransactions();
    },[refresh])
    useFocusEffect(
      useCallback(() => {
        fetchTransactions();
      }, [])
    );

  
  const fetchTransactions = async ()=>{
    let storedData =await AsyncStorage.getItem("auth-rn");
    const parsed =JSON.parse(storedData);
    const {data}=await axios.post("https://budget-planner-backend-mcuw.onrender.com/api/fetch-transaction",{user_id:parsed.user._id})
    setTransactions(data.result1)
    setFilteredTransactions(data.result1); 


    const stored= JSON.parse(await AsyncStorage.getItem("auth-rn"));
    stored.user=data.user;
    await AsyncStorage.setItem("auth-rn",JSON.stringify(stored));
    setState({...state,user:data.user})
    
    // setState({..state,user.})

  }
  const handleSearch = (text) => {
    setSearchTerm(text);

    if (text === '') {
      setFilteredTransactions(transactions); // If search is empty, show all transactions
    } else {
      const filteredData = transactions.filter((transaction) =>
        (transaction.description?.toLowerCase() || '').includes(text.toLowerCase()) ||
        (transaction.category?.toLowerCase() || '').includes(text.toLowerCase())
      );
      setFilteredTransactions(filteredData); // Update filtered transactions
    }
  };



  for (let i=0, k=0; i<filteredTransactions.length ; i++ , k++ ){
    
    if(i==0 || filteredTransactions[i]["date"]!=filteredTransactions[i-1]["date"]){
      transactionList.splice(0,0,
        <View key={k}>
        <Change_date date={filteredTransactions[i]["date"]}/>
        </View>
      )
      transactionList.splice(1,0,
        <View key={k+1}>
        <Transactions onRefresh={onRefresh} id={filteredTransactions[i]["transaction_id"]} description={filteredTransactions[i]["description"]} goal={filteredTransactions[i]["goal"]}  time={filteredTransactions[i]["time"]} date={filteredTransactions[i]["date"]} category={filteredTransactions[i]["category"]} price={filteredTransactions[i]["price"]} />
        </View>
      )
      k+=1
      
    }
    else{
      transactionList.splice(1,0,
        <View key={k}>
        <Transactions onRefresh={onRefresh} id={filteredTransactions[i]["transaction_id"]} description={filteredTransactions[i]["description"]} goal={transactions[i]["goal"]}  time={filteredTransactions[i]["time"]}  date={filteredTransactions[i]["date"]} category={filteredTransactions[i]["category"]} price={filteredTransactions[i]["price"]} />
        </View>
      )}

  
  }

  // PREPARE TO SHOW THE DATA
  // for (let i=0, k=0; i<transactions.length ; i++ , k++ ){
 
  //   if(i==0 || transactions[i]["date"]!=transactions[i-1]["date"]){
  //     transaction.splice(0,0,
  //       <View key={k}>
  //       <Change_date date={transactions[i]["date"]}/>
  //       </View>
  //     )
  //     transaction.splice(1,0,
  //       <View key={k+1}>
  //       <Transactions onRefresh={onRefresh} id={transactions[i]["transaction_id"]} description={transactions[i]["description"]} goal={transactions[i]["goal"]}  time={transactions[i]["time"]} date={transactions[i]["date"]} category={transactions[i]["category"]} price={transactions[i]["price"]} />
  //       </View>
  //     )
  //     k+=1
      
  //   }
  //   else{
  //     transaction.splice(1,0,
  //       <View key={k}>
  //       <Transactions onRefresh={onRefresh} id={transactions[i]["transaction_id"]} description={transactions[i]["description"]} goal={transactions[i]["goal"]}  time={transactions[i]["time"]}  date={transactions[i]["date"]} category={transactions[i]["category"]} price={transactions[i]["price"]} />
  //       </View>
  //     )}

  
  // }

  return (
     <View style={styles.container}>
       <SearchBar value={searchTerm} onChangeText={handleSearch}/>
        <Text style={styles.title}>Transactions </Text>
        <View style={styles.extra}></View>
        <ScrollView 
          style={styles.scroll_view}
          refreshControl={<RefreshControl refresh={refresh} onRefresh={onRefresh}/>}
          >
            
        {transactionList}
        </ScrollView>
      </View>


  )
  };


const styles = StyleSheet.create({
  scroll_view:{
    flex:1,
    paddingHorizontal:15,
    left:-10,
    marginHorizontal:-10,
    height:"70%"

    

  },

  container:{
    flex:1,
    backgroundColor:"white",
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingTop:40,
    paddingLeft:20,
      


  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.dark,
    fontWeight:"bold",
    marginBottom:5,    
  }
  ,
  extra:{
    // borderWidth:1,
    width:380,
    backgroundColor:"white",
    shadowColor: COLORS.dark,
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.80,
    shadowRadius: 2.00,
    
    elevation: 3,
    

  }

})

export default HeaderExpenses
