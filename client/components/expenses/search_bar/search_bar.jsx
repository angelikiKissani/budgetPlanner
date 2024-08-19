import React from "react"
import { Text,View,TextInput,StyleSheet } from "react-native"

import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from "../../../constants"
const Row=({children})=>{
    return(
      <View style={styles.row}>{children}</View>
    )
  
  }

const SearchBar=()=>{

    return (
        <View>
        <Row>
        <TextInput placeholder="Search Transaction" 
                   clearButtonMode="always"
                   style={styles.search_box}
                   placeholderTextColor={COLORS.primary}
                   autoCapitalize="none"
                   autoCorrect={false}
                   
        />
        <View style={styles.icons}>
        <AntDesign name="filter" size={17} color={COLORS.primary} />

        </View>
        </Row>
        </View>
    )
}

const styles=StyleSheet.create({
    search_box:{
        // borderColor:COLORS.secondary,
        backgroundColor:"white",
        borderRadius:12,  
        flex:0.95,
        paddingHorizontal:20,
        paddingVertical:13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.8,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.00,
        
        elevation: 3,
        

    },
    icons:{
        marginRight:10,
        backgroundColor:"white",
        borderRadius:25,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.8,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.00,
        
        elevation: 3,
        
         
    },
    
    row: {
        flexDirection: "row",
        marginVertical:17,
        paddingEnd:8,
        height:50,
        alignItems:"center", 
        justifyContent:"space-between",
        
    },
})


export default SearchBar