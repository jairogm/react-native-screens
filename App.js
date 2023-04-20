import { StyleSheet, Text, View,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contacts from './screens/Contacts';


//crear constante para generar las rutas de las pantallas(screens)
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen name="Products" component={ProductsScreen} options={{title:'Productos'}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Inicio'}}/>
        <Stack.Screen name="Contacts" component={Contacts} options={{title:'Contactos0'}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:20}}>Estamos en Inicio</Text>
      <Button
      title=" Ir a Productos"
      onPress={() =>{
      navigation.navigate('Products')
      }}

      />

    </View>
  );
}
function ProductsScreen({navigation}){
  let title="Este es el titulo"
  let fullname = "Roxy la mejor de lo mejor"
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:20}}>Estamos en Productos</Text>
      <Button
      title="Contact"
      onPress={()=>{
      navigation.navigate('Contacts',{title:title,name:fullname})
      }}

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
