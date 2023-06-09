import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Touchable, TouchableOpacity, View } from "react-native";
import MapView, { Heatmap } from "react-native-maps";

const MapScreen = () => {
  const heatMapData = [];

  const centerLat = 37.78582; //location.coords.latitude;
  const centerLng = -122.40642; //location.coords.longitude;
  for (let i = 0; i < 150; i++) {
    const latOffset = (Math.random() - 0.5) * 0.03;
    const lngOffset = (Math.random() - 0.5) * 0.03;
    const latitude = centerLat + latOffset;
    const longitude = centerLng + lngOffset;
    const weight1 = Math.round(Math.random() * 10);
    const a = Math.round(Math.random() * 10);
    for (let i = 0; i < a; i++) {
      heatMapData.push({
        latitude: latitude,
        longitude: longitude,
        weight: weight1,
      });
    }
  }

  const sanFrancisco = { latitude: 37.774546, longitude: -122.433523 };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        provider={"google"}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={{ flex: 1 }}
        region={{
          latitude: sanFrancisco.latitude,
          longitude: sanFrancisco.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Heatmap
          points={heatMapData}
          opacity={1}
          radius={50}
          gradient={{
            colors: ["#79BC6A", "#BBCF4C", "#EEC20B", "#F29305", "#E50000"],
            startPoints: [0.01, 0.25, 0.5, 0.75, 1],
            colorMapSize: 500,
          }}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
