import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import SvgLeftArrowIcon from "../../svg/SvgLeftArrowIcon";
import SvgMenuIcon from "../../svg/SvgMenuIcon";
import SvgUserIcon from "../../svg/SvgUserIcon";
import { COLORS, WIDTH } from "../../themes/themes";
import { useNavigation } from "@react-navigation/native";

export default function PrimaryHeader({ bg, color, backButton, shadow }) {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.viewContainer,
        {
          backgroundColor: bg,
        },
        shadow && styles.shadow,
      ]}
    >
      <View style={styles.leftArrow}>
        {backButton && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgLeftArrowIcon fill={color} />
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.menuUserContainer]}>
        <TouchableOpacity style={styles.userButton}>
          <SvgUserIcon fill={color} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <SvgMenuIcon fill={color} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    width: WIDTH,
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 3,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  leftArrow: {},
  menuUserContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  userButton: {
    marginRight: 10,
  },
  menuButton: {
    marginLeft: 10,
  },
});
