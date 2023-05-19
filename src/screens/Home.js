import React, { useEffect, useState } from "react";
import {
  View,
  Switch,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import stylesCatalog from "../components/stylesCatalog";
import { ScrollView } from "react-native-gesture-handler";
import Cards from "../components/Cards";
import ItemRows from "../components/ItemRows";
import MapView, { Heatmap } from "react-native-maps";
import * as Location from "expo-location";
import SwitchSelector from "react-native-switch-selector";



const Home = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

 

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
for (let i = 0; i < 50; i++) {
  const latOffset = (Math.random() - 0.5) * 0.02;
  const lngOffset = (Math.random() - 0.5) * 0.02;
  
  turkeyCases.push({latitude:centerLat + latOffset, longitude:centerLng + lngOffset});
  
}
console.log(turkeyCases.latitude);

const globalCases = [] ;
globalCases.push({Countries:'Brazil' , n:150020020});
globalCases.push({Countries:'German' , n:24154564});
for (let i = 0; i < 50; i++) {
  const latOffset = (Math.random() - 0.5) * 0.02;
  const lngOffset = (Math.random() - 0.5) * 0.02;
  
  globalCases.push({  latitude:centerLat + latOffset, longitude:centerLng + lngOffset});
  
}



  const heatmapData1 = [];

  const centerLat = 37.78582; //location.coords.latitude;
  const centerLng = -122.40642; //location.coords.longitude;

  for (let i = 0; i < 50; i++) {
    const latOffset = (Math.random() - 0.5) * 0.02;
    const lngOffset = (Math.random() - 0.5) * 0.02;

    const latitude = centerLat + latOffset;
    const longitude = centerLng + lngOffset;

    heatmapData1.push({ latitude, longitude });
  }

  const gradient = {
    colors: ["#FF0000", "#00FF00"], // Renk tonlarını burada değiştirebilirsiniz
    startPoints: [0.2, 1],
    colorMapSize: 256,
  };
  const opacity = 0.5;
  const radius = 50;

  const url = "https://api.covid19api.com/summary";
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();
  const [showMap, setShowMap] = useState(false);
  const [showList,setShowList] = useState(false);
  const [par, setPar] = useState(true);




  useEffect(() => {
    const fetchCovidData = async () => {
      setIsloading(true);
      try {
        const result = await fetch(url);
        const response = await result.json();
        setData(response);
        setIsloading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCovidData();
  }, []);
  
  return (
    <View style={stylesCatalog.container}>

         
       
      {showMap === true && (
        <View style={{ flex: 1 }}>
          <MapView
            style={stylesCatalog.map}
            showsUserLocation={true}
            initialRegion={{
              latitude: location ? location.coords.latitude : 41.04624,
              longitude: location ? location.coords.longitude : 29.00536,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Heatmap
              points={heatmapData1}
              radius={40}
              opacity={1}
              gradient={{
                colors: ["#ff0000", "#00ff00"],
                startPoints: [0, 1],
                colorMapSize: 100,
              }}
            />
          </MapView>

          <TouchableOpacity
            style={stylesCatalog.homeButton}
            onPress={() => setShowMap(!showMap)}
          >
            <Text style={stylesCatalog.mapHeading}>HOME</Text>
          </TouchableOpacity>
        </View>
      )}
      {showMap === false && (
        <>
            
          <View style={stylesCatalog.box}>
            <Text style={stylesCatalog.covidHeading}>COVID 19 DASHBOARD</Text>
            <SwitchSelector
            initial={0}
            onPress={value => setPar(value)}
            textColor= 'black'
            selectedColor='white'
            buttonColor='#35464F'
            borderColor='#35464F'
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
          
          <View style={stylesCatalog.box2}></View> 
          

          <View style={stylesCatalog.cards}>
            <ScrollView
              // horizontal
              //  showsHorizontalScrollIndicator={false}
              style={{ marginTop: -55 }}
            >
               <Cards
                title="Total Cases"
                bg="#D93B4A"
                number={data ? data.Global.TotalConfirmed : 0 }
              /> 

              <Cards
                title="Recovered"
                bg="#FFF"
                number={data ? data.Global.TotalRecovered : 0}
              /> 

              {/* <Cards
                title="Death Reported"
                bg="#FFF"
                number={data ? data.Global.TotalDeaths : 0}
              /> */}
              
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
          <TouchableOpacity
            style={stylesCatalog.mapButton}
            onPress={() => setShowMap(!showMap)}
          >
            <Text style={stylesCatalog.mapHeading}>MAP</Text>
          </TouchableOpacity>

        
        </>
        
      )}
      
    </View>
    
  );
};
//  if (showList === 't') {
//    console.log("turkeylist")
//  } else if (showList === 'g') {
//    console.log("globalList")
//  }

export default Home;
