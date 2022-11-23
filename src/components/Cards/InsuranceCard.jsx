import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, WIDTH } from "../../themes/themes";
import SvgCartIcon from "../../svg/SvgCartIcon";
import Text from "../Text/Text";
import { useNavigation } from "@react-navigation/native";

export default function InsuranceCard({ item }) {
  const navigation = useNavigation();
  const { id, images, name, coverage, premium, policyTerm } = item?.item;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetails", {
          item: item?.item,
        });
      }}
      style={[styles.containerView]}
    >
      <View style={styles.cartHeader}>
        <View style={styles.cartTitleContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: images,
            }}
          />
          <Text preset="BASE">{name}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CompareOffers", {
              item: item.item,
            });
          }}
          style={styles.compareButton}
        >
          <Text preset="small" style={{ color: "#646464" }}>
            Compare
          </Text>
        </TouchableOpacity>
      </View>
      {/* list */}
      <View style={styles.cartBody}>
        {/* Coverage */}
        <View style={styles.cartItem}>
          <Text preset="small" style={styles.cartItemTitle}>
            Coverage
          </Text>
          <Text preset="h5" style={styles.cartItemText}>
            {coverage}
          </Text>
        </View>
        {/* Term */}
        <View style={styles.cartItem}>
          <Text preset="small" style={styles.cartItemTitle}>
            Term
          </Text>
          <Text preset="h5" style={styles.cartItemText}>
            {policyTerm} Years
          </Text>
        </View>
        {/*Premium  */}
        <View style={styles.cartItem}>
          <Text preset="small" style={styles.cartItemTitle}>
            Premium
          </Text>
          <Text preset="h5" style={styles.cartItemText}>
            {premium}
          </Text>
        </View>
        {/* Button */}
        <TouchableOpacity style={styles.cartButton}>
          <View style={styles.cartIcon}>
            <SvgCartIcon />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerView: {
    width: WIDTH / 1.1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    //
    shadowColor: "#00000067",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  // cartHeader
  cartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: COLORS.gray300,
  },
  cartTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  compareButton: {
    justifyContent: "center",
  },
  logo: {
    width: 40,
    height: 26,
    resizeMode: "contain",
    marginRight: 10,
  },
  //cartListContainer
  cartBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    alignItems: "center",
  },
  cartItem: {},
  cartItemTitle: {},
  cartItemText: {
    fontWeight: "700",
    color: "#4A4A4A",
    paddingTop: 5,
  },
  cartButton: {
    backgroundColor: COLORS.gray500,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
