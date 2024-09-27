import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  image:{
    
    backgroundColor:"white",
    marginBottom:-12,
    borderBottomRightRadius:35,
    borderBottomLeftRadius:35,
    bottom:15,
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
    flex:1,
    width: "100%",
    paddingTop:10,
    paddingLeft:20,
    
  },
  welcomeBack: {
    fontSize: 18,
    color: '#484848',
    fontWeight:"bold",
    marginHorizontal:10
  },
  userName: {
    fontSize: 38,
    color: COLORS.dark,
    fontWeight:"bold",
    marginHorizontal:9,
    paddingLeft:10,
  },
  profilepic:{ 
    marginTop:60,
    marginHorizontal:"87%",
    borderRadius:30,
    shadowColor: "#000",
    borderWidth:0.5,
    borderColor:COLORS.tertiary

    
  }
});

export default styles;
