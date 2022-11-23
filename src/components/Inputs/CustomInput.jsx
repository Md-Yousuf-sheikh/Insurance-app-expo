import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../../themes/themes";
import { Feather } from "@expo/vector-icons";

export default function CustomInput({
  search,
  placeholder,
  seconder,
  leftIcon,
  setValue,
  onFocuses,
}) {
  const [textInputValue, setTextInputValue] = React.useState();
  useEffect(() => {
    setValue(textInputValue);
  }, [textInputValue]);

  return (
    <View style={[styles.container]}>
      <TextInput
        placeholder={placeholder}
        onChangeText={(text) => setTextInputValue(text)}
        onFocus={() => onFocuses(true)}
        style={[
          styles.inputStyle,
          search && {
            paddingRight: 35,
          },
          seconder && styles.inputStyleSec,
          leftIcon && styles.leftIconStyle,
        ]}
      />
      {search && (
        <Feather
          name="search"
          size={24}
          color={COLORS.grayD500}
          style={[leftIcon ? styles.searchIconStyle : styles.searchIcon]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  inputStyle: {
    backgroundColor: COLORS.gray300,
    paddingVertical: 10,
    paddingRight: 10,
    borderRadius: 5,
    paddingLeft: 10,
  },

  inputStyleSec: {
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray300,
  },
  leftIconStyle: {
    paddingLeft: 50,
  },
  searchIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  searchIconStyle: {
    position: "absolute",
    left: 8,
    top: 12,
  },
});
