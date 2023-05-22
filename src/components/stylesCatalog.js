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
        backgroundColor: "white",
      },
      cardStyle:{
        
        margin: 10,
        borderWidth:1,
        borderColor:'gray',
      },
      cardImage:{
        height: 150, 
        width: '100%' 
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
        backgroundColor: "#3F414E",
        position: "absolute",
        top: "75%",
        justifyContent:'center',
        position:"absolute",
        width:  140,
        height: 45,
      },
      covidHeading: {
        color: "#FFF",
        fontSize: 20,
        alignSelf: "center",
        fontWeight: "bold",
        margin: 25,
        marginTop: "10%",
        
      },
      notification: {
        color: "#FFF",
        fontSize: 16,
        alignSelf: "flex-end",
        fontWeight: "bold",
        margin: 20,
        marginTop: "15%",
        
      },
      homeButtonHeading: {
        
        color: "white",
        position:"absolute",
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
    
        color: "black",
        fontSize: 15,
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: "center",
      },
      flatList: {
      marginTop: 10,
      borderTopWidth:2,
      borderColor:'black'
      
      },
      boxStatistics: {
        borderWidth: 2,
        borderColor: "#27546C",
        alignItems: "center",
        textAlign: "center",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: "#27546C",
        height: 169,
      },
      boxHome: {
        borderWidth: 2,
        borderColor: "#27546C",
        alignItems: "center",
        textAlign: "center",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: "#27546C",
        height: 299,
      },
      boxNews: {
        borderWidth: 2,
        borderColor: "#27546C",
        alignItems: "center",
        textAlign: "center",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: "#27546C",
        height: 120,
      },
    
    
      boxCard:{
        borderWidth: 2,
        borderColor: "white",
        width: 171,
        height: 184,
        alignItems: "center",
        justifyContent:'center',
        textAlign: "center",
        borderRadius:25,
        backgroundColor: "#27546C",
        borderWidth:1,
        borderColor:'gray',
        left: 211,
        top: 10
      },
      map: {
        flex:1,
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
        padding: 10,
        
      },
      countryName: {
          fontSize: 15,
          color:'black',
          fontWeight: 'bold'
      },
      totalCases: {
          fontSize: 16,
          color:'black',
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
      cardsTitle: {
          alignSelf: "center",
          position:"absolute",
          marginTop: 5,
          color: 'black',
          fontWeight: "bold",
          flexShrink: 12,
          fontSize: 16,
          
      },
      titleBigBox: {
        alignSelf: "center",
        position:"absolute",
        marginTop: 5,
        color: '#533219',
        fontWeight: "bold",
        //flexShrink: 12,
        fontSize: 16,
        
    },
      number: {
        
          fontWeight: '500',
          
          justifyContent:'center',
          alignSelf:'center',
          marginTop:15
            
      },
      preventionText:{
        marginTop:5,
        alignSelf:'flex-start',
        padding:10,
        fontWeight:'bold',
        fontSize: 22,
        color: 'black',
      },
      articleText:{
        marginTop:5,
        alignSelf:'flex-start',
        padding:10,
        fontWeight:'bold',
        fontSize: 22,
        color: 'black',
      }

      
      
});

export default stylesCatalog;