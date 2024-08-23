import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({

  container_2:{
    marginTop:15,
    backgroundColor:"white",
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingTop:20,
    paddingLeft:20,
    height:1000,
    shadowColor: COLORS.tertiary,
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,  


  },
  container_3: {
    marginTop:10,
    height:85,
    marginBottom:20,
    width:"95%",
    backgroundColor:COLORS.primary,
    borderRadius:25
  },
  container_4:{
    flex:1,
    height:1000
  },
  header: {
    fontSize: SIZES.xxxLarge,
    color: COLORS.tertiary,
    fontWeight:"bold",
    marginLeft:25,
    marginTop:80
  },
  row: {
    flexDirection: "row",
    marginTop:5,
    paddingLeft:5,
    padding:8,
    
    
  },
  row_2: {
    flexDirection: "row",
    paddingLeft:5,
    padding:8,
    marginTop:25,
    height:120,
    width:"95%",
    backgroundColor:COLORS.primary,
    borderRadius:25,
    alignItems:"center"

  },
  col2:{
    flex:1,
    backgroundColor:COLORS.white,
    height:"100%",
    borderBottomEndRadius:15,
    borderTopEndRadius:15,
    marginLeft:10
  },


  title: {
    fontSize: SIZES.large,
    color: COLORS.dark,
    fontWeight:"bold",
    marginLeft:5,
    marginTop:20
  }
});

export default styles;
