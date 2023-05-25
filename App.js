import * as React from 'react';
import { Text, View, Button, ScrollView, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import * as firebase from 'firebase';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1}}>

     <ScrollView horizontal contentContainerStyle={{height:300, width:'200%'}} style={{flex:1}}>

      <ImageBackground source={{uri: 'https://picsum.photos/200/300'}} style={styles.image}>
        <TouchableOpacity onPress={()=>navigation.navigate('Noticia',{titulo:'Um titulo de exemplo',conteudo:'minha noticia de testes!'})} style={{width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'flex-end'}}>
          <Text style={{fontSize:27, color:'white'}}>A minha notícia</Text>
        </TouchableOpacity>
      </ImageBackground>

      <ImageBackground source={{uri: 'https://picsum.photos/200/300'}} style={styles.image}>
        <TouchableOpacity style={{width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'flex-end'}}>
          <Text style={{fontSize:27, color:'white'}}>A minha notícia</Text>
        </TouchableOpacity>
      </ImageBackground>

     </ScrollView>

    </View>
  );
}

function NoticiaScreen({route,navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{route.params.titulo}</Text>
      <Text>{route.params.conteudo}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Portal" component={HomeScreen} />
        <Tab.Screen name="Noticia" component={NoticiaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    resizeMode:'cover',
    justifyContent:'flex-end',
    width:'100%'
  }
});
