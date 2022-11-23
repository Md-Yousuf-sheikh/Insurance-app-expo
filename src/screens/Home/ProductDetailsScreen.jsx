import {
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import PrimaryHeader from "../../components/Headers/PrimaryHeader";
import { COLORS, ROW, ROWJ, WIDTH } from "../../themes/themes";
import Text from "../../components/Text/Text";
import SvgCartIcon from "../../svg/SvgCartIcon";
import SvgCoverage from "../../svg/SvgCoverage";
import { AirbnbRating } from "react-native-ratings";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import DropDownList from "../../components/DropDownList/DropDownList";
import DotLine from "../../components/DotLine";
import ReviewCard from "../../components/Cards/ReviewCard";
import { useNavigation } from "@react-navigation/native";
import SvgTramIcon from "../../svg/SvgTramIcon";
import SvgPremier from "../../svg/SvgPremier";
export default function ProductDetailsScreen({ route }) {
  const { images, name, coverage, premium, policyTerm, ratting } =
    route?.params?.item;
  const navigation = useNavigation(); // navigation
  const [keyFeatureOpen, setKeyFeatureOpen] = React.useState(true); // open toggle
  const [exclusionsOpen, setExclusionsOpen] = React.useState(false); // close toggle
  const [productDetailsOpen, setProductDetailsOpen] = React.useState(false); // close toggle
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
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.insuranceTitleHeader}>
          <View style={styles.titleContainer}>
            <View>
              <Text
                preset="h2"
                style={{
                  paddingBottom: 2,
                }}
              >
                Make Safety life insurance{" "}
              </Text>
              <Text preset="h3">{name}</Text>
            </View>
            <TouchableOpacity style={styles.cartButton}>
              <SvgCartIcon />
            </TouchableOpacity>
          </View>
          <Text preset="h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit...{" "}
          </Text>
        </View>
        {/* banner details  */}
        <View style={styles.insuranceContainer}>
          {/* image */}
          <Image
            source={{
              uri: images,
            }}
            style={styles.insuranceImage}
          />
          {/* content  */}
          <View>
            {/* ratting */}
            <View>
              <AirbnbRating
                count={5}
                defaultRating={ratting}
                size={11}
                showRating={false}
                isDisabled={true}
                selectedColor={"#ffff"}
                unSelectedColor={"#000000ff"}
                starContainerStyle={{
                  alignSelf: "flex-end",
                  paddingBottom: 12,
                }}
              />
            </View>
            <View style={ROWJ}>
              {/* Coverage */}
              <View style={styles.cardItem}>
                <SvgCoverage fill={"#fff"} />
                <Text preset="small" style={styles.cardTitle}>
                  Coverage
                </Text>
                <Text preset="h5" style={styles.cardText}>
                  {coverage}
                </Text>
              </View>
              {/* Tram  */}
              <View style={styles.cardItem}>
                <SvgTramIcon />
                <Text preset="small" style={styles.cardTitle}>
                  Term
                </Text>
                <Text preset="h5" style={styles.cardText}>
                  {policyTerm} Years
                </Text>
              </View>
              {/* Premium */}
              <View style={styles.cardItem}>
                <SvgPremier />
                <Text preset="small" style={styles.cardTitle}>
                  Premium
                </Text>
                <Text preset="h5" style={styles.cardText}>
                  {premium}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* buy now button */}
        <PrimaryButton title={"Buy Now"} />
        {/* drop down list here */}
        <DropDownList
          setOpen={setKeyFeatureOpen}
          open={keyFeatureOpen}
          title={"Key features"}
          api={listData}
        />
        <DropDownList
          setOpen={setProductDetailsOpen}
          open={productDetailsOpen}
          title={"Product Details"}
          api={listData}
        />
        <DropDownList
          setOpen={setExclusionsOpen}
          open={exclusionsOpen}
          title={"Exclusions"}
          api={listData}
        />
        {/* button group -> Compare and Calculate Premium */}
        <View style={styles.buttonGroup}>
          <PrimaryButton
            title={"Compare"}
            secondary={true}
            onPress={() => {
              navigation.navigate("CompareOffers", {
                item: route?.params?.item,
              });
            }}
          />
          <PrimaryButton
            title={"Calculate Premium"}
            secondary={true}
            onPress={() => {
              navigation.navigate("PremiumCalculate", {
                item: route?.params?.item,
              });
            }}
          />
        </View>
        {/* Review section */}
        <View style={styles.reviewContainer}>
          {/* title */}
          <View style={ROW}>
            <Text preset="h2" style={{ paddingRight: 10 }}>
              User reviews
            </Text>
            <DotLine />
          </View>
          {/* list here */}
          <FlatList
            data={reviewData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => {
              return <ReviewCard item={item} />;
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 4,
  },
  // insuranceContainer
  insuranceContainer: {
    flexDirection: "row",
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: COLORS.blueL400,
    marginTop: 10,
    justifyContent: "space-between",
  },
  insuranceTitleHeader: {
    paddingHorizontal: 12,
    paddingTop: 15,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
  },
  insuranceImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  // card
  cardItem: {
    alignItems: "center",
    paddingHorizontal: 14,
  },
  cardTitle: {
    paddingTop: 10,
  },
  cardText: {
    fontWeight: "700",
    color: "#4A4A4A",
    paddingTop: 2,
  },
  cartButton: {
    backgroundColor: COLORS.gray500,
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  // Drop Down
  dropDownContainer: {
    backgroundColor: "#ffff",
    marginVertical: 20,
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
  // button group
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  // review section
  reviewContainer: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

// feck data
const listData = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
];
// reviewData demo
const reviewData = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
];
