import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({

  container_2:{
    marginTop:10,
    backgroundColor:"#F8F8F8",
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
  // bar savings
  container_3: {
    // marginTop:10,
    height:85,
    // marginBottom:0,
    width:"95%",
    // backgroundColor:'#F8F8F8',
    // borderWidth:3,
    // borderColor:COLORS.dark,
    // // borderRadius:15,
    // borderTopColor:"transparent",
    // borderLeftColor:"transparent",
    // borderRightColor:"transparent"

  },
  container_4:{
    flex:1,
    marginBottom:550
  },
  header: {
    fontSize: SIZES.xxLarge,
    color: COLORS.dark,
    fontWeight:"bold",
    marginLeft:25,
    marginTop:55
  },
  row: {
    flexDirection: "row",
    flex:1,
    // marginTop:1,
    paddingLeft:5,
    // padding:6,
    
    
    
  },
  row_2: {
    flexDirection: "row",
    paddingLeft:1,
    padding:2,
    marginTop:25,
    width:"95%",
    backgroundColor:COLORS.primary,
    borderRadius:17,
    alignItems:"center"

  },
  col2:{
    flex:1,
    backgroundColor:COLORS.white,
    height:"100%",
    paddingBottom:1,
    borderBottomEndRadius:15,
    borderTopEndRadius:15,
    marginLeft:10
  },


  title: {
    fontSize: SIZES.large,
    color: COLORS.dark,
    fontWeight:"bold",
    
    
  },
  addnewgoal:{
    fontSize: SIZES.medium,
    color: COLORS.tertiary,
    fontWeight:"bold",
    textDecorationLine: 'underline',
    marginRight:15

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 22,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderWidth:0.4,
    borderColor:COLORS.gray,
    
    elevation: 4,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: COLORS.tertiary,
  },
  textStyle: {
    color: "white",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  add_btn_container:{
    
    justifyContent:"center",
    alignItems:"flex-end",

    height:72,

  },
});

export default styles;
