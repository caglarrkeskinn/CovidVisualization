import {View,Text, } from "react-native";
import MapView, { Heatmap } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import stylesCatalog from "../components/stylesCatalog";





const Map = () => {
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

      const centerLat = 37.78582//location.coords.latitude;
      const centerLng =  -122.40642//location.coords.longitude;
    
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
      return (
    
            <View style={{ flex: 1 }}>
              <MapView
                provider={"google"}
                style={stylesCatalog.map}
                showsUserLocation={true}
                initialRegion={{
                  latitude: location ? location.coords.latitude : 37.78582,
                  longitude: location ? location.coords.longitude : -122.40642,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Heatmap
                      points={heatmapData1}
                      radius={25}
                      gradient={
                        Platform.OS === "android"
                          ? undefined
                          : {
                              // #00FF0011 = lime with a bit of alpha
                              colors: ["transparent", "#00FF0011", "lime", "yellow", "red"],
                              startPoints: [0, 0.000001, 0.0001, 0.0003, 0.0006],
                              colorMapSize: 131072,
                            }
                      }
                />
              </MapView>
              </View>
              );
};

export default Map ;