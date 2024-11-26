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
import { CartContext, CartProvider } from "./Context/CartContext";
import { useContext } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
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
  return routeName !== "ProductDetails";
};

const AppTabs = () => {
  const { getCartCount } = useContext(CartContext); // Đảm bảo gọi useContext bên trong CartProvider

  return (
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
        tabBarStyle: {
          height: 60,
        },
      })}
    >
      <Tab.Screen
        name="Home_Stack"
        component={MyHomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route) ? "flex" : "none",
            height: 60,
            paddingBottom: 10,
            marginBottom: 10,
          },
        })}
      />
      <Tab.Screen name="Reorder" component={ReorderScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: `Cart (${getCartCount()})`, // Hiển thị số lượng giỏ hàng
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        {/* <SafeAreaView style={styles.safeArea}> */}
        <AppTabs />
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "yellow", // Màu nền toàn bộ
  },
  safeAreaTop: {
    backgroundColor: "red", // Màu cho khu vực trên
    // flex: 1,
  },
  safeAreaBottom: {
    backgroundColor: "black", // Màu cho khu vực dưới
    flex: 1,
  },
});
