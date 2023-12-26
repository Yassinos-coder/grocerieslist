import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";

const CreateList = () => {
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState("");
  const [qtyType, setQtyType] = useState("KG"); // it defines if the qty or weight is in kilograms or grams.
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
            value={product}
            onChangeText={setProduct}
          />
          <TextInput
            style={styles.textInputs2}
            placeholder={`Qty in ${qtyType}`}
            value={qty}
            onChangeText={setQty}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.PressablesView}>
          <Pressable onPress={() => setQtyType("KG")}>
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
          <Pressable onPress={() => setQtyType("G")}>
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
          <Pressable>
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
    marginTop: 20
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
