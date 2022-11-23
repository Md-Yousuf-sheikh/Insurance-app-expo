import { View, StyleSheet, StatusBar, Alert } from "react-native";
import React from "react";
import { COLORS } from "../../themes/themes";
import PrimaryHeader from "../../components/Headers/PrimaryHeader";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import SvgMarkIcon from "../../svg/SvgMarkIcon";

export default function PremiumAmountScreen({ route }) {
  const navigation = useNavigation();
  const { amount } = route?.params;

  return (
    <>
      <PrimaryHeader
        color={COLORS.gray600}
        bg={COLORS.white}
        backButton={true}
        shadow={true}
      />
      <StatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
        animated
      />
      <View style={styles.container}>
        <Text preset="h3">Premium Amount</Text>
        <View style={styles.card}>
          <Text preset="h4" style={styles.cardTitle}>
            You Required Life Cover to protect your family’s future is
          </Text>
          <Text preset="h1" style={styles.cardBalance}>
            BDT {amount}
          </Text>
          <PrimaryButton
            title={"Buy Now"}
            style={styles.buttonStyle}
            onPress={() => {
              console.log("Buy");
            }}
          />

          {/*  */}
          <View style={styles.marlList}>
            <Text style={{ marginTop: 2 }}>
              <SvgMarkIcon />
            </Text>
            <Text style={styles.markText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              maecenas aliquam felis tempus scelerisque imperdiet libero, mus
              fermentum.
            </Text>
          </View>
          <View style={styles.marlList}>
            <Text style={{ marginTop: 2 }}>
              <SvgMarkIcon />
            </Text>
            <Text style={styles.markText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              maecenas aliquam felis tempus scelerisque imperdiet libero, mus
              fermentum.
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 8,
    paddingHorizontal: 10,
  },
  card: {
    justifyContent: "center",
    margin: 10,
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    paddingBottom: 20,
    borderColor: COLORS.gray300,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 16,
    width: "80%",
    textAlign: "center",
    color: "#4F4F4F",
    paddingVertical: 20,
  },
  cardBalance: {
    paddingVertical: 20,
  },
  buttonStyle: {
    borderRadius: 5,
    marginVertical: 20,
    paddingHorizontal: 50,
    marginBottom: 50,
  },
  //
  marlList: {
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  markText: {
    lineHeight: 20,
    color: "#646464",
    fontWeight: "500",
  },
});
