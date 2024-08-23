import { StyleSheet,Text,View } from "react-native";
import React from "react";
import FooterItem from "./FooterItem";
import { COLORS } from "../../constants";
import { useRoute,useNavigation } from "@react-navigation/native";

const FooterList =()=>{
    const navigation = useNavigation();
    const route = useRoute();
    return(
        <View 
            style={{
                justifyContent:"space-evenly" ,
                flexDirection:"row",
                height:90,
                
                marginTop:20,
                backgroundColor:COLORS.tertiary,
                }}>
            <FooterItem name="home" screenName={"Home"} handlePress={() => navigation.navigate("Home")} routeName={route.name}/>
            <FooterItem name="expenses" screenName={"ExpensesScreen"} handlePress={() => navigation.navigate("Expenses")} routeName={route.name}/>
            <FooterItem name="savings" screenName={"SavingsScreen"} handlePress={() => navigation.navigate("Savings")} routeName={route.name}/>
            <FooterItem name="account" screenName={"ProfileScreen"} handlePress={() => navigation.navigate("Profile")} routeName={route.name}/>
        </View>
    )
}
export default FooterList