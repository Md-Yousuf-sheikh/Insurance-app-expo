import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  ListViewBase,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { COLORS, WIDTH } from "../../themes/themes";
import PrimaryHeader from "../../components/Headers/PrimaryHeader";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../../components/Inputs/CustomInput";
import { fakeData } from "../../../data";

export default function CompareOffersScreen({ route }) {
  const mainData = fakeData;
  const [mainDataLeft, setMainDataLeft] = useState(mainData);
  const [mainDataRight, setMainDataRight] = useState(mainData);

  const leftItem = route?.params?.item;
  const [dataLeft, setDataLeft] = useState(leftItem);
  const [dataRight, setDataRight] = useState(leftItem);
  // open search list
  const [rightListOpen, setRightListOpen] = useState(false);
  const [leftListOpen, setLeftListOpen] = useState(false);
  // get data search
  const [searchLeftText, setSearchLeftText] = useState("");
  const [searchRightText, setSearchRightText] = useState("");

  // handel search function
  const searchFilterLeft = (text) => {
    if (mainData.length > 0) {
      let filterList = mainData?.filter((item) => {
        const itemName = item?.name?.toLowerCase();
        const userTypeText = text?.toLowerCase();
        return itemName?.indexOf(userTypeText) > -1;
      });
      if (text?.length > 0) {
        setMainDataLeft(filterList);
      }
    }
    if (text?.length < 1) {
      setMainDataLeft(mainData);
    }
  };
  //
  const searchFilterRight = (text) => {
    if (mainData?.length > 0) {
      let filterList = mainData?.filter((item) => {
        const itemName = item?.name?.toLowerCase();
        const userTypeText = text?.toLowerCase();
        return itemName?.indexOf(userTypeText) > -1;
      });
      if (text?.length > 0) {
        setMainDataRight(filterList);
      }
    }
    if (text?.length < 1) {
      setMainDataRight(mainData);
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <View style={styles.container}>
          <Text preset="h3">Compare your Offers</Text>
          {/* Search Compare offers Input */}
          <View style={styles.searchInputGroupContainer}>
            <View style={styles.searchGroup}>
              <CustomInput
                placeholder={"Search Policy..."}
                seconder={true}
                search={true}
                leftIcon={true}
                setValue={(text) => searchFilterLeft(text)}
                onFocuses={setLeftListOpen}
              />
              <CustomInput
                placeholder={"Search Policy..."}
                seconder={true}
                search={true}
                leftIcon={true}
                setValue={(text) => searchFilterRight(text)}
                onFocuses={setRightListOpen}
              />
            </View>
            {/* Search left list  */}
            {leftListOpen && (
              <ScrollView
                nestedScrollEnabled={true}
                style={styles.searchListContainer}
              >
                {mainDataLeft?.map((item, index) => {
                  // console.log(item);
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setDataLeft(item);
                        setLeftListOpen(false);
                      }}
                      key={index}
                      style={styles.searchSelectItem}
                    >
                      <Text>{item?.name}</Text>
                    </TouchableOpacity>
                  );
                })}
                {mainDataLeft.length == 0 && (
                  <View style={styles.notFoundList}>
                    <Text preset="h5">Not Found</Text>
                  </View>
                )}
              </ScrollView>
            )}
            {/* Search Right list  */}
            {rightListOpen && (
              <ScrollView
                nestedScrollEnabled={true}
                style={styles.searchListContainer}
              >
                {mainDataRight?.map((item, index) => {
                  // console.log(item);
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setDataRight(item);
                        setRightListOpen(false);
                      }}
                      key={index}
                      style={styles.searchSelectItem}
                    >
                      <Text>{item?.name}</Text>
                    </TouchableOpacity>
                  );
                })}
                {mainDataRight.length == 0 && (
                  <View style={styles.notFoundList}>
                    <Text preset="h5">Not Found</Text>
                  </View>
                )}
              </ScrollView>
            )}
          </View>
          {/* Group images show */}
          <View style={styles.imageGroup}>
            <Image
              style={styles.image}
              source={{
                uri: dataLeft?.images,
              }}
            />
            <Text style={styles.vs}>VS</Text>
            <Image
              style={styles.image}
              source={{
                uri: dataRight?.images,
              }}
            />
          </View>
          {/* Show all data table list */}
          <View>
            <View style={[styles.tableRow, { borderTopWidth: 1 }]}>
              <Text style={styles.tableText}>{dataLeft?.name}</Text>
              <Text style={[styles.tableTextCs]}>Name</Text>
              <Text style={styles.tableText}>{dataRight?.name}</Text>
            </View>
            <View style={[styles.tableRow]}>
              <Text style={styles.tableText}>{dataLeft?.type}</Text>
              <Text style={[styles.tableTextCs]}>Type</Text>
              <Text style={styles.tableText}>{dataRight?.type}</Text>
            </View>
            <View style={[styles.tableRow]}>
              <Text style={styles.tableText}>{dataLeft?.coverage}</Text>
              <Text style={[styles.tableTextCs]}>Coverage</Text>
              <Text style={styles.tableText}>{dataRight?.coverage}</Text>
            </View>
            <View style={[styles.tableRow]}>
              <Text style={styles.tableText}>{dataLeft?.paymentMode}</Text>
              <Text style={[styles.tableTextCs]}>Payment Mode</Text>
              <Text style={styles.tableText}>{dataRight?.paymentMode}</Text>
            </View>
            <View style={[styles.tableRow]}>
              <Text style={styles.tableText}>{dataLeft?.stampFee}</Text>
              <Text style={[styles.tableTextCs]}>Stamp Fee</Text>
              <Text style={styles.tableText}>{dataRight?.stampFee}</Text>
            </View>
            <View style={[styles.tableRow]}>
              <Text style={styles.tableText}>{dataLeft?.policyTerm}</Text>
              <Text style={[styles.tableTextCs]}>Policy Term</Text>
              <Text style={styles.tableText}>{dataRight?.policyTerm}</Text>
            </View>
            <View style={[styles.tableRow]}>
              <Text style={styles.tableText}>{dataLeft?.total}</Text>
              <Text style={[styles.tableTextCs]}>Total</Text>
              <Text style={styles.tableText}>{dataRight?.total}</Text>
            </View>
            <View style={[styles.tableRow]}>
              <Text style={styles.tableText}>{dataLeft?.surrenderValue}</Text>
              <Text style={[styles.tableTextCs]}>Surrender Value</Text>
              <Text style={styles.tableText}>{dataRight?.surrenderValue}</Text>
            </View>
            <View style={[styles.tableRow]}>
              <Text style={styles.tableText}>{dataLeft?.premiumValue}</Text>
              <Text style={[styles.tableTextCs]}>Premium Value</Text>
              <Text style={styles.tableText}>{dataRight?.premiumValue}</Text>
            </View>
            <View style={[styles.tableRow]}>
              <Text style={styles.tableText}>
                {dataLeft?.coverageFromDayOne}
              </Text>
              <Text style={[styles.tableTextCs]}>Coverage From Day One</Text>
              <Text style={styles.tableText}>
                {dataRight?.coverageFromDayOne}
              </Text>
            </View>
          </View>
          {/* Buy now button */}
          <View style={styles.buttonGroup}>
            <PrimaryButton title={"Buy Now"} style={styles.buyButton} />
            <PrimaryButton title={"Buy Now"} style={styles.buyButton} />
          </View>
          {/* Add more to compare */}
          <View style={styles.addMoreContainer}>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.addMoreText}>Add more to compare</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  searchInputGroupContainer: {
    position: "relative",
  },
  searchGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  imageGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    alignItems: "center",
  },
  vs: {
    padding: 5,
    backgroundColor: COLORS.gray800,
    borderRadius: 30,
    width: 30,
    height: 30,
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    marginHorizontal: 5,
  },
  image: {
    width: WIDTH / 2.5,
    height: WIDTH / 4,
    borderRadius: 5,
    resizeMode: "contain",
  },
  // search list container
  searchListContainer: {
    position: "absolute",
    maxHeight: 200,
    backgroundColor: COLORS.gray300,
    width: "100%",
    zIndex: 10,
    top: 75,
    borderRadius: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: COLORS.gray300,
  },
  searchSelectItem: {
    paddingVertical: 10,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
  // Table row
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: COLORS.gray300,
    paddingVertical: 7,
    alignItems: "center",
  },
  tableText: {
    width: "33%",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 15,
    paddingVertical: 10,
    textTransform: "capitalize",
  },
  tableTextCs: {
    width: "33%",
    textAlign: "center",
    fontSize: 15,
    paddingVertical: 10,
    color: COLORS.gray700,
    fontWeight: "700",
  },
  // buy now button group
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  buyButton: {
    borderRadius: 5,
    // paddingVertical: 15,
    paddingHorizontal: 40,
  },
  // ad more button text
  addMoreContainer: {
    marginVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  addMoreText: {
    textDecorationLine: "underline",
  },
  //
  notFoundList: {
    paddingVertical: 5,

    alignItems: "center",
  },
});
