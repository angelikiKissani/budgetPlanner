import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({

  container: {
    paddingTop:40,
    paddingLeft:20
  },
  container2: {
    marginTop:10,
    height:85,
    width:"95%",
    backgroundColor:COLORS.primary,
    borderRadius:25
  },
  header: {
    fontSize: SIZES.large,
    color: COLORS.dark,
    fontWeight:"bold",
    marginLeft:5
  },
  row: {
    flexDirection: "row",
    marginTop:5,
    paddingLeft:5,
    padding:8,
    
  },



  image:{
    height:40,
    width:40
  },
  col:  {
    backgroundColor:"white",
    borderRadius:50,
    padding:10,
    left:0

  },
  add_btn_container:{
    marginHorizontal:10,
    paddingTop:20,
    position:"absolute",
    right:0,

    height:72,
    borderLeftColor:"white",
    borderRightColor:"transparent",
    borderTopColor:"transparent",
    borderBottomColor:"transparent",
    borderWidth:1


  },
  add_btn:{
    marginLeft:10,
    height:30,
    width:30

  },

});

export default styles;
