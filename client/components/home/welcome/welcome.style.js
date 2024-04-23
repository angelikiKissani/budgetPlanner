import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  image:{
    backgroundColor:"white",
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    
  },

  container: {
    width: "100%",
    paddingTop:10,
    paddingLeft:20,
    
  },
  userName: {
    fontSize: SIZES.xxxLarge,
    color: COLORS.dark,
    fontWeight:"bold",
    margin:10
  },
  profilepic:{ 
    marginTop:40,
    marginHorizontal:"85%",
    borderRadius:30,
    shadowColor: "#000",

    
  }
});

export default styles;
