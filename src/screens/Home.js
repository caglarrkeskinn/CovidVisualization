import React, { useEffect, useState } from "react";
import { View, Linking, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import stylesCatalog from "../components/stylesCatalog";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import { CardTitle, CardImage, CardCover } from "react-native-cards";
import { Card } from "react-native-paper";


const handlePhoneCall = () => {
  const phoneNumber = "911"; 

  Linking.openURL(`tel:${phoneNumber}`);
};

const Home = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleInfoPress = () => {
    setShowInfo(true);
  };

  const handleOkayPress = () => {
    setShowInfo(false);
  };
  return (
    <View style={stylesCatalog.container}>
      <View style={stylesCatalog.boxHome}>
        <Text style={stylesCatalog.covidHeading}>Covid-19</Text>
        <TouchableOpacity > 
          <MaterialCommunityIcons
            name="account-outline"
            top={"-100%"}
            left={"45%"}
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
            Profile
          </Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInfoPress}>
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
          <Modal visible={showInfo} transparent>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 15, width: '80%' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>
                  Help
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  For further information, you can visit the Ministry of Health website.
                </Text>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.who.int/health-topics/coronavirus#tab=tab_1')}>
                  <Text style={{ color: '#0a119d', textDecorationLine: 'underline', alignSelf:'center'}}>
                    www.who.int
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOkayPress} style={{ alignSelf: 'flex-end' }}>
                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#0a119d' }}>
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
                source={require('../Images/prevention-mask.png')}
                style={stylesCatalog.cardImage}
              />
              <Card.Title title="Use Mask" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/prevention-wash.png')}
                style={stylesCatalog.cardImage}
              />
              <Card.Title title="Wash Your Hand" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/prevention-close.png')}
                style={stylesCatalog.cardImage}
              />
              <Card.Title title="Avoid Close Contacts" />
            </Card>
          </ScrollView>
        </View>
        <Text style={stylesCatalog.articleText}>Surveys</Text>
        <View style={stylesCatalog.col}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/gender.png')}
                style={{ height: 230, width: 270 }}
              />
              <Card.Title title="Gender" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/age.png')}
                style={{ height: 230, width: 290 }}
              />
              <Card.Title title="Age" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/bloodtype.png')}
                style={{ height: 230, width: 290 }}
              />
              <Card.Title title="Blood Type" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/had-covid.png')}
                style={{ height: 230, width: 290 }}
              />
              <Card.Title title="Had Covid before" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/severity.png')}
                style={{ height: 230, width: 290 }}
              />
              <Card.Title title="Severity" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/negativetest.png')}
                style={{ height: 230, width: 290 }}
              />
              <Card.Title title="Covid test turn negative (days)" />
            </Card>
          </ScrollView>
        </View>
        <View style={stylesCatalog.col}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/vaccine.png')}
                style={{ height: 230, width: 290 }}
              />
              <Card.Title title="Vaccinated" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/vaccinecount.png')}
                style={{ height: 230, width: 290 }}
              />
              <Card.Title title="Vaccine dose" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/vaccinesideeffect.png')}
                style={{ height: 230, width: 290 }}
              />
              <Card.Title title="Vaccine side effect" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/vaccinetype.png')}
                style={{ height: 230, width: 520 }}
              />
              <Card.Title title="Vaccine type rates" />
            </Card>
          </ScrollView>
        </View>
        <View style={stylesCatalog.col}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/symptoms.png')}
                style={{ height: 230, width: 520 }}
              />
              <Card.Title title="Symptoms" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/sideeffect.png')}
                style={{ height: 230, width: 600 }}
              />
              <Card.Title title="Side Effects" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require('../Images/survey/precaution.png')}
                style={{ height: 230, width: 680 }}
              />
              <Card.Title title="Precautions" />
            </Card>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;