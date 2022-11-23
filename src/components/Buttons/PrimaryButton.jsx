import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../themes/themes";
import Text from "../Text/Text";

export default function PrimaryButton({
  title,
  style,
  onPress,
  secondary,
  textStyle,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[secondary ? styles.containerSec : styles.container, style]}
      activeOpacity={0.5}
    >
      <Text
        preset="h3"
        style={[secondary ? styles.textStyleSec : styles.textStyle, textStyle]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor: COLORS.blue400,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  containerSec: {
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 10,
    paddingHorizontal: 25,
  },
  textStyle: {
    fontSize: 16,
    color: COLORS.white,
    letterSpacing: 0.5,
  },
  textStyleSec: {
    fontSize: 16,
    color: COLORS.gray400,
  },
});
