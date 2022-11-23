import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import PrimaryHeader from "../../components/Headers/PrimaryHeader";
import { COLORS, WIDTH } from "../../themes/themes";
import CustomInput from "../../components/Inputs/CustomInput";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import ConsultationCard from "../../components/Cards/ConsultationCard";
import DotLine from "../../components/DotLine";
import PopularInsurance from "../../components/Cards/PopularInsurance";
import { useNavigation } from "@react-navigation/native";
import { fakeData } from "../../../data";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.blue400} />
      <PrimaryHeader color={COLORS.white} bg={COLORS.blue400} />
      {/* search Container */}
      <View style={styles.searchContainer}>
        <CustomInput
          search={true}
          placeholder={"Search here..."}
          setValue={setInputText}
          onFocuses={() => console.log("true")}
        />
      </View>
      <ScrollView>
        {/* Insurance list */}
        <View style={styles.InsuranceContainer}>
          {InsuranceData?.slice(0, 7).map((item, index) => {
            return (
              <View key={index} style={styles.insuranceContainer}>
                <Image source={item?.img} style={styles.image} />
                <Text style={styles.name}>{item?.name}</Text>
              </View>
            );
          })}
          <TouchableOpacity style={styles.moreButton}>
            <Entypo name="plus" size={28} color="#4F4F4F" />
            <Text style={styles.moreText}>More</Text>
          </TouchableOpacity>
        </View>
        {/* E-consultation list container */}
        <View style={styles.consultationContainer}>
          <FlatList
            data={consultation}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={(item) => {
              return <ConsultationCard item={item} />;
            }}
          />
        </View>
        {/* Popular Insurance */}
        <View style={styles.consultationContainer}>
          <View style={styles.popularTopContainer}>
            {/*  title */}
            <View style={styles.popularTitleCont}>
              <Text style={styles.popularTitle}>Popular Insurance</Text>
              <DotLine />
            </View>

            {/* View all button */}
            <TouchableOpacity
              onPress={() => navigation.navigate("InsuranceList")}
            >
              <Text style={styles.popularViewText}>View All</Text>
            </TouchableOpacity>
          </View>
          {/* popular Ins Data */}
          <View>
            <FlatList
              data={fakeData}
              horizontal
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              renderItem={(item) => {
                return <PopularInsurance item={item} />;
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchContainer: {
    backgroundColor: COLORS.blue400,
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  // InsuranceContainer
  InsuranceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 20,
    marginVertical: 20,
    shadowColor: "#00000058",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    // backgroundColor: "red",
  },
  // moreButton
  moreButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: WIDTH / 4,
    paddingVertical: 10,
  },
  moreText: {
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 15.23,
    paddingTop: 5,
  },
  // consultationContainer
  consultationContainer: {
    paddingVertical: 20,
    shadowColor: "#00000053",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 15,
    // backgroundColor: "red",
  },
  // popularTitleCont
  popularTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  popularTitleCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularTitle: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "500",
    marginRight: 10,
    color: COLORS.gray700,
  },
  popularViewText: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 15.23,
    color: COLORS.gray700,
  },
  // insurance Container
  insuranceContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: WIDTH / 4,
    paddingVertical: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  name: {
    paddingTop: 5,
    textAlign: "center",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 15.23,
    width: 80,
  },
});

// feck data Insurance Data
const InsuranceData = [
  {
    id: "1",
    name: "Life Insurance",
    img: require("../../../assets/icon/life.png"),
  },
  {
    id: "2",
    name: "Health Insurance",
    img: require("../../../assets/icon/health.png"),
  },
  {
    id: "3",
    name: "Home Insurance",
    img: require("../../../assets/icon/home.png"),
  },
  {
    id: "4",
    name: "Car Insurance",
    img: require("../../../assets/icon/car.png"),
  },
  {
    id: "1",
    name: "Disability  Insurance",
    img: require("../../../assets/icon/disability.png"),
  },
  {
    id: "5",
    name: "Travel Insurance",
    img: require("../../../assets/icon/travel.png"),
  },
  {
    id: "4",
    name: "Cattle Insurance",
    img: require("../../../assets/icon/callie.png"),
  },
];

// consultation
const consultation = [
  {
    id: "1",
    title: "E-consultation",
    subTitle: "Lorem ipsum dolor sit amet, tet adipiscing elit. ",
    img: require("../../../assets/image/consultionImage.jpg"),
  },
  {
    id: "2",
    title: "E-consultation",
    subTitle: "Lorem ipsum dolor sit amet, tet adipiscing elit. ",
    img: require("../../../assets/image/consultionImage.jpg"),
  },
  {
    id: "3",
    title: "E-consultation",
    subTitle: "Lorem ipsum dolor sit amet, tet adipiscing elit. ",
    img: require("../../../assets/image/consultionImage.jpg"),
  },
  {
    id: "4",
    title: "E-consultation",
    subTitle: "Lorem ipsum dolor sit amet, tet adipiscing elit. ",
    img: require("../../../assets/image/consultionImage.jpg"),
  },
];

// popular Insurance
const popularInsData = [
  {
    id: "1",
    name: "Shanti-Amra Sobai",
    image: require("../../../assets/image/Max_Life_Insuranc.png"),
    coverage: 1000000,
    term: 5,
    premium: 540,
    ratting: 4,
  },
  {
    id: "2",
    name: "Shanti-Amra Sobai",
    image: require("../../../assets/image/Max_Life_Insuranc.png"),
    coverage: 1000000,
    term: 5,
    premium: 540,
    ratting: 4,
  },
  {
    id: "3",
    name: "Shanti-Amra Sobai",
    image: require("../../../assets/image/Max_Life_Insuranc.png"),
    coverage: 1000000,
    term: 5,
    premium: 540,
    ratting: 4,
  },
  {
    id: "4",
    name: "Shanti-Amra Sobai",
    image: require("../../../assets/image/Max_Life_Insuranc.png"),
    coverage: 1000000,
    term: 5,
    premium: 540,
    ratting: 4,
  },
];
