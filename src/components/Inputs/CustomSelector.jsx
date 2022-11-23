import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect } from "react";
import { COLORS } from "../../themes/themes";
import { MaterialIcons } from "@expo/vector-icons";
import Text from "../Text/Text";

export default function CustomSelector({ placeholder, data, setData }) {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState();
  useEffect(() => {
    setData(selectedItem);
  }, [selectedItem]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setOpen(!open);
        }}
        activeOpacity={0.8}
        style={styles.button}
      >
        <Text style={styles.selectText}>
          {selectedItem == null ? placeholder : selectedItem}
        </Text>
        <MaterialIcons
          name={open ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="#333D44"
        />
      </TouchableOpacity>
      {/*  */}
      {open && (
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setOpen(!open);
                    setSelectedItem(item?.item?.name);
                  }}
                  style={styles.selectButton}
                  activeOpacity={0.2}
                >
                  <Text preset="h5">{item?.item?.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  button: {
    backgroundColor: COLORS.gray300,
    paddingVertical: 10,
    paddingRight: 10,
    borderRadius: 5,
    paddingLeft: 10,
    height: 50,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  selectText: {
    color: "#333D44",
    fontWeight: "500",
  },
  listContainer: {
    position: "absolute",
    height: 200,
    zIndex: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray300,
    top: 60,
    width: "100%",
    backgroundColor: "#fff",
  },
  //   selectButton
  selectButton: {
    padding: 10,
    backgroundColor: "#f4f4f4",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
});
