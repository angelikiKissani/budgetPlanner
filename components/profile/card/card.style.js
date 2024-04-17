import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({

  container_:{
    height:330

  },
  image:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.35,

    elevation: 19,
    
  },
  row: {
    flexDirection: "row",
    
  },

  container: {
    marginTop:80,
    marginLeft:22
  },

  container2: {
    marginTop:20,
    height:180,
    alignSelf:"center",
    backgroundColor:"white",
    width: "89%",
    paddingTop:10,
    paddingLeft:20,
    borderRadius:25
    
  },
  col2:{
    padding:20,
    paddingTop:50

    

  },
  header: {
    fontSize: 24,
    color: COLORS.tertiary,
    fontWeight:"bold"
  },
  profilepic:{ 
    
    marginTop:32,
    marginLeft:10,
    borderRadius:80,
  
  },
  name:{
    color:COLORS.tertiary,
    fontSize:SIZES.medium,
    fontWeight:"900",
    textAlign:"center"
  },
  email:{
    color:COLORS.secondary,
    fontSize:SIZES.medium,
    fontWeight:"500",
    textAlign:"center",
    marginTop:5

  }
}


);

export default styles;
