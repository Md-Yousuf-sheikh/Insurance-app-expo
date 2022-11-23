import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import PrimaryHeader from "../../components/Headers/PrimaryHeader";
import { COLORS, ROW, SPACING, WIDTH } from "../../themes/themes";
import Text from "../../components/Text/Text";
import { MaterialIcons } from "@expo/vector-icons";
import CustomInput from "../../components/Inputs/CustomInput";
import InsuranceCard from "../../components/Cards/InsuranceCard";
import { useNavigation } from "@react-navigation/native";
import { fakeData } from "../../../data";

export default function InsuranceListScreen() {
  const [minData, setMinData] = React.useState(fakeData);
  const navigation = useNavigation();
  const [selectedCat, setSelectedCat] = React.useState("Life");
  const [inputText, setInputText] = React.useState("");
  const searchFilter = (text) => {
    if (fakeData?.length > 0) {
      let filterList = fakeData?.filter((item) => {
        const itemName = item?.name?.toLowerCase();
        const userTypeText = text?.toLowerCase();
        return itemName?.indexOf(userTypeText) > -1;
      });
      if (text?.length > 0) {
        setMinData(filterList);
      }
    }
    if (text?.length < 1) {
      setMinData(fakeData);
    }
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
        {/* cat == categories */}
        <View style={styles.catContainer}>
          <View style={ROW}>
            {categories?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedCat(item.name);
                  }}
                  style={styles.catButton}
                >
                  <Text
                    preset="h3"
                    style={[
                      styles.catTitle,
                      selectedCat === item?.name && {
                        borderBottomColor: "#646464",
                      },
                    ]}
                  >
                    {item?.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity activeOpacity={0.5}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {/* Search input */}
        <CustomInput
          search={true}
          placeholder={"Search here..."}
          setValue={(text) => searchFilter(text)}
          onFocuses={() => console.log("")}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={minData}
            contentContainerStyle={{ paddingBottom: 120 }}
            showsVerticalScrollIndicator={false}
            scrollEnabled
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item) => {
              return <InsuranceCard item={item} />;
            }}
          />
          {minData.length == 0 && (
            <View>
              <Text>Not Found</Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 4,
    paddingHorizontal: 10,
  },
  //   categories == cat
  catContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  catButton: {
    marginHorizontal: 6,
  },
  catTitle: {
    borderBottomWidth: 1,
    borderBottomColor: "#64646400",
    paddingBottom: 2,
  },
  Insurance: {
    width: WIDTH / 1.1,
    marginRight: 0,
    marginLeft: 0,
    paddingVertical: 30,
  },
  itemText: {},
  itemTitle: {},
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const categories = [
  {
    id: "1",
    name: "Life",
  },
  {
    id: "2",
    name: "Car",
  },
  {
    id: "3",
    name: "Home",
  },
  {
    id: "4",
    name: "Health",
  },
  {
    id: "5",
    name: "Travel",
  },
];

// popular Insurance

const lifeDta = [
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
  {
    id: "5",
    name: "Shanti-Amra Sobai",
    image: require("../../../assets/image/Max_Life_Insuranc.png"),
    coverage: 1000000,
    term: 5,
    premium: 540,
    ratting: 4,
  },
  {
    id: "6",
    name: "Shanti-Amra Sobai",
    image: require("../../../assets/image/Max_Life_Insuranc.png"),
    coverage: 1000000,
    term: 5,
    premium: 540,
    ratting: 4,
  },
  {
    id: "7",
    name: "Shanti-Amra Sobai",
    image: require("../../../assets/image/Max_Life_Insuranc.png"),
    coverage: 1000000,
    term: 5,
    premium: 540,
    ratting: 4,
  },
  {
    id: "8",
    name: "Shanti-Amra Sobai",
    image: require("../../../assets/image/Max_Life_Insuranc.png"),
    coverage: 1000000,
    term: 5,
    premium: 540,
    ratting: 4,
  },
];
