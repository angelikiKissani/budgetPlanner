import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  

  container: {
    flexDirection:"row",
    flex:1,
    width: "100%",
    paddingTop:20,
    paddingLeft:20
  },
  container2:{
    backgroundColor:"white",
    marginRight:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
    
  },
  split:{
    borderWidth:0.5,
    marginHorizontal:50,
    borderColor:"#D3D3D3",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,
  },
  split2:{
    borderWidth:0.5,
    marginTop:10,
    width:"90%",
    marginLeft:20,
    borderColor:"#D3D3D3",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,

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
    fontSize: 39,
    color: "black",
    fontWeight:"bold",
    marginTop:1

  },
  subtitle:{
    fontSize: 18,
    // fontStyle:"italic",
    color:"#484848",
    fontWeight:"700",
    marginTop:1

  }
});

export default styles;
