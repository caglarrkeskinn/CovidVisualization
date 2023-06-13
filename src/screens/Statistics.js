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
import SQLite from "react-native-sqlite-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import supabase from "../lib/supabase";

const Statistics = () => {
  const [casesData, setCasesData] = useState([]);
  const [trcasesData, settrCasesData] = useState([]);

  useEffect(() => {
    getCases();
  }, []);

  useEffect(() => {
    gettrCases();
  }, []);

  async function getCases() {
    try {
      let { data, error, status } = await supabase
        .from("cases")
        .select("Country_Region, Deaths");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setCasesData(data);
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }

  async function gettrCases() {
    try {
      let { data, error, status } = await supabase
        .from("trcases")
        .select("region, trnumber");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        settrCasesData(data);
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }

  const ItemRowsComponent = ({ item }) => {
    return (
      <View style={stylesCatalog.rows}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ marginRight: 100, marginTop: 5 }}>
            <Text style={stylesCatalog.countryName}>
              {item["Country_Region"]}
            </Text>
          </View>
          <View>
            <Text style={stylesCatalog.totalCases}>{item["Deaths"]}</Text>
          </View>
        </View>
      </View>
    );
  };

  const ItemRowsComponentTr = ({ item }) => {
    return (
      <View style={stylesCatalog.rows}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ marginRight: 100, marginTop: 5 }}>
            <Text style={stylesCatalog.countryName}>{item["region"]}</Text>
          </View>
          <View>
            <Text style={stylesCatalog.totalCases}>{item["trnumber"]}</Text>
          </View>
        </View>
      </View>
    );
  };

  const totalCases = [1232132];
  const recovered = [4545];
  const [par, setPar] = useState(true);

  return (
    <View style={stylesCatalog.container}>
      <View style={stylesCatalog.boxStatistics}>
        <Text style={stylesCatalog.covidHeading}>Statistics</Text>
        <SwitchSelector
          initial={0}
          onPress={(value) => setPar(value)}
          textColor="black"
          selectedColor="white"
          buttonColor="#35464F"
          borderColor="white"
          hasPadding
          options={[
            { label: "Turkey", value: true },
            { label: "Global", value: false },
          ]}
          testID="gender-switch-selector"
          accessibilityLabel="gender-switch-selector"
          bold
          style={{ width: 250, marginTop: 10 }}
          height={31}
          fontSize={16}
        />
      </View>

      <View style={stylesCatalog.boxCard}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              marginTop: 5,
              color: "white",
            }}
          >
            Total Cases
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "400",
              marginTop: 15,
              color: "white",
            }}
          >
            {totalCases}
          </Text>
        </View>
        <View>
          <MaterialCommunityIcons
            name="chart-bar"
            marginTop={27}
            color={(color = "white")}
            size={(size = 60)}
          />
        </View>
      </View>

      <View style={stylesCatalog.cards}>
        <ScrollView style={{ marginTop: -55 }}>
          <Cards title="Recovered" bg="#27546C" number={recovered} />
          <Cards title="Death Reported" bg="#27546C" number={recovered} />
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
        {par === true && (
          <FlatList
            data={trcasesData}
            renderItem={({ item }) => <ItemRowsComponentTr item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        {par === false && (
          <FlatList
            data={casesData}
            renderItem={({ item }) => <ItemRowsComponent item={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  );
};

export default Statistics;
