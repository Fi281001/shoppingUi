import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/HomeScreen";
import ProductDetailsScreen from "./screen/ProductDetailsScreen";
import ReorderScreen from "./screen/ReorderScreen";
import CartScreen from "./screen/CartScreen";
import AccountScreen from "./screen/AccountScreen";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tạo stack cho màn hình Home
const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};
const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  // Nếu đang ở màn hình ProductDetails thì ẩn Tab Bar
  return routeName !== "ProductDetails";
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home_Stack") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Reorder") {
              iconName = focused ? "repeat" : "repeat-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Account") {
              iconName = focused ? "person" : "person-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Home_Stack"
          component={MyHomeStack}
          options={({ route }) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route) ? "block" : "none",
            },
          })}
        />
        <Tab.Screen name="Reorder" component={ReorderScreen} />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={({ route }) => ({
            tabBarStyle: {
              display: "none",
            },
          })}
        />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
