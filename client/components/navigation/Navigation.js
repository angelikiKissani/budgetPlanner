import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationScreen from "./NavigationScreen"
import { AuthProvider } from "../../context/auth";
import { GoalProvider } from "../../context/goals";

const Navigation =()=>{
    return(
        <NavigationContainer independent={true}>
            <AuthProvider>
                <GoalProvider>
                <NavigationScreen/>
                </GoalProvider>
            </AuthProvider>
        </NavigationContainer>
    )
}

export default Navigation