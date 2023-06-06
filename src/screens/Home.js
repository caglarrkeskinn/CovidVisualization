import React, { useEffect, useState } from "react";
import { View, Linking, Text, FlatList, TouchableOpacity } from "react-native";
import stylesCatalog from "../components/stylesCatalog";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import { CardTitle, CardImage, CardCover } from "react-native-cards";
import { Card } from "react-native-paper";


const handlePhoneCall = () => {
  const phoneNumber = "911"; // Replace with the desired phone number

  Linking.openURL(`tel:${phoneNumber}`);
};

const Home = () => {
  return (
    <View style={stylesCatalog.container}>
      <View style={stylesCatalog.boxHome}>
        <Text style={stylesCatalog.covidHeading}>Covid-19</Text>
        <TouchableOpacity > 
          <MaterialCommunityIcons
            name="cog-outline"
            top={"-100%"}
            left={"47%"}
            color={(color = "white")}
            size={(size = 25)}
          />
          <Text
            style={{
              top: "-100%",
              left: "44%",
              fontSize: 12,
              fontWeight: "400",
              color: "white",
            }}
          >
            Settings
          </Text> 
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="map-marker-question-outline"
            top={"-200%"}
            left={"-45%"}
            color={(color = "white")}
            size={(size = 25)}
          />
          <Text
            style={{
              top: "-200%",
              left: "-45%",
              fontSize: 12,
              fontWeight: "400",
              color: "white",
            }}
          >
            Help
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginTop: "-10%",
            right: "20%",
            color: "white",
          }}
        >
          {" "}
          Are you feeling sick?{" "}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            padding: 4,
            left: "0%",
            color: "white",
          }}
        >
          If you feel sick with any of covid-19 symptoms please {"\n"}call or message
          us immediately for help.
        </Text>
        <TouchableOpacity
          style={stylesCatalog.homeButton}
          onPress={handlePhoneCall}
        >
          <Text style={stylesCatalog.homeButtonHeading}>Call 911</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={stylesCatalog.preventionText}>Prevention</Text>
        <View style={stylesCatalog.col}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={stylesCatalog.cardImage}
              />
              <Card.Title title="Use Mask" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={stylesCatalog.cardImage}
              />
              <Card.Title title="Wash Your Hand" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={stylesCatalog.cardImage}
              />
              <Card.Title title="Avoid Close Contacts" />
               
            </Card>
          </ScrollView>
        </View>
        <Text style={stylesCatalog.articleText}>Article</Text>
        <View style={stylesCatalog.col}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={{ height: 150, width: 150 }}
              />
              <Card.Title title="Card Title" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={{ height: 150, width: 150 }}
              />
              <Card.Title title="Card Title" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={{ uri: "https://picsum.photos/700" }}
                style={{ height: 150, width: 150 }}
              />
              <Card.Title title="Card Title" />
            </Card>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;