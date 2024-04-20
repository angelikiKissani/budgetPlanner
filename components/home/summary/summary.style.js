import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  

  container: {
    width: "100%",
    height:180,
    paddingTop:40,
    paddingLeft:20
  },
  header: {
    fontSize: SIZES.large,
    color: COLORS.dark,
    fontWeight:"bold",
    marginLeft:5
  },
  row: {
    flexDirection: "row",
    width:"95%",
    height:70,
    marginTop:10,
  },
  col1:  {
    backgroundColor:  COLORS.primary,
    borderRadius:25,
    flex:  1.1,
    justifyContent:"center",
    alignItems:"center",
    
    marginRight:20,
     
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,

    
  },
  col2:  {
    backgroundColor:  COLORS.secondary,
    borderRadius:25,
    flex:  1,
    justifyContent:"center",
    alignItems:"center",
     
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  title:{
    fontSize: SIZES.xxxLarge,
    color: "white",
    fontWeight:"bold",
    marginTop:1

  },
  subtitle:{
    fontSize: SIZES.small,
    color: "white",
    fontWeight:"bold",
    marginTop:1

  }
});

export default styles;
