import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    item_course : {
       padding :11,
        borderBottomWidth: 1,
        borderBottomColor : "#e2e2e2",
        flexDirection : "row",
        justifyContent:"space-around",
        
    },
    txt_name : {
        fontSize : 18,
        marginTop : 5,
        fontWeight : "bold"
    },
    txt_item : {
        fontSize : 14,
        marginTop : 5
    },
    txt_enabled : {
        fontSize : 14,
        marginTop : 5,
        color:"green",
        fontWeight : "bold"
    },
    txt_disabled : {
        fontSize : 14,
        marginTop : 5,
        color:"yellow",
        fontWeight : "bold"
    },
    txt_del:{
        fontSize : 14,
        marginTop : 5,
        color:"red",
        fontWeight : "bold"
    },
    txt_edit:{
        fontSize : 14,
        marginTop : 5,
        color:"blue",
        fontWeight : "bold"
    },
    txt_detail:{
      fontSize : 14,
      marginTop : 5,
      color:"green",
      fontWeight : "bold"
  },
    searchInput: {
      height: 37,
      marginBottom:10 ,
      paddingHorizontal: 5,
      marginTop:5,
      width:'95%',
      fontSize:15
    },
    search: {
      flexDirection : "row",
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      marginTop:5
    },
    clearButtonParent: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
    clearButton: {
      height: 16,
      width: 16,
    }, 
    buttonStyle: {
      backgroundColor: "#809fff",
      paddingVertical: 7,
      paddingHorizontal: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      fontSize: 15,
      color: "#eee",
      fontWeight:'bold',
      fontFamily: "JosefinSans_400Regular",
    },
    image:{
      height:70,
      width:'27%',
    },
    cardImage:{
      width: "100%",
    display: "flex",
    alignSelf: "center",
    height: undefined,
    aspectRatio: 1,
    },
    
});