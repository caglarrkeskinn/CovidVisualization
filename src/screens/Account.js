import { useState, useEffect } from "react";
import supabase from "../lib/supabase";
import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { Session } from "@supabase/supabase-js";
import stylesCatalog from "../components/stylesCatalog";
import { ScrollView } from "react-native-gesture-handler";

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [website, setWebsite] = useState("");
  const [bloodType, setBloodType] = useState("");

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      let { data, error, status } = await supabase
        .from("profiles")
        .select("username, website, bloodType")
        .eq("id", session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setBloodType(data.bloodType);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error("No user on the session!");

      const updates = {
        id: session?.user.id,
        username,
        website,
        bloodType,
        updated_at: new Date(),
      };

      const { error } = await supabase.from("profiles").upsert(updates);

      if (error) {
        throw error;
      }
      Alert.alert("Profile updated successfully!");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <View style={styles.boxLogin}>
        <Text style={stylesCatalog.covidHeading}>Account</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.verticallySpaced, styles.mt20]}>
            <Text style={styles.labelStyle}>Email</Text>
            <TextInput
              label="Email"
              style={styles.inputStyle}
              value={session?.user?.email}
              disabled
            />
          </View>
          <View style={styles.verticallySpaced}>
            <Text style={styles.labelStyle}>User Name</Text>
            <TextInput
              label="Username"
              style={styles.inputStyle}
              value={username || ""}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.verticallySpaced}>
            <Text style={styles.labelStyle}>Website</Text>
            <TextInput
              label="Website"
              style={styles.inputStyle}
              value={website || ""}
              onChangeText={(text) => setWebsite(text)}
            />
          </View>
          <View style={styles.verticallySpaced}>
            <Text style={styles.labelStyle}>Blood Type</Text>
            <TextInput
              label="Blood Type"
              style={styles.inputStyle}
              value={bloodType || ""}
              onChangeText={(text) => setBloodType(text)}
            />
          </View>

          <View style={[styles.verticallySpaced, styles.mt20]}>
            <TouchableOpacity
              style={styles.button}
              disabled={loading}
              onPress={() => updateProfile()}
              title={loading ? "Loading ..." : "Update"}
            >
              <Text style={{ color: "white" }}>
                {loading ? "Loading ..." : "Update"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.verticallySpaced}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => supabase.auth.signOut()}
            >
              <Text style={{ color: "white" }}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  boxLogin: {
    borderWidth: 2,
    borderColor: "#27546C",
    alignItems: "center",
    textAlign: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#27546C",
    height: 150,
  },
  // covidHeading: {
  //   color: "orange",
  //   fontSize: 25,
  //   alignSelf: "center",
  //   fontWeight: "bold",
  //   margin: 25,
  //   marginTop: "15%",
  // },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: "5%",
  },
  inputStyle: {
    alignSelf: "center",
    padding: 13,
    borderWidth: 4,
    borderColor: "#27546C",
    borderRadius: 30,
    width: "100%",
  },
  labelStyle: {
    color: "#27546C",
    fontSize: 16,
    fontWeight: "700",
    padding: 10,
  },
  button: {
    backgroundColor: "#27546C",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    width: 300,
  },
});
