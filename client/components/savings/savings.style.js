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
  // bar savings
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
    marginBottom:550
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
    flex:1,
    marginTop:5,
    paddingLeft:5,
    padding:8,
    
    
    
  },
  row_2: {
    flexDirection: "row",
    paddingLeft:5,
    padding:3,
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
  buttonOpen: {
    backgroundColor: '#F194FF',
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
});

export default styles;
