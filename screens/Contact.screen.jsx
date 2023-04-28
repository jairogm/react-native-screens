import { StyleSheet, Text, View, Button } from "react-native";

export default function ContactScreen({ navigation, route }) {
    const {name, email} = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginBottom: 10 }}>Hola, {name} </Text>
    </View>
  );
}
