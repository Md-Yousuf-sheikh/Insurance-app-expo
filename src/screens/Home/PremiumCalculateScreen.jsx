import { View, StyleSheet, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../themes/themes";
import PrimaryHeader from "../../components/Headers/PrimaryHeader";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import CustomInput from "../../components/Inputs/CustomInput";
import CustomSelector from "../../components/Inputs/CustomSelector";
import { useNavigation } from "@react-navigation/native";

export default function PremiumCalculateScreen({ route }) {
  const { premium } = route?.params?.item;
  const navigation = useNavigation();
  const [period, setPeriod] = useState();
  const [bank, setBank] = useState("");
  const [amount, setAmount] = useState(premium);
  const [totalAmount, setTotalAmount] = useState(amount);
  const [advancePayment, setAdvancePayment] = useState(0);

  // Get Percentage // props (period, amount)
  const getPercentage = (per, amo) => {
    const percent = (per / 100) * amo;
    const total = percent + amo;
    return total;
  };

  // change => advance Payment
  useEffect(() => {
    if (advancePayment >= premium) {
      return console.log("Sorry");
    }
    if (advancePayment > 0) {
      const amountAdv = amount - advancePayment;
      if (amountAdv >= 0) {
        setAmount(amountAdv);
      }
    }
  }, [advancePayment]);

  // change => bank, period, amount, advancePayment
  useEffect(() => {
    // console.log("period=>", period);
    switch (bank) {
      case "DBBL":
        if (period == 3) {
          // 2.5
          const total = getPercentage(2.5, amount);
          setTotalAmount(total);
        } else if (period == 6) {
          // 4
          console.log("Match => 6", period);
          setTotalAmount(getPercentage(4, amount));
        } else if (period == 12) {
          // 5.5
          setTotalAmount(getPercentage(5.5, amount));
        } else {
          console.log("Period not match!");
        }
        break;
      case "SBC":
        if (period == 3) {
          // 4
          setTotalAmount(getPercentage(4, amount));
        } else if (period == 6) {
          // 5
          setTotalAmount(getPercentage(5, amount));
        } else if (period == 12) {
          // 6
          setTotalAmount(getPercentage(6, amount));
        } else {
          console.log("Period not match!");
        }
        break;
      case "EBL":
        if (period == 3) {
          // 3
          setTotalAmount(getPercentage(3, amount));
        } else if (period == 6) {
          // 4
          setTotalAmount(getPercentage(4, amount));
        } else if (period == 12) {
          // 5
          setTotalAmount(getPercentage(5, amount));
        } else {
          console.log("Period not match!");
        }
        break;
      default:
        console.log("Bank not match!");
    }
  }, [bank, period, amount, advancePayment]);

  // handel Navigation
  const handelNavigation = () => {
    navigation.navigate("PremiumAmount", {
      amount: totalAmount, //send amount route props
    });
  };

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
        {/* Insurance Header */}
        <View style={styles.insuranceTitleHeader}>
          <View style={styles.titleContainer}>
            <View>
              <Text preset="h2" style={styles.title}>
                Calculate Your Premium
              </Text>
              <Text preset="h3" style={styles.subTitle}>
                Make Safety Life Insurance{" "}
              </Text>
            </View>
          </View>
          <Text preset="h6" style={{ marginBottom: 14 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit...
          </Text>
        </View>
        {/* Custom dropDown list Selector */}
        <CustomSelector
          data={bankData}
          placeholder={"Select Bank"}
          setData={setBank}
        />
        {/* Custom dropDown list Selector */}
        <CustomSelector
          data={PeriodData}
          placeholder={"Select Period"}
          setData={setPeriod}
        />
        {/* Custom Input get value and is focuses of not */}
        <CustomInput
          placeholder={"Advance Payment"}
          setValue={setAdvancePayment}
          onFocuses={() => console.log("true")}
        />
        {/* Button Calculate Premium*/}
        <PrimaryButton
          title={"Calculate Premium"}
          style={styles.buttonStyle}
          onPress={handelNavigation}
        />
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
  // Insurance Header
  title: {
    fontSize: 16,
  },
  subTitle: {
    fontSize: 13,
    paddingTop: 5,
  },
  insuranceContainer: {
    flexDirection: "row",
    paddingVertical: 30,
    backgroundColor: COLORS.blueL400,
    marginTop: 10,
    justifyContent: "space-between",
  },
  insuranceTitleHeader: {
    paddingTop: 15,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
  },
  // button
  buttonStyle: {
    borderRadius: 5,
    marginVertical: 15,
  },
});

// Bank list data
const bankData = [
  {
    id: "1",
    name: "DBBL",
  },
  {
    id: "2",
    name: "SBC",
  },
  {
    id: "3",
    name: "EBL",
  },
];

// Period list data
const PeriodData = [
  {
    id: "1",
    name: 3,
  },
  {
    id: "1",
    name: 6,
  },
  {
    id: "1",
    name: 12,
  },
];
