import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container:{
    
      marginLeft:35,
      // marginBottom:0
      
  },
  container2:{
    marginTop:20,
  },
    
  title: {
    fontSize: 18,
    color: COLORS.secondary,
    fontWeight:"bold"
  },
  notif_Cont:{
    marginTop:10,
    marginBottom:5,
    backgroundColor:"white",
    height:70,
    width:"90%",
    shadowColor: COLORS.gray,
    borderRadius:20,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,

  }})

export default styles;
