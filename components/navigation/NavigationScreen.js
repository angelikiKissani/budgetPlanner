import React, { useContext } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "../../app/screens/SignUpScreen";
import SignInScreen from "../../app/screens/SignInScreen";
import Home from "../../app/screens/Home"
import ExpensesScreen from "../../app/screens/ExpensesScreen"
import SavingsScreen from "../../app/screens/SavingsScreen"
import ProfileScreen from "../../app/screens/ProfileScreen"
import Categories from "../../app/screens/Categories"
import EditProfile from "../../app/screens/EditProfile"
import MyBydgetPlan from "../../app/screens/MyBudgetPlan"
import ForgotPassword from "../../app/screens/ForgotPassword"


import { AuthContext } from "../../context/auth"

const Stack = createNativeStackNavigator()
const NavigationScreen = ()=>{
    const [state,setState] = useContext(AuthContext)
    const authenticated = state && state.token !== "" && state.user !==null && state.token!== undefined;
    console.log("Authenticated:"+authenticated);
  return(
        <Stack.Navigator initialRouteName="SignIn" >
            {authenticated ? 
            (
            <>
              <Stack.Screen name="Home" component={Home} options={{gestureEnabled:false, headerShown: false,animation:"fade", animationDuration:"200"}}/>
              <Stack.Screen name="Expenses" component={ExpensesScreen} options={{ gestureEnabled:false, headerShown: false,animation:"fade", animationDuration:"200"}}/>
              <Stack.Screen name="Savings" component={SavingsScreen} options={{gestureEnabled:false,headerShown: false,animation:"fade", animationDuration:"200"}}/>
              <Stack.Screen name="Profile" component={ProfileScreen} options={{ gestureEnabled:false,headerShown: false,animation:"fade", animationDuration:"200"}}/>
              <Stack.Screen name="Categories" component={Categories} options={{gestureEnabled:false, headerShown: false,animation:"fade", animationDuration:"200"}}/>
              <Stack.Screen name="EditProfile" component={EditProfile} options={{ gestureEnabled:false,headerShown: false,animation:"fade", animationDuration:"200"}}/>
              {/* <Stack.Screen name="MyBudgetPlan" component={MyBydgetPlan} options={{gestureEnabled:false, headerShown: false,animation:"fade", animationDuration:"200"}}/> */}
               </>
            )
            :
            (<>
                <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false,animation:"fade", animationDuration:"100"}}/>
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false,animation:"fade", animationDuration:"100"}}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false,animation:"fade", animationDuration:"200"}}/>
           
            </>)} 
         </Stack.Navigator>
      
  )
}
export default NavigationScreen









// import React from "react";
// import SignInScreen from "./screens/SignInScreen";
// // import { AuthProvider } from "../context/auth2";


// const index = ()=>{

//   return(

//       <SignInScreen/>
    

//   )
// }

// export default index
