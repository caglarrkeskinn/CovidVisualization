import React, { useEffect, useState } from "react";
import {
  View,
  Switch,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import stylesCatalog from "../components/stylesCatalog";
import { ScrollView } from "react-native-gesture-handler";
import Cards from "../components/Cards";
import ItemRows from "../components/ItemRows";
import MapView, { Heatmap } from "react-native-maps";
import * as Location from "expo-location";
import SwitchSelector from "react-native-switch-selector";
import  SQLite  from "react-native-sqlite-storage";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 



const Statistics = () => {

// Flatlist data 
const ItemRows = ({ item }) => {
  return (
      <View style={stylesCatalog.rows}>
          <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
              
              <View style={{ marginRight: 100, marginTop: 5 }}>
                  <Text style={stylesCatalog.countryName}>{item.Countries}</Text>
              </View>
              <View>
                  <Text style={stylesCatalog.totalCases}>{item.n}</Text>
              </View>
          </View>
      </View>
  );
}
const turkeyCases = [] ;
 turkeyCases.push({Countries:'Amasya' , n:1500});
 turkeyCases.push({Countries:'Bursa' , n:2415});



const globalCases = [] ;
globalCases.push({Countries:'Brazil' , n:150020020});
globalCases.push({Countries:'German' , n:24154564});

const totalCases = [] ;
totalCases.push(1232132);
const recovered = [] ;
recovered.push(4545);
const [par, setPar] = useState(true);

 
  return (
    <View style={stylesCatalog.container}>
  
          <View style={stylesCatalog.boxStatistics}>
            <Text style={stylesCatalog.covidHeading}>Statistics</Text>
                <SwitchSelector
                initial={0}
                onPress={value => setPar(value)}
                textColor= 'black'
                selectedColor='white'
                buttonColor='#35464F'
                borderColor='white'
                hasPadding
                options={[
                  { label: "Turkey", value: true },
                  { label: "Global", value: false} 
                ]}
                testID="gender-switch-selector"
                accessibilityLabel="gender-switch-selector"
                bold
                style={{width:250 , marginTop:10}}
                height={31}
                fontSize={16}
                
                
              />
          </View>
          
          <View style={stylesCatalog.boxCard}>
                <View style={{alignItems:'center'}}> 
                
                  <Text style={{ fontSize:22,fontWeight: "600",marginTop:5,color: 'white',}}>Total Cases</Text>
                 
                  <Text style={{ fontSize:20,fontWeight: "400",marginTop:15,color: 'white'}}>{totalCases}</Text>
                  
                </View>
                <View>
                <MaterialCommunityIcons name="chart-bar"   marginTop={27} color={color='white'} size={size=60 }/>
                </View>

            </View> 
          

          <View style={stylesCatalog.cards}>
            <ScrollView
              // horizontal
              //  showsHorizontalScrollIndicator={false}
              style={{ marginTop: -55 }}
            >
               {/* <Cards  
                
                title="Total Cases"
                bg="#db3939"
                number={totalCases}
              />  */}

              <Cards
              

                title="Recovered"
                bg="#27546C"
                number={recovered}
              
              /> 

              <Cards
                title="Death Reported"
                bg="#27546C"
                number={recovered}
              /> 
              
            </ScrollView>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={stylesCatalog.casesHeading}>Covid Cases by region</Text>
            </View>
          </View>
          
          <View style={stylesCatalog.flatList}>
          {par === true &&(
          <FlatList
            data={turkeyCases}
            renderItem={({ item }) => <ItemRows item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />)}
          {par === false &&(
          <FlatList
            data={globalCases}
            renderItem={({ item }) => <ItemRows item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />)}
          </View>
          
  
    </View>
    
  );
};

export default Statistics;
