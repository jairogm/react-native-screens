import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contacts from './screens/Contacts';
import Loguin from './screens/Loguin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import { TextInput, Button } from 'react-native-paper';


//crear constante para generar las rutas de las pantallas(screens)

let users = [
  {username: 'hgj',name:'anderson',password:22,role:1},
  {username: 'gfhd',name:'anderson',password:22,role:1}
]


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{title:'Sistema tecnologico'}}/>
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{title:'Inicio'}}/>
        <Stack.Screen name="Contacts" component={Contacts} options=      {{title:'Contactanos'}}/>
        <Stack.Screen name='Loguin'component={Loguin} options={{title:'Loguin'}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:20}}>Inicio de Sección</Text>
      {/* <Button
      title=" Ir a Productos"
      onPress={() =>{
      navigation.navigate('Products')
      }}
      /> */}
      {/* <Button
      title="Registrate"
      onPress={() =>{
      navigation.navigate('Loguin')
      }}
      /> */}

    </View>
  );
}
function ProductsScreen({navigation}){
  let title="Este es el titulo"
  let fullname = "Roxy la mejor de lo mejor"
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:20}}>Estamos en Productos</Text>
    </View>
  );
}

function HomeTabs(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown:false, //lo que hace es no mostrar cada tittulo del componente....
        tabBarActiveTintColor:'Blue',
        tabBarInactiveTintColor:'red',
        tabBarActiveBackgroundColor:'powderblue',
        tabBarInactiveBackgroundColor:'blue'
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarStyle:{display:'none'},
        tabBarIcon:(tabInfo) => (<MaterialIcons name='home' size={22}/>)
      }}/>
      <Tab.Screen name='Products' component={ProductsScreen} options={{
        tabBarIcon:(tabInfo) => (<MaterialIcons name='category' size={22}/>)
      }}/>
      <Tab.Screen name='Contacts' component={Contacts} options={{
        tabBarIcon:(tabInfo) => (<MaterialIcons name='call' size={22}/>)
      }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
