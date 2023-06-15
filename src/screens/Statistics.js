import React, { useEffect, useState } from "react";
import {
  View,
  Switch,
  Text,
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import supabase from "../lib/supabase";

const Statistics = () => {
  const [casesData, setCasesData] = useState([]);
  const [trcasesData, settrCasesData] = useState([]);
  const [totalCases, settotalCases] = useState();
  const [trtotalCases, settrtotalCases] = useState();

  useEffect(() => {
    getCases();
  }, []);

  useEffect(() => {
    gettrCases();
  }, []);
  useEffect(() => {
    gettotalCases();
  }, []);
  useEffect(() => {
    gettrtotalCases();
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

  async function gettotalCases() {
    try {
      let { data, error, status } = await supabase
        .from("cases")
        .select("Deaths");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        let total = 0;
        data.forEach((item) => {
          total += item.Deaths;
        });
        settotalCases(total);
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }
  async function gettrtotalCases() {
    try {
      let { data, error, status } = await supabase
        .from("trcases")
        .select("trnumber");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        let total = 0;
        data.forEach((item) => {
          total += item.trnumber;
        });
        settrtotalCases(total);
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }

  const ItemRowsComponent = ({ item }) => {
    return (
      <View style={stylesCatalog.rows}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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

  //const totalCases = [1232132];
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
          style={{ width: 250, marginTop: 5 }}
          height={31}
          fontSize={16}
        />
      </View>

      {
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
              Recovered
            </Text>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "400",
                marginTop: 15,
                color: "white",
              }}
            >
              15678765
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
      }
      {par === true && (
        <View style={stylesCatalog.cards}>
          <ScrollView
            //horizontal
            //showsHorizontalScrollIndicator={false}
            style={{ marginTop: -55 }}
          >
            <Cards title="Total Cases" bg="#27546C" number={trtotalCases} />
            <Cards
              title="Total Deaths"
              bg="#27546C"
              number={(0.35 * trtotalCases).toFixed()}
            />
          </ScrollView>
        </View>
      )}
      {par === false && (
        <View style={stylesCatalog.cards}>
          <ScrollView style={{ marginTop: -55 }}>
            <Cards title="Total Cases" bg="#27546C" number={totalCases} />
            <Cards
              title="Total Deaths"
              bg="#27546C"
              number={(0.35 * totalCases).toFixed()}
            />
          </ScrollView>
        </View>
      )}
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -30,
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
