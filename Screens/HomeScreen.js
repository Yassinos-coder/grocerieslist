import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FooterComponent from "../Components/FooterComponent";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/icon.png")} />
      <Text style={styles.welcomeText}>
        Welcome to GroceriesList{" "}
        <Text style={{ fontWeight: "900" }}>
          Your Smart Shopping Companion!
        </Text>
      </Text>
      <Pressable
        style={({ pressed }) => [styles.pressable, pressed && { opacity: 0.5 }]}
        onPress={() => handleNavigation("Create List")}
      >
        <View style={styles.buttonStyling}>
          <AntDesign name="pluscircle" size={20} color="black" />
          <Text style={styles.textButtonStyling}>Create List</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.pressable, pressed && { opacity: 0.5 }]}
        onPress={() => handleNavigation("Grocery List")}
      >
        <View style={styles.buttonStyling}>
          <Entypo name="shopping-cart" size={20} color="black" />
          <Text style={styles.textButtonStyling}>Grocery List</Text>
        </View>
      </Pressable>
      <Pressable
        style={({ pressed }) => [styles.pressable, pressed && { opacity: 0.5 }]}
        onPress={() => handleNavigation("History List")}
      >
        <View style={styles.buttonStyling}>
          <FontAwesome name="th-list" size={20} color="black" />
          <Text style={styles.textButtonStyling}>History List</Text>
        </View>
      </Pressable>
      <FooterComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 300,
    height: 300,
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
  },
  pressable: {
    width: 200,
    marginTop: 40,
    borderRadius: 20,
  },
  buttonStyling: {
    backgroundColor: "orange",
    width: 200,
    height: 50,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 30,
  },
  textButtonStyling: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    padding: 5,
  },
});

export default HomeScreen;
