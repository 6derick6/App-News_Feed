import * as React from 'react';
import { Text, View, Button, ScrollView, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import * as firebase from 'firebase';

function HomeScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <View style={{ flex: 0.3}}>

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

      <View style={{flex:0.7,padding:20}}>

        <View style={{width:50,height:2,backgroundColor:'#069',position:'absolute',left:40,top:40}}>
          <Text>Mais noticias</Text>

          <ScrollView contentContainerStyle={{padding:20}} style={{flex:1}}>
            <View style={{flexDirection:'row',marginBottom:10}}>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Noticia',{titulo:'Um titulo de exemplo',conteudo:'minha noticia de testes!'})}>
                <Image source={{uri: 'https://picsum.photos/200/300'}} style={{width:100,height:100}} />
                <Text style={{padding:10}}>Minha noticia de teste</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginBottom:10}}>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Noticia',{titulo:'Um titulo de exemplo',conteudo:'minha noticia de testes!'})}>
                <Image source={{uri: 'https://picsum.photos/200/300'}} style={{width:100,height:100}} />
                <Text style={{padding:10}}>Minha noticia de teste</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginBottom:10}}>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Noticia',{titulo:'Um titulo de exemplo',conteudo:'minha noticia de testes!'})}>
                <Image source={{uri: 'https://picsum.photos/200/300'}} style={{width:100,height:100}} />
                <Text style={{padding:10}}>Minha noticia de teste</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginBottom:10}}>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Noticia',{titulo:'Um titulo de exemplo',conteudo:'minha noticia de testes!'})}>
                <Image source={{uri: 'https://picsum.photos/200/300'}} style={{width:100,height:100}} />
                <Text style={{padding:10}}>Minha noticia de teste</Text>
              </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginBottom:10}}>
              <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>navigation.navigate('Noticia',{titulo:'Um titulo de exemplo',conteudo:'minha noticia de testes!'})}>
                <Image source={{uri: 'https://picsum.photos/200/300'}} style={{width:100,height:100}} />
                <Text style={{padding:10}}>Minha noticia de teste</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

      </View>

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
