import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import stylesCatalog from "../components/stylesCatalog";
// Haber başlıkları ve içerikleri için örnek veri
const newsData = [
  {
    id: 1,
    title:
      "Long Covid has an ‘underappreciated’ role in labor shortage, study finds",
    url: "https://www.cnbc.com/2023/01/30/long-covid-has-underappreciated-role-in-labor-gap-study.html",
    imageUrl: require("../Images/news/first_news.png"),
  },
  {
    id: 2,
    title:
      "FDA authorizes emergency use for Novavax Covid-19 vaccine for ages 12 to 17",
    url: "https://www.cnbc.com/2022/08/20/fda-authorizes-emergency-use-for-novavax-covid-19-vaccine-for-ages-12-and-17-.html",
    imageUrl: require("../Images/news/second_news.png"),
  },
  {
    id: 3,
    title:
      "WHO downgrades COVID-19, says it is no longer public health emergency",
    url: "https://abcnews.go.com/Health/downgrades-covid-19-longer-public-health-emergency/story?id=99103891",
    imageUrl: require("../Images/news/third_news.png"),
  },
  {
    id: 4,
    title: "Comparing the COVID-19 Vaccines: How Are They Different?",
    url: "https://www.yalemedicine.org/news/covid-19-vaccine-comparison",
    imageUrl: require("../Images/news/fourth_news.png"),
  },
  {
    id: 5,
    title:
      "Researchers are studying long COVID in kids -- here is what they know so far",
    url: "https://abcnews.go.com/Health/researchers-studying-long-covid-kids/story?id=85434559",
    imageUrl: require("../Images/news/fifth_news.png"),
  },
  // Diğer haberler...
];

const News = () => {
  // Habere tıklandığında gerçekleşecek
  const handleNewsPress = (url) => {
    Linking.openURL(url).catch(() => {
      console.log("URL'yi açma hatasi:", url);
    });
  };

  return (
    <View style={stylesCatalog.newsContainer}>
      <View style={stylesCatalog.boxNews}>
        <Text style={stylesCatalog.covidHeading}>News</Text>
      </View>
      <View style={stylesCatalog.newsScrollContainer}>
        <ScrollView>
          {newsData.map((news) => (
            <TouchableOpacity
              key={news.id}
              onPress={() => handleNewsPress(news.url)}
            >
              <View style={stylesCatalog.newsContainer}>
                <Image source={news.imageUrl} style={stylesCatalog.newsImage} />
                <Text style={stylesCatalog.newsTitle}>{news.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default News;
