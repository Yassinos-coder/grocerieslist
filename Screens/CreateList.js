import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import ItemObject from "../Helpers/ItemObject";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/groceriesReducer";

const CreateList = () => {
  const [newItem, setNewItem] = useState(new ItemObject());
  const [qtyType, setQtyType] = useState("KG"); // it defines if the qty or weight is in kilograms or grams.
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleProductNameSubmit = () => {
    qtyInputRef.focus();
  };

  const addItemToList = () => {
    dispatch(AddItem({ newItem }));
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
            onChangeText={(text) => setNewItem({ ...newItem, product: text })}
            returnKeyType="next"
            onSubmitEditing={handleProductNameSubmit}
          />
          <TextInput
            ref={(input) => (qtyInputRef = input)}
            style={styles.textInputs2}
            placeholder={`Qty in ${qtyType}`}
            value={newItem.qty}
            onChangeText={(text) => setNewItem({ ...newItem, qty: text })}
            keyboardType="number-pad"
            returnKeyType="done"
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
        </View>
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
    marginLeft: 100,
    marginTop: 20,
  },
  btn1: {
    backgroundColor: "orange",
    height: 30,
    width: 130,
    borderRadius: 10,
    justifyContent: "center",
  },
});

export default CreateList;