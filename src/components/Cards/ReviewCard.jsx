import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "../Text/Text";

export default function ReviewCard() {
  return (
    <View style={styles.card}>
      <Text preset="h6" style={styles.cardDate}>
        22 july 2021
      </Text>
      <Text preset="h5" style={styles.cardTitle}>
        Jenifar karan
      </Text>
      <Text preset="BASE" style={styles.cardReview}>
        Lorem ipsum dolor sit amet, tur adipiscing elit. Pharetra id amet arcu
        purus enim.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    width: 250,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#00000033",
  },
  cardTitle: {
    color: "#4F4F4F",
    fontWeight: "700",
    paddingVertical: 2,
  },
  cardDate: {},
  cardReview: {
    color: "#646464",
  },
});
