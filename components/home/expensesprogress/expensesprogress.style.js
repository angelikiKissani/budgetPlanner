import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  image1:{
    width:"100%",
    height:150,
    alignSelf:"center",
    objectFit:"contain"
  },
  image2:{
    width:"100%",
    height:140,
    objectFit:"contain",
    alignSelf:"center",
  },

  container: {
    
    width: "100%",
    marginTop:30,
    paddingLeft:20,
  },
  container2:{
    alignContent:"center",
    borderRadius:15,
    
    paddingTop:10,
    marginEnd:20,
    marginTop:10,
    backgroundColor:"white",
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
    

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
    marginTop:10,
  },
  col1:  {
    borderRadius:30,
    flex:  0.7,
    
  },
  col2:  {
    borderRadius:30,
    flex:  1.2,
  },
  chartContainer: {
    height: 400,
  },
});

export default styles;
