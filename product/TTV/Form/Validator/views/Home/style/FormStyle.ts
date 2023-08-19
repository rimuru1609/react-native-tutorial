import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainblock:{
        minHeight: '100%', 
         padding:11,
         margin: 5,
         borderRadius: 15, 
         backgroundColor: '#ebebeb',
         alignItems: "center",
         justifyContent: "center",
         
         },
       title:{
           fontSize:29,
           fontWeight:"bold",
           alignItems: "center",
           justifyContent: "center",
           color:' rgb(119, 119, 252)'
       },
       check:{
         margin:10
       },
       link:{
         color:'blue',
     
       },
       viewStyleForLine:{
         borderBottomColor: "black", 
         borderBottomWidth: StyleSheet.hairlineWidth, 
         alignSelf:'stretch',
         width: "97%",
         margin:6
       },
       errorstyle: {
     
         color:'red'
       },
       buttonStyle: {
        backgroundColor: "#809fff",
       marginTop: 15,
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
});