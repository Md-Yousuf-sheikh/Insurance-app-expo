import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, WIDTH } from "../../themes/themes";

export default function ConsultationCard(item) {
  const { title, img, subTitle, id } = item?.item?.item;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Consultation now</Text>
        </TouchableOpacity>
      </View>
      <Image source={img} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH / 1.1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS.gray300,
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: "#d1d1d14a",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 12,
  },
  image: {
    width: 91,
    height: 91,
    resizeMode: "cover",
  },
  title: {
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 21,
  },
  subTitle: {
    width: WIDTH / 2.2,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 12.89,
    color: "#595959",
    marginTop: 10,
  },
  button: {
    backgroundColor: COLORS.blue400,
    alignItems: "center",
    width: 125,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 14,
    color: COLORS.white,
  },
  textContainer: {
    paddingLeft: 5,
  },
});
