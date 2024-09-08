import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({

  container: {
    flex:1,
    paddingTop:40,
    paddingLeft:20
  },
  container2: {
    marginTop:10,
    height:85,
    // marginBottom:0,
    width:"95%",
  },
  header: {
    fontSize: SIZES.large,
    color: COLORS.dark,
    fontWeight:"bold",
    marginLeft:5
  },
  row: {
    flexDirection: "row",
    paddingLeft:5,
    flex:1,
  },
  add_btn_container:{
    
    justifyContent:"center",
    alignItems:"flex-end",

    height:72,

  },



  // image:{
  //   height:40,
  //   width:40
  // },
  col:  {
    backgroundColor:"white",
    borderRadius:50,
    padding:10,
    left:0

  },

 

});

export default styles;
