import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FooterComponent = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Copyright © 2024 Yassine Castro. All rights reserved.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    paddingVertical: 10,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
});

export default FooterComponent;
