import { StyleSheet, Text, View, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contacts from './screens/Contacts';
//import Loguin from './screens/Loguin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import { TextInput, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import Banner from './Componets/Banner.js';


//crear constante para generar las rutas de las pantallas(screens)

let users = [
  {username: 'hgj',name:'anderson',password:22,role:1},
  {username: 'gfhd',name:'anderson',password:22,role:1}
]


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const {} = useForm();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle:{
          backgroundColor:"red"
        },
        headerTintColor:"white"
      }}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{title:'DAVIVIENDA'}}/>
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

        <Text style={{marginBottom:20,fontWeight:"bold",fontSize:20}}>INGRESA LOS DATOS DEL USUARIO</Text>
            <TextInput
              label="Nombre:"
              mode='Flat'
              left={<TextInput.Icon icon="account-box" />}
              style={{marginTop:20,backgroundColor:"#dcdcdc"}}
              // onBlur={onBlur}
              // onChangeText={onChange}
              // value={value}
            />
            <TextInput
              label="Numero de documento:"
              mode='flat'
              left={<TextInput.Icon icon="content-copy" />}
              style={{marginTop:25,backgroundColor:"#dcdcdc"}}
              // onBlur={onBlur}
              // onChangeText={onChange}
              // value={value}
            />

              <Button 
                style={{marginTop:40,backgroundColor:'red'}} 
                icon="send-check" 
                mode="contained" 
                //onPress={handleSubmit(onSubmit)}
                >
                  Ingresar
              </Button>
            
            <Text style={{marginTop:25,color:"#b5b5b5"}}>Terminos y Condiciones</Text>
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
        tabBarInactiveTintColor:'white',
        tabBarActiveBackgroundColor:'#b5b5b5',
        tabBarInactiveBackgroundColor:'#8b0000'
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{
        // tabBarStyle:{display:'none'},
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgstyle:{
    width:120,
    height:100,
    marginBottom:35
  }
});
