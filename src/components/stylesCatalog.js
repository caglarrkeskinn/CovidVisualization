import { StyleSheet } from "react-native";

export const stylesCatalog = StyleSheet.create({
      mapButton: {
        borderRadius: 50,
        backgroundColor: "#35464F",
        position: "absolute",
        top: "5%",
        right: "5%",
        width:  80,
        height: 45,
       
      },
      container: {
        flex: 1,
        backgroundColor: "#1c2732",
      },
      container2: {
        height: 80,
        width:  164,
        borderRadius: 30,
        padding: 15,
        marginLeft: 20,
        marginBottom: 12,
        
    },
      
      homeButton: {
        borderRadius: 30,
        backgroundColor: "tomato",
        position: "absolute",
        top: "5%",
        left: "5%",
      },
      covidHeading: {
        color: "#FFF",
        fontSize: 16,
        alignSelf: "flex-start",
        fontWeight: "bold",
        margin: 20,
        marginTop: "15%",
        
      },
      mapHeading: {
        //fontFamily: 'Roboto',
        color: "#FFF",
        fontSize: 16,
        alignSelf: "center",
        fontWeight: "bold",    
        margin: 10,
      },
    
      cards: {
        marginTop: -120,
      },
      casesHeading: {
        marginTop: 20,
    
        color: "#FFF",
        fontSize: 15,
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: "center",
      },
      flatList: {
      marginTop: 10,
      },
      box: {
        borderWidth: 2,
        borderColor: "#27546C",
        alignItems: "center",
        textAlign: "center",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: "#27546C",
        height: 169,
      },
    
      box2:{
        borderWidth: 2,
        borderColor: "white",
        width: 171,
        height: 184,
        alignItems: "center",
        textAlign: "center",
        borderRadius:25,
        backgroundColor: "white",
        left: 211,
        top: 10
      },
      map: {
        width: "100%",
        height: "100%",
      },
      Global:{
        borderRadius: 50,
        backgroundColor: "#FFFFFF",
        position: "absolute",
        width: 126,
        height: 31,
        top: 120,
        left: 200,
    
      },
      globalText: {
        //fontFamily: 'Roboto',
        color: 'black',
        position: "absolute",
        fontSize: 20,
        alignSelf: "center",
        fontWeight: "bold",
        margin: 3,
      },
      Turkey:{
        borderRadius: 50,
        backgroundColor: '#263238',
        position: "absolute",
        width:  241,
        height: 31,
        top: 120,
        left: 85,
    
      },
      turkeyText: {
        //fontFamily: 'Roboto',
        position: "absolute",
        color: 'white',
        fontSize: 20,
        alignSelf: "flex-start",
        fontWeight: "bold",
        paddingLeft: 25,
        margin: 3,
      },
      rows: {
        width: '100%',
        marginTop: 10,
        marginBottom: 8,
        padding: 10
      },
      countryName: {
          fontSize: 15,
          color:'#fff',
          fontWeight: 'bold'
      },
      totalCases: {
          fontSize: 12,
          color:'#fff',
          fontWeight: 'bold',
          marginTop: 5
      },
      flag: {
          height: 30,
          width: 40,
          padding: 10, 
          borderRadius: 1000
      },
      
      col: {
          flexDirection: "row"
      },
      title: {
          alignSelf: "center",
          position:"absolute",
          marginTop: 5,
          color: '#533219',
          fontWeight: "bold",
          flexShrink: 12
      },
      number: {
          fontWeight: "bold",
          fontSize: 22,
          justifyContent:"center",
          
          
      }
      
      
});

export default stylesCatalog;