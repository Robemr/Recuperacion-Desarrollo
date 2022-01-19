import React, { useState } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, SafeAreaView, FlatList, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const usuarios = [
  { id: 1, nombre: 'Antonio Romero', edad: 32, género: 'Masculino', instrumento: 'Saxofón', ciudad: 'Sevilla' },

  { id: 2, nombre: 'Sara Durán', edad: 35, género: 'Femenino', instrumento: 'Violín', ciudad: 'Granada' },
  
  { id: 4, nombre: 'Raul Coronado', edad: 21, género: 'Masculino', instrumento: 'Trompeta', ciudad: 'Madrid' },
  
  { id: 5, nombre: 'Isabel Sánchez', edad: 45, género: 'Femenino', instrumento: 'Piano', ciudad: 'Huelva' },
  
  { id: 6, nombre: 'Josefa Navarro', edad: 77, género: 'Femenino', instrumento: 'Violín', ciudad: 'Barcelona' },
  
  { id: 7, nombre: 'Juan Pedrosa', edad: 19, género: 'Masculino', instrumento: 'Saxofón', ciudad: 'Santander' },
  
  { id: 9, nombre: 'Ramon Rey', edad: 50, género: 'Masculino', instrumento: 'Trompeta', ciudad: 'Málaga' },
  
  { id: 10, nombre: 'Esther Barros', edad: 33, género: 'Femenino', instrumento: 'Trompeta', ciudad: 'Valencia' },
  
  { id: 11, nombre: 'Ignacio Villalba', edad: 56, género: 'Masculino', instrumento: 'Piano', ciudad: 'Burgos' },
  
  { id: 12, nombre: 'Roberto Soria', edad: 42, género: 'Masculino', instrumento: 'Saxofón', ciudad: 'Zaragoza' },
  
  { id: 13, nombre: 'Cristina Macia', edad: 25, género: 'Femenino', instrumento: 'Guitarra', ciudad: 'Badajoz' },
  
  { id: 14, nombre: 'Erica Escudero', edad: 39, género: 'Femenino', instrumento: 'Guitarra', ciudad: 'Toledo' },
  
  { id: 15, nombre: 'Angel Lima', edad: 63, género: 'Masculino', instrumento: 'Guitarra', ciudad: 'Córdoba' }
];
const styles = StyleSheet.create(
  {
    principal: {
      textAlign: 'left',
      padding: 20,
      fontSize: 16,
      color: 'black',
    },
    centro:{
  
        textAlign: 'center',
        padding: 20,
        fontSize: 16,
        color: 'black',
   
    },
    negrita:{
      textAlign: 'left',
      padding: 20,
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
    },
    bienvenido: {
      textAlign: 'center',
      padding: 20,
      fontSize: 20,
      color: 'black',
    },
    cuadro:{
      height: 40,
    width: 225,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    marginTop:20
    }
  }
)

function Dispositivos() {
  return (
    <ScrollView >
      <Text style={styles.bienvenido}> Bienvenido a la historia de los dispositivos </Text>

      <Image source={{uri: 'https://ae01.alicdn.com/kf/H2b8fe246314b47ec98f3ce8bb874b97db/BlackBerry-Bold-Touch-tel-fono-inteligente-9900-m-vil-renovado-desbloqueado-5MP-3G-WIFI-Bluetooth.jpg_Q90.jpg_.webp'}}
       style={{width: 400, height: 300}} />
       <Text style={styles.centro}>BlackBerry</Text>
       <Text style={styles.negrita}>Fecha de lanzamiento:</Text><Text style={styles.principal}> 
       1999
      </Text>
      <Text style={styles.negrita}>Historia:</Text><Text style={styles.principal}> BlackBerry es una marca de teléfonos inteligentes desarrollada por la compañía canadiense BlackBerry,
      3​ que integra el servicio de correo electrónico móvil desde 1999; aunque incluye las aplicaciones típicas de un teléfono inteligente: libreta de direcciones, agenda, calendario, 
      lista de tareas, bloc de notas, navegador, aplicaciones de redes sociales, así como cámara de fotografía integrada en todos los dispositivos.
       BlackBerry se hizo famosa por su teclado QWERTY incorporado, y por su capacidad para enviar y 
       recibir correos electrónicos de Internet accediendo a las redes de las compañías de telefonía celular que brindan este servicio.
      </Text>
      <Text style={styles.negrita}>Conclusión:</Text><Text style={styles.principal}> 
      El 4 de enero de 2022 dejaron de funcionar las llamadas y SMS en dispositivos,
      a causa de que la empresa lleva años en descendiente y no supo adaptarse a la revolución tecnológica
      </Text>

      <Image source={{uri: 'https://cdn.andro4all.com/files/2021/01/moviles-recordados-motorola.jpg'}}
       style={{width: 300, height: 300}} />
        <Text style={styles.centro}>Motorola</Text>
        <Text style={styles.negrita}>Fecha de lanzamiento:</Text><Text style={styles.principal}> 
       1984
      </Text>
      <Text style={styles.negrita}>Historia:</Text><Text style={styles.principal}> Motorola Mobility LLC, comercializada como Motorola, es una empresa estadounidense de telecomunicaciones y electrónica de consumo,
       y filial del conglomerado tecnológico chino Lenovo. 
      La compañía fabrica principalmente teléfonos inteligentes y otros dispositivos móviles que ejecutan el sistema operativo Android.
      En 2011, Motorola Inc. fue dividida por dos firmas independientes. Motorola Mobility nació como spin-off con el que fuera el brazo de Motorola en materia de teléfonos, 
      mientras que Motorola Solutions se quedó con la parte de equipos como servidores y redes de telecomunicación después del renombramiento del nombre original.
       Por eso, el sucesor legal directo de Motorola es Motorola Solutions. En agosto de 2011, fue adquirida por Google por una cifra aproximada de 12.500 millones de dólares. 
      </Text>
      <Text style={styles.negrita}>Conclusión:</Text><Text style={styles.principal}> 
      Debido a las pérdidas económicas, el 29 de enero de 2014 vendió a la compañía china Lenovo por 2.910 millones de dólares.
      Hoy en día sigue en el mercado, pero no es de los grandes competidores.
      </Text>

      <Image source={{uri: 'https://i01.appmifile.com/webfile/globalimg/spainOria/K11R-white.png'}}
       style={{width: 300, height: 300}} />
               <Text style={styles.centro}>Xiaomi</Text>
        <Text style={styles.negrita}>Fecha de lanzamiento:</Text><Text style={styles.principal}> 
       2010
      </Text>
      <Text style={styles.negrita}>Historia:</Text><Text style={styles.principal}> Xiaomi es una empresa china dedicada a crear equipos electrónicos, tanto telefónicos como artículos para el hogar. 
      Xiaomi se ha abierto paso al mercado mundial abriendo varias tiendas físicas y en determinados países de Asia, Europa e Iberoamérica, además de su sitio web y distribuidores oficiales.
       Desde el lanzamiento de su primer teléfono inteligente en agosto de 2011, Xiaomi ha ganado cuota de mercado en China y ha ampliado su línea productos a otros dispositivos electrónicos.
      </Text>
      <Text style={styles.negrita}>Conclusión:</Text><Text style={styles.principal}> 
      Xiaomi se ha extendido durante los últimos años y es un gran competidor 
      en lo que se refiere a dispositivos android en el mercado
      </Text>

      <Image source={{uri: 'https://d1eh9yux7w8iql.cloudfront.net/product_images/36836_614ca137-616f-457d-b12f-739ed8c2bafa.jpg'}}
       style={{width: 300, height: 300}} />
               <Text style={styles.centro}>iPhone</Text>
        <Text style={styles.negrita}>Fecha de lanzamiento:</Text><Text style={styles.principal}> 
       2007
      </Text>
      <Text style={styles.negrita}>Historia</Text><Text style={styles.principal}> El iPhone es un teléfono móvil con herramientas multimedia, desarrollado por la empresa estadounidense Apple Inc. 
      Este tipo de dispositivo es conocido como smarthphone o teléfono inteligente, ya que cuenta con conexión a Internet, pantalla táctil, cámara de fotos, 
      la capacidad de reproducir música y películas, entre otras características.
      El iPhone, que cuenta con conectividad inalámbrica, salió a la venta el 29 de junio de 2007 en los Estados Unidos y, al poco tiempo, 
      la revista Time lo eligió como “Invento del Año”. El 11 de julio de 2008 fue lanzada una versión actualizada del teléfono, 
      conocida como iPhone 3G, que utiliza redes de tercera generación (3G) para la transmisión de datos.
      </Text>
      <Text style={styles.negrita}>Conclusión:</Text><Text style={styles.principal}> 
      Cuenta con gran cantidad de modelos y es de los mayores competidores.
      Según estudios, 4 de 5 de los teléfonos más vendidos en 2021 fue un iPhone.
      </Text>

    </ScrollView >
  );
}

function DetallesUsuarios({ route }) {
  const { instrumento } = route.params;

  function renderItem(instrumento, item) {

    if (instrumento == item.instrumento)
      return <View>
      <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
         <Image style={{ height: 80, width: 80 , marginLeft:10,alignItems:'center'}} source={{ uri: 'http://assets.stickpng.com/images/5a02cb3018e87004f1ca43e5.png' }} />
          <View>
            <Text>{item.nombre}</Text>
            <Text></Text>
            <Text style={{   fontWeight: 'bold'}} >Edad: {item.edad}</Text>
            <Text style={{   fontWeight: 'bold'}} >Ciudad: {item.ciudad}</Text>
            <Text style={{color:'red'}}>{item.instrumento}</Text>
          </View>
        </View>
          <View
            style={{
            borderBottomColor: 'blue',
            borderBottomWidth: 1,
            padding:10
            }}
          />
        </View>
  }

  return (
      <FlatList
        data={usuarios}
        renderItem={({ item }) => (<View>{renderItem(instrumento, item)}</View>)}
      />
  );
}

function ListadoUsuarios({ navigation }) {

  const [instrumento, setInstrumento] = useState();

  return (
    <View>
    <View style={{ flexDirection:"row"}}>
      <Text style={styles.principal}> Instrumento </Text>
      <TextInput style={styles.cuadro} onChangeText={instrumento => setInstrumento(instrumento)} />
      </View>
      <Button title='Buscar' style={styles.principal} onPress={() => navigation.navigate('Detalles', { instrumento: instrumento })} />
      <FlatList
  data={usuarios}
  renderItem={Mostrar}
  kayExtractor={item=>item.id}
  />
    
    </View>
  );

  function Mostrar({item}) {
    return(
    <View>
              <View style={{flexDirection:'row',alignItems:'center',marginLeft:20}}>
                 <Image style={{ height: 80, width: 80 , marginLeft:10,alignItems:'center'}} source={{ uri: 'http://assets.stickpng.com/images/5a02cb3018e87004f1ca43e5.png' }} />
                  <View>
                    <Text>{item.nombre}</Text>
                    <Text style={{color:'red'}}>{item.instrumento}</Text>
                  </View>
                </View>
                  <View
                    style={{
                    borderBottomColor: 'blue',
                    borderBottomWidth: 1,
                    padding:10
                    }}
                  />
                </View>
  );
                  }
  

}

function ListadoStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Listado" component={ListadoUsuarios}
        options={{
          title: 'Listado de usuarios',
          headerStyle: {
            backgroundColor: '#9FE57F',
          },
          headerTintColor: 'black',
          headerTitleAlign: 'center'
        }} />
      <HomeStack.Screen name="Detalles" component={DetallesUsuarios}
        options={{
          title: 'Listado de usuarios',
          headerStyle: {
            backgroundColor: '#9FE57F',
          },
          headerTintColor: 'black',
          headerTitleAlign: 'center'
        }} />
    </HomeStack.Navigator>
  );
}

function App() {
  return (

    <NavigationContainer style={{backgroundColor: '#9FE57F'}}>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;
            if (route.name === 'Músicos') {
              iconName = focused ? 'md-musical-notes' : 'md-musical-notes-outline';
                        } else if (route.name === 'Historia') {
              iconName = focused ? 'md-library' : 'md-library-outline';
            }

            return <Ionicons name={iconName} size={size} color={color}/>;
          },
         
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: '#9FE57F',
          tabBarInactiveBackgroundColor: '#9FE57F',
          
        })}
      >

        <Tab.Screen options={{ headerShown: false }} name="Historia" component={Dispositivos}
          options={{
            title: 'Historia',
            headerStyle: {
              backgroundColor: '#9FE57F',
            },
            headerTitleAlign: 'center',
            headerTintColor: 'black'
            
          }} />
        <Tab.Screen options={{ headerShown: false }} name="Músicos" component={ListadoStackScreen} />

      </Tab.Navigator>
    </NavigationContainer>

  )
}

export default App;