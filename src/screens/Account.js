import { useState, useEffect } from "react";
import supabase from "../lib/supabase";
import { View, Alert, TextInput, Text, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";
import { Session } from "@supabase/supabase-js";
import stylesCatalog from "../components/stylesCatalog";
import { ScrollView } from "react-native-gesture-handler";

export default function Account({ session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

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
      <View style={stylesCatalog.boxLogin}>
        <Text style={stylesCatalog.covidHeading}>Account</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={stylesCatalog.AcContainer}>
          <View
            style={[stylesCatalog.AcverticallySpaced, stylesCatalog.Acmt20]}
          >
            <Text style={stylesCatalog.labelStyle}>Email</Text>
            <TextInput
              label="Email"
              style={stylesCatalog.inputStyleEmail}
              value={session?.user?.email}
              disabled
            />
          </View>
          <View style={stylesCatalog.AcverticallySpaced}>
            <Text style={stylesCatalog.labelStyle}>User Name</Text>
            <TextInput
              label="Username"
              style={stylesCatalog.inputStyle}
              value={username || ""}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          <View
            style={[stylesCatalog.AcverticallySpaced, stylesCatalog.Acmt20]}
          >
            <TouchableOpacity
              style={stylesCatalog.AcButton}
              disabled={loading}
              onPress={() => updateProfile()}
              title={loading ? "Loading ..." : "Update"}
            >
              <Text style={{ color: "white" }}>
                {loading ? "Loading ..." : "Update"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={stylesCatalog.AcverticallySpaced}>
            <TouchableOpacity
              style={stylesCatalog.AcButton}
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
