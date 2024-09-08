import { StyleSheet } from "react-native";
import { COLORS,SIZES,SHADOWS } from "../../../constants";

const styles = StyleSheet.create({
    transaction_container:{
        backgroundColor:"black",
        
    },
    date_container:{
        marginTop:15,
        backgroundColor:"#afc3c4",
        height:32,
        width:"110%",
        left: -20,
        paddingLeft:30,
        justifyContent:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.22,
        shadowRadius: 4.22,
        
        elevation: 5,
    },
    date:{
        color:"white",
        fontSize:SIZES.medium,
        fontWeight:"600",
        
    },
    row: {
        flexDirection: "row",
        marginTop:5,
        paddingEnd:8,
        height:80,
        alignItems:"center", 
        justifyContent:"space-between",
        
    },
    icon_container:{
        backgroundColor:"white",
        padding:11,
        borderRadius:25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 2.00,
        
        elevation: 1,
        
    },
    icon:{
        right:1,
        shadowColor:SHADOWS.medium
    },
    description_container:{
        flexDirection:"row",
        flex:1,
        marginHorizontal:15,
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:3
    },
    category_container:{
        
        marginHorizontal:7,
        
        backgroundColor:COLORS.warm,
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderRadius:25

    },
    price_container:{
        // flex:0.3
        

    },
    text1:{
        fontSize:16,
        color:COLORS.tertiary,
        // fontStyle:"italic",
        fontWeight:"700"
    },
    text2:{
        color:"white",
        fontSize:SIZES.xSmall,
        fontWeight:"700"
    },
    price_text:{
        color:COLORS.tertiary,
        fontWeight:"bold",
        fontSize:SIZES.medium
    },
    date_text:{
        fontSize:SIZES.xSmall,
        color:COLORS.primary,
        fontStyle:"italic",
        fontWeight:"500",
        marginTop:1

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 100,
        // top:6
        
      },
      modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 15,
        paddingBottom:35,
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
        margin:10
      },
    
      buttonClose: {
        backgroundColor: COLORS.tertiary,
      },

})

export default styles