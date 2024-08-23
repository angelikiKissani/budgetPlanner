import React from "react";
import Navigation from "../components/navigation/Navigation";

const index=()=>{
  return (
    <Navigation/>
  )
}
export default index










// import React from "react";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from "@react-navigation/native";
// import SignUpScreen from "./screens/SignUpScreen";
// import SignInScreen from "./screens/SignInScreen";
// import Home from "./screens/Home"
// import { AuthProvider } from "../context/auth";

// const Stack = createNativeStackNavigator();

// export default function index(){
//   return(
//     <NavigationContainer independent={true}>
//       <AuthProvider>
//         <Stack.Navigator initialRouteName="SignIn" >
//           <Stack.Screen name="SignIn" component={SignInScreen}/>
//           <Stack.Screen name="SignUp" component={SignUpScreen}/>
//           <Stack.Screen name="Home" component={Home} options={{ headerShown: false,animation:"fade", animationDuration:"200"}} />
//         </Stack.Navigator>
//       </AuthProvider>
//     </NavigationContainer>
//   )
// }









// // import React from "react";
// // import SignInScreen from "./screens/SignInScreen";
// // // import { AuthProvider } from "../context/auth2";


// // const index = ()=>{

// //   return(

// //       <SignInScreen/>
    

// //   )
// // }

// // export default index
