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
    height:210,
    paddingLeft:20,
  },
  container2:{
    backgroundColor:"white",
    marginEnd:20,
    marginTop:10,
    padding:10,
    borderRadius:25,
    shadowColor: COLORS.gray,
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    

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
  }
});

export default styles;
