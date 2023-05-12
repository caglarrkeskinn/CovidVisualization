import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Cards from "../components/Cards";
import ItemRows from "../components/ItemRows";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

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

  const url = "https://api.covid19api.com/summary";
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();
  const [showMap, setShowMap] = useState(false);

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
    <View style={styles.container}>
      {showMap === true && (
        <View style={{ flex: 1 }}>
          <MapView
            style={styles.map}
            showsUserLocation={true}
            initialRegion={{
              latitude: location ? location.coords.latitude : 41.04624,
              longitude: location ? location.coords.longitude : 29.00536,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {heatmapData1.map((data, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: data.latitude,
                  longitude: data.longitude,
                }}
              />
            ))}
          </MapView>

          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => setShowMap(!showMap)}
          >
            <Text style={styles.mapHeading}>HOME</Text>
          </TouchableOpacity>
        </View>
      )}
      {showMap === false && (
        <>
          <View style={styles.box}>
            <Text style={styles.covidHeading}>COVID 19 DASHBOARD</Text>
          </View>
          <View style={styles.cards}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 150 }}
            >
              <Cards
                title="Total Cases"
                bg="#D93B4A"
                number={data ? data.Global.TotalConfirmed : 0}
              />

              <Cards
                title="Recovered"
                bg="#FFF"
                number={data ? data.Global.TotalRecovered : 0}
              />

              <Cards
                title="Death Reported"
                bg="#FFF"
                number={data ? data.Global.TotalDeaths : 0}
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
              <Text style={styles.casesHeading}>Covid Cases by region</Text>
            </View>
          </View>
          <View style={styles.flatList}>
            <FlatList
              data={data && data.Countries ? data.Countries : 0}
              renderItem={({ item }) => <ItemRows item={item} />}
            />
          </View>
          <TouchableOpacity
            style={styles.mapButton}
            onPress={() => setShowMap(!showMap)}
          >
            <Text style={styles.mapHeading}>MAP</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c2732",
  },
  mapButton: {
    borderRadius: "100%",
    backgroundColor: "#1E90FF",
    position: "absolute",
    top: "5%",
    right: "5%",
  },
  homeButton: {
    borderRadius: "100%",
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
    margin: 30,
    marginTop: "25%",
    padding: 10,
  },
  mapHeading: {
    color: "#FFF",
    fontSize: 14,
    alignSelf: "center",
    fontWeight: "bold",
    padding: 10,
    margin: 10,
  },

  cards: {
    marginTop: -90,
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
    borderColor: "grey",
    alignItems: "center",
    textAlign: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "grey",
    height: 169,
  },

  map: {
    width: "100%",
    height: "100%",
  },
});

export default Home;
