import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationScreen from "./NavigationScreen"
import { AuthProvider } from "../../context/auth";
import { GoalProvider } from "../../context/goals";
import { CategoriesProvider } from "../../context/categories";
import { TransactionProvider } from "../../context/transaction";

const Navigation =()=>{
    return(
        <NavigationContainer independent={true}>
            <AuthProvider>
                <GoalProvider>
                    <CategoriesProvider>
                        <TransactionProvider>
                            <NavigationScreen/>
                        </TransactionProvider>
                    </CategoriesProvider>
                </GoalProvider>
            </AuthProvider>
        </NavigationContainer>
    )
}

export default Navigation