import React from "react";
import SignInScreen from "./screens/SignInScreen";
import { AuthProvider } from "../context/auth2";


const index = ()=>{

  return(

    <AuthProvider>
      <SignInScreen/>
    </AuthProvider>
    

  )
}

export default index
