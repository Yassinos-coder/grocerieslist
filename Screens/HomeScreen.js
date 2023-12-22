import React from "react";
import { View, StyleSheet, Text, Image, Pressable, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/icon.png")} />
      <Text style={styles.welcomeText}>
        Welcome to GroceriesList{" "}
        <Text style={{ fontWeight: "500" }}>
          Your Smart Shopping Companion!
        </Text>
      </Text>
      <View>
        <Pressable onPress={()=> navigation.navigate('Create List')}>
          <TouchableOpacity>
            <View style={styles.buttonStyling}>
              <Text style={styles.TextButtonStyling}>Create List</Text>
            </View>
          </TouchableOpacity>
        </Pressable>
        <Pressable onPress={()=> navigation.navigate('Grocery List')}>
          <TouchableOpacity>
            <View style={styles.buttonStyling}>
              <Text style={styles.TextButtonStyling}>Grocery List</Text>
            </View>
          </TouchableOpacity>
        </Pressable>
        <Pressable onPress={()=> navigation.navigate('History List')}>
          <TouchableOpacity>
            <View style={styles.buttonStyling}>
              <Text style={styles.TextButtonStyling}>History List</Text>
            </View>
          </TouchableOpacity>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent:'center'
  },
  logo: {
    resizeMode: "contain",
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
  },
  buttonStyling: {
    alignSelf: "center",
    backgroundColor: "orange",
    width: 200,
    height: 50,
    borderRadius: 20,
    marginTop: 40
  },
  TextButtonStyling: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "center",
    padding: 10,
  },
});

export default HomeScreen;
