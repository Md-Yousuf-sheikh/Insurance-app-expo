import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../themes/themes";

export default function DotLine() {
  return (
    <View style={styles.container}>
      <View style={styles.dot} />
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    height: 2,
    width: 2,
    backgroundColor: COLORS.gray700,
    marginRight: 5,
  },
  line: {
    height: 2,
    width: 37,
    backgroundColor: COLORS.gray700,
  },
});
