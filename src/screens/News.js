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




const News = () => {
  return (
    
      <View  style={stylesCatalog.container}>
          <View style={stylesCatalog.boxNews}>
              <Text style={stylesCatalog.covidHeading}>News</Text>
              
              <ScrollView>

              </ScrollView>
              
          </View>

      </View>
  );
}

export default News