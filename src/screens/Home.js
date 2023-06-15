import React, { useEffect, useState } from "react";
import {
  View,
  Linking,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Image,
  Dimensions,
} from "react-native";
import stylesCatalog from "../components/stylesCatalog";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native-gesture-handler";
import { CardTitle, CardImage, CardCover } from "react-native-cards";
import { Card } from "react-native-paper";
import supabase from "../lib/supabase";
import { PieChart } from "react-native-chart-kit";

const handlePhoneCall = () => {
  const phoneNumber = "911";

  Linking.openURL(`tel:${phoneNumber}`);
};

const Home = () => {
  const forms = [
    {
      url: "https://forms.gle/PpLn3uKib7SSf3gn9",
    },
  ];
  const handlePress = async () => {
    const url = forms[0].url;
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    }
  };

  const [gender, setGender] = useState([
    {
      name: "Woman",
      population: 0,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "Man",
      population: 0,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
  ]);
  useEffect(() => {
    getSurveys();
  }, []);

  async function getSurveys() {
    try {
      let { data, error, status } = await supabase
        .from("surveys")
        .select("Cinsiyetiniz");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        let updatedGender = [
          {
            name: "Woman",
            population: 0,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 70,
          },
          {
            name: "Man",
            population: 0,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ];
        data.forEach((item) => {
          if (item.Cinsiyetiniz === "Kadın") {
            updatedGender.find(
              (gender) => gender.name === "Woman"
            ).population += 1;
          } else if (item.Cinsiyetiniz === "Erkek") {
            updatedGender.find(
              (gender) => gender.name === "Man"
            ).population += 1;
          }
        });

        setGender(updatedGender);
        updatedGender = [
          {
            name: "Woman",
            population: 0,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 18,
          },
          {
            name: "Man",
            population: 0,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ];
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }
  const [age, setAge] = useState([
    {
      name: "Under 18",
      population: 0,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "18 - 30",
      population: 0,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "30 - 45",
      population: 0,
      color: "tomato",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "45 - 64",
      population: 0,
      color: "rgba(125, 149, 222, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "65+",
      population: 0,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
  ]);
  useEffect(() => {
    getAge();
  }, []);

  async function getAge() {
    try {
      let { data, error, status } = await supabase
        .from("surveys")
        .select("YasAralıgı");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        let updatedAge = [
          {
            name: "Under 18",
            population: 0,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "18 - 30",
            population: 0,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "30 - 45",
            population: 0,
            color: "tomato",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "45 - 64",
            population: 0,
            color: "rgba(125, 149, 222, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "65+",
            population: 0,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
        ];
        data.forEach((item) => {
          if (item.YasAralıgı === "18 den küçük") {
            updatedAge.find((age) => age.name === "Under 18").population += 1;
          } else if (item.YasAralıgı === "18 - 30") {
            updatedAge.find((age) => age.name === "18 - 30").population += 1;
          } else if (item.YasAralıgı === "30 - 45") {
            updatedAge.find((age) => age.name === "30 - 45").population += 1;
          } else if (item.YasAralıgı === "45 - 64") {
            updatedAge.find((age) => age.name === "65+").population += 1;
          }
        });

        setAge(updatedAge);
        updatedAge = [
          {
            name: "Under 18",
            population: 0,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "18 - 30",
            population: 0,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "30 - 45",
            population: 0,
            color: "tomato",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "45 - 64",
            population: 0,
            color: "rgba(125, 149, 222, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "65+",
            population: 0,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
        ];
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }
  const [blood, setBlood] = useState([
    {
      name: "ARh+",
      population: 0,
      color: "blue",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "ARh-",
      population: 0,
      color: "tomato",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "BRh+",
      population: 0,
      color: "orange",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "BRh-",
      population: 0,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "0Rh+",
      population: 0,
      color: "purple",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "0Rh-",
      population: 0,
      color: "aqua",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "ABRh+",
      population: 0,
      color: "pink",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "ABRh-",
      population: 0,
      color: "black",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
  ]);
  useEffect(() => {
    getBlood();
  }, []);

  async function getBlood() {
    try {
      let { data, error, status } = await supabase
        .from("surveys")
        .select("KanGrubu");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        let updatedBlood = [
          {
            name: "ARh+",
            population: 0,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "ARh-",
            population: 0,
            color: "tomato",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "BRh+",
            population: 0,
            color: "orange",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "BRh-",
            population: 0,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "0Rh+",
            population: 0,
            color: "purple",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "0Rh-",
            population: 0,
            color: "aqua",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "ABRh+",
            population: 0,
            color: "pink",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "ABRh-",
            population: 0,
            color: "black",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
        ];
        data.forEach((item) => {
          if (item.KanGrubu === "ARh+") {
            updatedBlood.find((blood) => blood.name === "ARh+").population += 1;
          } else if (item.KanGrubu === "ARh-") {
            updatedBlood.find((blood) => blood.name === "ARh-").population += 1;
          } else if (item.KanGrubu === "BRh+") {
            updatedBlood.find((blood) => blood.name === "BRh+").population += 1;
          } else if (item.KanGrubu === "BRh-") {
            updatedBlood.find((blood) => blood.name === "BRh-").population += 1;
          } else if (item.KanGrubu === "0Rh+") {
            updatedBlood.find((blood) => blood.name === "0Rh+").population += 1;
          } else if (item.KanGrubu === "0Rh-") {
            updatedBlood.find((blood) => blood.name === "0Rh-").population += 1;
          } else if (item.KanGrubu === "ABRh+") {
            updatedBlood.find(
              (blood) => blood.name === "ABRh+"
            ).population += 1;
          } else if (item.KanGrubu === "ABRh-") {
            updatedBlood.find(
              (blood) => blood.name === "ABRh-"
            ).population += 1;
          }
        });

        setBlood(updatedBlood);
        updatedBlood = [
          {
            name: "ARh+",
            population: 0,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "ARh-",
            population: 0,
            color: "tomato",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "BRh+",
            population: 0,
            color: "orange",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "BRh-",
            population: 0,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "0Rh+",
            population: 0,
            color: "purple",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "0Rh-",
            population: 0,
            color: "aqua",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "ABRh+",
            population: 0,
            color: "pink",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "ABRh-",
            population: 0,
            color: "black",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
        ];
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }
  const [had, setHad] = useState([
    {
      name: "Yes",
      population: 0,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "No",
      population: 0,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
  ]);
  useEffect(() => {
    getHad();
  }, []);

  async function getHad() {
    try {
      let { data, error, status } = await supabase
        .from("surveys")
        .select("Covidgecirdinizmi");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        let updatedHad = [
          {
            name: "Yes",
            population: 0,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 70,
          },
          {
            name: "No",
            population: 0,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ];
        data.forEach((item) => {
          if (item.Covidgecirdinizmi === "Evet") {
            updatedHad.find((had) => had.name === "Yes").population += 1;
          } else if (item.Covidgecirdinizmi === "Hayır") {
            updatedHad.find((had) => had.name === "No").population += 1;
          }
        });

        setHad(updatedHad);
        updatedHad = [
          {
            name: "Yes",
            population: 0,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "No",
            population: 0,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ];
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }
  const [severity, setSeverity] = useState([
    {
      name: "Severe",
      population: 0,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "Moderate",
      population: 0,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
  ]);
  useEffect(() => {
    getSeverity();
  }, []);

  async function getSeverity() {
    try {
      let { data, error, status } = await supabase
        .from("surveys")
        .select("Covidinasilgecirdiniz");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        let updatedSeverity = [
          {
            name: "Severe",
            population: 0,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 70,
          },
          {
            name: "Moderate",
            population: 0,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ];
        data.forEach((item) => {
          if (item.Covidinasilgecirdiniz === "Ağır") {
            updatedSeverity.find(
              (severity) => severity.name === "Severe"
            ).population += 1;
          } else if (item.Covidinasilgecirdiniz === "Hafif") {
            updatedSeverity.find(
              (severity) => severity.name === "Moderate"
            ).population += 1;
          }
        });

        setSeverity(updatedSeverity);
        updatedSeverity = [
          {
            name: "Severe",
            population: 0,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Moderate",
            population: 0,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ];
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }

  const [vaccine, setVaccine] = useState([
    {
      name: "Yes",
      population: 0,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "No",
      population: 0,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
  ]);
  useEffect(() => {
    getVaccine();
  }, []);

  async function getVaccine() {
    try {
      let { data, error, status } = await supabase
        .from("surveys")
        .select("Asi");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        let updatedVaccine = [
          {
            name: "Yes",
            population: 0,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 70,
          },
          {
            name: "No",
            population: 0,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ];
        data.forEach((item) => {
          if (item.Asi === "Evet") {
            updatedVaccine.find(
              (vaccine) => vaccine.name === "Yes"
            ).population += 1;
          } else if (item.Asi === "Hayır") {
            updatedVaccine.find(
              (vaccine) => vaccine.name === "No"
            ).population += 1;
          }
        });

        setVaccine(updatedVaccine);
        updatedVaccine = [
          {
            name: "Yes",
            population: 0,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "No",
            population: 0,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ];
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }
  const [turn, setTurn] = useState([
    {
      name: "7",
      population: 0,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "14",
      population: 0,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "14+",
      population: 0,
      color: "black",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
  ]);
  useEffect(() => {
    getTurn();
  }, []);

  async function getTurn() {
    try {
      let { data, error, status } = await supabase
        .from("surveys")
        .select("Testnegatif");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        let updatedTurn = [
          {
            name: "7",
            population: 0,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 70,
          },
          {
            name: "14",
            population: 0,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "14+",
            population: 0,
            color: "black",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ];
        data.forEach((item) => {
          if (item.Testnegatif === "7") {
            updatedTurn.find((turn) => turn.name === "7").population += 1;
          } else if (item.Testnegatif === "14") {
            updatedTurn.find((turn) => turn.name === "14").population += 1;
          } else if (item.Testnegatif === "14+") {
            updatedTurn.find((turn) => turn.name === "14+").population += 1;
          }
        });

        setTurn(updatedTurn);
        updatedTurn = [
          {
            name: "7",
            population: 0,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 70,
          },
          {
            name: "14",
            population: 0,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "14+",
            population: 0,
            color: "black",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ];
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }

  const [dose, setDose] = useState([
    {
      name: "1",
      population: 0,
      color: "blue",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "2",
      population: 0,
      color: "tomato",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "3",
      population: 0,
      color: "orange",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "4 +",
      population: 0,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
  ]);
  useEffect(() => {
    getDoses();
  }, []);

  async function getDoses() {
    try {
      let { data, error, status } = await supabase
        .from("surveys")
        .select("vaccine_doses");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        let updatedDoses = [
          {
            name: "1",
            population: 0,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "2",
            population: 0,
            color: "tomato",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "3",
            population: 0,
            color: "orange",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "4 +",
            population: 0,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
        ];
        data.forEach((item) => {
          if (item.vaccine_doses === "1") {
            updatedDoses.find((dose) => dose.name === "1").population += 1;
          } else if (item.vaccine_doses === "2") {
            updatedDoses.find((dose) => dose.name === "2").population += 1;
          } else if (item.vaccine_doses === "3") {
            updatedDoses.find((dose) => dose.name === "3").population += 1;
          } else if (item.vaccine_doses === "4 +") {
            updatedDoses.find((dose) => dose.name === "4 +").population += 1;
          }
        });

        setDose(updatedDoses);
        updatedDoses = [
          {
            name: "1",
            population: 0,
            color: "blue",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "2",
            population: 0,
            color: "tomato",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "3",
            population: 0,
            color: "orange",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
          {
            name: "4 +",
            population: 0,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 30,
          },
        ];
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }
  const [vaccEffect, setVaccEffect] = useState([
    {
      name: "Yes",
      population: 0,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
    {
      name: "No",
      population: 0,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      padding: 30,
    },
  ]);
  useEffect(() => {
    getVaccEffect();
  }, []);

  async function getVaccEffect() {
    try {
      let { data, error, status } = await supabase
        .from("surveys")
        .select("vacc_effect");

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        let updatedVaccEffect = [
          {
            name: "Yes",
            population: 0,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            padding: 70,
          },
          {
            name: "No",
            population: 0,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ];
        data.forEach((item) => {
          if (item.vacc_effect === "Evet") {
            updatedVaccEffect.find(
              (vaccEffect) => vaccEffect.name === "Yes"
            ).population += 1;
          } else if (item.vacc_effect === "Hayır") {
            updatedVaccEffect.find(
              (vaccEffect) => vaccEffect.name === "No"
            ).population += 1;
          }
        });

        setVaccEffect(updatedVaccEffect);
        updatedVaccEffect = [
          {
            name: "Yes",
            population: 0,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "No",
            population: 0,
            color: "green",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ];
      }
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  }

  const [showInfo, setShowInfo] = useState(false);

  const handleInfoPress = () => {
    setShowInfo(true);
  };

  const handleOkayPress = () => {
    setShowInfo(false);
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    backgroundColor: "transparent",
  };

  return (
    <View style={stylesCatalog.container}>
      <View style={stylesCatalog.boxHome}>
        <Text style={stylesCatalog.covidHeading}>Covid-19</Text>
        {/* <TouchableOpacity>
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
        </TouchableOpacity> */}
        <TouchableOpacity onPress={handleInfoPress}>
          <MaterialCommunityIcons
            name="map-marker-question-outline"
            top={"-150%"}
            left={"-45%"}
            color={(color = "white")}
            size={(size = 25)}
          />
          <Text
            style={{
              top: "-150%",
              left: "-45%",
              fontSize: 12,
              fontWeight: "400",
              color: "white",
            }}
          >
            Help
          </Text>
          <Modal visible={showInfo} transparent>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 15,
                  width: "80%",
                }}
              >
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}
                >
                  Help
                </Text>
                <Text style={{ marginBottom: 10 }}>
                  For further information, you can visit the Ministry of Health
                  website.
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    Linking.openURL(
                      "https://www.who.int/health-topics/coronavirus#tab=tab_1"
                    )
                  }
                >
                  <Text
                    style={{
                      color: "#0a119d",
                      textDecorationLine: "underline",
                      alignSelf: "center",
                    }}
                  >
                    www.who.int
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleOkayPress}
                  style={{ alignSelf: "flex-end" }}
                >
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "bold",
                      color: "#0a119d",
                    }}
                  >
                    OK
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            marginTop: "-13%",
            right: "20%",
            color: "white",
          }}
        >
          {" "}
          Are you feeling sick?{" "}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "400",
            padding: 4,
            left: "0%",
            color: "white",
          }}
        >
          If you feel sick with any of covid-19 symptoms please {"\n"}call or
          message us immediately for help.
        </Text>
        <TouchableOpacity
          style={stylesCatalog.homeButton}
          onPress={handlePhoneCall}
        >
          <Text style={stylesCatalog.homeButtonHeading}>Call 911</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ marginTop: 0, overflow: "scroll"}}>
        <Text style={stylesCatalog.preventionText}>Prevention</Text>
        <View style={stylesCatalog.col}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={stylesCatalog.HomeContainer}>
              <View style={stylesCatalog.Homecard}>
                <Image
                  source={require("../Images/prevention-mask.png")}
                  style={stylesCatalog.Homeimage}
                />
                <Text style={stylesCatalog.Hometext}>Use Mask</Text>
              </View>
              <View style={stylesCatalog.Homecard}>
                <Image
                  source={require("../Images/prevention-wash.png")}
                  style={stylesCatalog.Homeimage}
                />
                <Text style={stylesCatalog.Hometext}>Wash Hands</Text>
              </View>
              <View style={stylesCatalog.Homecard}>
                <Image
                  source={require("../Images/prevention-contact.jpg")}
                  style={stylesCatalog.Homeimage2}
                />
                <Text style={stylesCatalog.Hometext}>Avoid Close Contacts</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <Text style={stylesCatalog.articleText}>Surveys</Text>
        <View style={stylesCatalog.col}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Title title="Gender" />
              <PieChart
                data={gender}
                width={Dimensions.get("window").width - 46}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="10"
                style={{ borderTopWidth: 1, borderTopColor: "gray" }}
              />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Title title="Age" />
              <PieChart
                data={age}
                width={Dimensions.get("window").width - 46}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="10"
                style={{ borderTopWidth: 1, borderTopColor: "gray" }}
              />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Title title="Blood Type" />
              <PieChart
                data={blood}
                width={Dimensions.get("window").width - 46}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="10"
                style={{ borderTopWidth: 1, borderTopColor: "gray" }}
              />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Title title="Had Covid before" />
              <PieChart
                data={had}
                width={Dimensions.get("window").width - 46}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="10"
                style={{ borderTopWidth: 1, borderTopColor: "gray" }}
              />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Title title="Severity" />
              <PieChart
                data={severity}
                width={Dimensions.get("window").width - 46}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="10"
                style={{ borderTopWidth: 1, borderTopColor: "gray" }}
              />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Title title="Covid test turn negative (days)" />
              <PieChart
                data={turn}
                width={Dimensions.get("window").width - 46}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="10"
                style={{ borderTopWidth: 1, borderTopColor: "gray" }}
              />
            </Card>
          </ScrollView>
        </View>
        <View style={stylesCatalog.col}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Title title="Vaccinated" />
              <PieChart
                data={vaccine}
                width={Dimensions.get("window").width - 46}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="10"
                style={{ borderTopWidth: 1, borderTopColor: "gray" }}
              />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Title title="Vaccine dose" />
              <PieChart
                data={dose}
                width={Dimensions.get("window").width - 46}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="10"
                style={{ borderTopWidth: 1, borderTopColor: "gray" }}
              />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Title title="Vaccine side effect" />
              <PieChart
                data={vaccEffect}
                width={Dimensions.get("window").width - 46}
                height={220}
                chartConfig={chartConfig}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="10"
                style={{ borderTopWidth: 1, borderTopColor: "gray" }}
              />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require("../Images/survey/vaccinetype.png")}
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
                source={require("../Images/survey/symptoms.png")}
                style={{ height: 230, width: 520 }}
              />
              <Card.Title title="Symptoms" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require("../Images/survey/sideeffect.png")}
                style={{ height: 230, width: 600 }}
              />
              <Card.Title title="Side Effects" />
            </Card>
            <Card style={stylesCatalog.cardStyle}>
              <Card.Cover
                source={require("../Images/survey/precaution.png")}
                style={{ height: 230, width: 680 }}
              />
              <Card.Title title="Precautions" />
            </Card>
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: -35,
            marginBottom: 10,
          }}
        >
          <ScrollView>
            <TouchableOpacity
              style={{ width: 120, alignSelf: "center", borderRadius: 35 }}
              onPress={handlePress}
            >
              <Card
                style={{
                  width: 120,
                  height: 40,
                  alignSelf: "center",
                  borderRadius: 35,
                  marginTop: "20%",
                  borderColor: "gray",
                  padding: 10,
                  backgroundColor: "#27546C",
                  borderRightWidth: 2,
                  borderLeftWidth: 2,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    //textDecorationLine: "underline",
                  }}
                >
                  Go to Survey
                </Text>
              </Card>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};


export default Home;
