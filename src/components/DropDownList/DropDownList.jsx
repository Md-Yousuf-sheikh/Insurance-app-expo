import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, ROW } from "../../themes/themes";
import { MaterialIcons } from "@expo/vector-icons";
import Text from "../Text/Text";
import DotLine from "../DotLine";

export default function DropDownList({ setOpen, open, title, api }) {
  return (
    <View style={styles.dropDownContainer}>
      <TouchableOpacity
        style={styles.dropDownButton}
        onPress={() => {
          setOpen(!open);
        }}
        activeOpacity={0.6}
      >
        <View style={ROW}>
          <Text preset="h2" style={{ paddingRight: 10 }}>
            {title}
          </Text>
          <DotLine />
        </View>
        <MaterialIcons
          name={open ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="black"
        />
        {/* <MaterialIcons name="keyboard-arrow-up" size={24} color="black" /> */}
      </TouchableOpacity>
      {/* View */}
      {open && (
        <View style={styles.dropDownViewContainer}>
          {/* items */}
          {api.map((item, index) => {
            return (
              <View key={index} style={styles.dropDownItem}>
                <Image
                  source={require("../../../assets/image/consultionImage.jpg")}
                  style={styles.dropDownImage}
                />
                <View>
                  <Text preset="small">For Insurence Holder Age</Text>
                  <Text preset="h5" style={{ fontWeight: "700" }}>
                    18-65 Years
                  </Text>
                </View>
              </View>
            );
          })}
          {/*  */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownContainer: {
    backgroundColor: "#bbdefb5a",
    marginVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray300,
  },
  dropDownButton: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  dropDownViewContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  dropDownItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    paddingVertical: 10,
  },
  dropDownImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 10,
  },
});
