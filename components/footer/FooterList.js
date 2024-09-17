import { View,TouchableOpacity } from "react-native";
import React,{useState} from "react";
import FooterItem from "./FooterItem";
import { COLORS } from "../../constants";
import { useRoute,useNavigation } from "@react-navigation/native";
import IconSelector from "../common/iconselection/IconSelector";

const FooterList =({pressedHome,pressedExpenses,pressedAccount,pressedSavings})=>{
    const navigation = useNavigation();
    const route = useRoute();
    // const [pressedHome, setPressedH] = useState();


    // Handle press and toggle the pressed state


    return(
        <View 
            style={{
                justifyContent:"space-evenly" ,
                flexDirection:"row",
                height:80,
                // paddingBottom:20,
                // marginTop:4,
                backgroundColor:"white",

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                
                elevation: 3,
                
                borderColor:COLORS.gray,borderWidth:0.2,
                }}>
            <FooterItem name="home-footer" handlePress={() => { navigation.navigate("Home")}} pressed={pressedHome}  />
                                                                 
            <FooterItem name="expenses-footer"  handlePress={() => {navigation.navigate("Expenses")}} pressed={pressedExpenses}  />
            <FooterItem name="savings-footer" handlePress={() => {
                                                                                    navigation.navigate("Savings")
                                                                                    
                                                                                
                                                                                }}
                                                                                pressed={pressedSavings}  />
            <FooterItem name="account-footer" screenName={"ProfileScreen"} handlePress={() => navigation.navigate("Profile")} pressed={pressedAccount}/>
        </View>
    )
}
export default FooterList