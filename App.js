import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Loguin from './screens/Loguin';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import ContactScreen from "./screens/Contact.screen";
import ProductsScreen from "./screens/Products.Screen";
import HomeScreen from "./screens/Home.screen";

export const  users = [
  { email: "exampl@example.com", name: "Jane Doe", password: "12345", role: 1 },
  { email: "xample@xampl.com", name: "John Doe", password: "12345", role: 1 },
];

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const {} = useForm();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ title: "" }}
        />
            <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "" }}
        />
            <Stack.Screen
          name="ContactScreen"
          component={ContactScreen}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, //lo que hace es no mostrar cada tittulo del componente....
        tabBarActiveTintColor: "Blue",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "#b5b5b5",
        tabBarInactiveBackgroundColor: "#8b0000",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarStyle:{display:'none'},
          tabBarIcon: (tabInfo) => <MaterialIcons name="home" size={22} />,
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          tabBarIcon: (tabInfo) => <MaterialIcons name="category" size={22} />,
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactScreen}
        options={{
          tabBarIcon: (tabInfo) => <MaterialIcons name="call" size={22} />,
        }}
      />
    </Tab.Navigator>
  );
}
