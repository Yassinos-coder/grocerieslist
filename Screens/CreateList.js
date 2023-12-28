import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import ItemObject from "../Modals/ItemObject";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, ClearShoppingList } from "../redux/groceriesReducer";

const CreateList = () => {
  const [newItem, setNewItem] = useState(new ItemObject());
  const [qtyType, setQtyType] = useState("KG"); // it defines if the qty or weight is in kilograms or grams.

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const shoppingList = useSelector(
    (state) => state.GroceriesHandler.shoppingList
  );

  const addItemToList = () => {
    if (newItem.product === "" || newItem.qty === "") {
      Alert.alert("Please fill in the inputs.");
    } else if (newItem.product === "" && newItem.qty === "") {
      Alert.alert("Please fill in the inputs.");
    } else {
      dispatch(AddItem(newItem));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ScreenTitle}>
        <Text style={styles.textInScreenTitle}>Fill in the inputs below.</Text>
      </View>
      <View style={styles.ListCreation}>
        <View style={styles.TextInputsView}>
          <TextInput
            style={[styles.textInputs, { width: 250 }]}
            placeholder="Name of product"
            value={newItem.product}
            returnKeyType="next"
            onChangeText={(text) => setNewItem({ ...newItem, product: text })}
          />
          <TextInput
            style={styles.textInputs2}
            placeholder={`Qty in ${qtyType}`}
            value={newItem.qty}
            keyboardType="number-pad"
            returnKeyType="done"
            onChangeText={(text) =>
              setNewItem({ ...newItem, qty: text, qtyType: qtyType })
            }
          />
        </View>
        <View style={styles.PressablesView}>
          <Pressable
            onPress={() => setQtyType("KG")}
            style={({ pressed }) => [
              styles.pressable,
              pressed && { opacity: 0.5 },
            ]}
          >
            <View style={styles.kilograms}>
              <Text
                style={[
                  styles.pressableTexts,
                  qtyType === "KG"
                    ? { backgroundColor: "orange", borderRadius: 5 }
                    : {},
                  { textAlign: "center" },
                ]}
              >
                KG
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => setQtyType("G")}
            style={({ pressed }) => [
              styles.pressable,
              pressed && { opacity: 0.5 },
            ]}
          >
            <View style={styles.grams}>
              <Text
                style={[
                  styles.pressableTexts,
                  qtyType === "G"
                    ? { backgroundColor: "orange", borderRadius: 5 }
                    : {},
                  { textAlign: "center" },
                ]}
              >
                G
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.btnActions}>
          <Pressable
            onPress={addItemToList}
            style={({ pressed }) => [
              styles.pressable,
              pressed && { opacity: 0.5 },
            ]}
          >
            <View style={styles.btn1}>
              <Text style={{ textAlign: "center", fontSize: 17 }}>
                Add Item to list
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              setNewItem(new ItemObject());
              dispatch(ClearShoppingList());
            }}
            style={({ pressed }) => [
              styles.pressable,
              pressed && { opacity: 0.5 },
            ]}
          >
            <View
              style={[
                styles.btn1,
                { backgroundColor: "#ff6666", marginLeft: 20 },
              ]}
            >
              <Text style={{ textAlign: "center", fontSize: 17 }}>
                Restart List
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.listDisplay}>
        <Text style={{ color: "grey", textAlign: "center" }}>List Display</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {shoppingList.map((item, index) => (
            <View key={index} style={styles.listDisplayModel}>
              <Text style={styles.textInListStyling}>● {index + 1} </Text>
              <Text style={styles.textInListStyling}>
                <Text style={{ fontWeight: "600" }}>Product :</Text>
                {item.product}
              </Text>
              <Text style={styles.textInListStyling}>
                <Text style={{ fontWeight: "600" }}>Quantity :</Text> {item.qty}
                {item.qtyType}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ScreenTitle: {
    width: 300,
    alignSelf: "center",
    margin: 20,
  },
  textInScreenTitle: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
  },
  ListCreation: {
    alignSelf: "center",
    borderWidth: 2,
    width: 350,
    height: 150,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: "orange",
    padding: 10,
  },
  TextInputsView: {
    flexDirection: "row",
    gap: -1,
  },
  textInputs: {
    borderWidth: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 5,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    paddingLeft: 10,
  },
  textInputs2: {
    width: 80,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 5,
    borderLeftWidth: 0,
  },
  PressablesView: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  kilograms: {
    backgroundColor: "#d6d6d6",
    width: 25,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
    textAlign: "center",
  },
  grams: {
    backgroundColor: "#d6d6d6",
    width: 25,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
    textAlign: "center",
  },
  pressableTexts: {
    fontWeight: 500,
  },
  btnActions: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
  btn1: {
    backgroundColor: "orange",
    height: 30,
    width: 130,
    borderRadius: 10,
    justifyContent: "center",
  },
  listDisplay: {
    alignSelf: "center",
    borderWidth: 2,
    width: 350,
    height: 400,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: "orange",
    padding: 10,
    marginTop: 20,
  },
  listDisplayModel: {
    flexDirection: "row",
    gap: 17,
    marginTop: 5,
  },
  textInListStyling: {
    fontSize: 17,
  },
  GoListDisplay: {},
});

export default CreateList;
