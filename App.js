import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text } from "react-native";
import HomeScreen from "./src/screens/Home/HomeScreen";
import { useFonts } from "expo-font";
import InsuranceListScreen from "./src/screens/Home/InsuranceListScreen";
import ProductDetailsScreen from "./src/screens/Home/ProductDetailsScreen";
import PremiumCalculateScreen from "./src/screens/Home/PremiumCalculateScreen";
import CompareOffersScreen from "./src/screens/Home/CompareOffersScreen";
import PremiumAmountScreen from "./src/screens/Home/PremiumAmountScreen";
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading......</Text>;
  }

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          animation: "slide_from_right",
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InsuranceList" component={InsuranceListScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen
          name="PremiumCalculate"
          component={PremiumCalculateScreen}
        />
        <Stack.Screen name="PremiumAmount" component={PremiumAmountScreen} />
        <Stack.Screen name="CompareOffers" component={CompareOffersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
