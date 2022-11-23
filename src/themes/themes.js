import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const COLORS = {
  blue400: "#42a5f5",
  blueL400: "#80d6ff", // l = light
  blueD400: "#0077c2", // D = dark
  //
  white: "#FFFFFF",
  //
  gray300: "#eeeeee",
  gray500: "#bcbcbc",
  gray400: "#8D9295",
  grayD500: "#707070",
  gray600: "#646464",
  gray700: "#595959",
  gray800: "#4A4A4A",
};
const ROW = {
  flexDirection: "row",
  alignItems: "center",
};
const ROWJ = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const SPACING = [2, 4, 8, 12, 16, 20, 28, 32];

const TYPOGRAPHY = {
  primary: "Roboto-Regular",
  primaryBold: "Roboto-Medium",
  bold: "Roboto-Bold",
};

export {
  COLORS,
  SPACING,
  ROW,
  ROWJ,
  width as WIDTH,
  height as HEIGHT,
  TYPOGRAPHY,
};
