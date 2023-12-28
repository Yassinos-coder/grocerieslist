import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import { Provider } from "react-redux";

/* Screens Import */
import HomeScreen from "./Screens/HomeScreen";
import CreateList from "./Screens/CreateList";
import Store from "./redux/store";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name={"Home"}
            component={HomeScreen}
            options={{
              drawerLabel: "Home",
              drawerIcon: ({ focused, color, size }) => (
                <Feather name="home" size={size} color={color} />
              ),
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="Create List"
            component={CreateList}
            options={{
              drawerLabel: "Create List",
              drawerIcon: ({ focused, color, size }) => (
                <Feather name="plus" size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
