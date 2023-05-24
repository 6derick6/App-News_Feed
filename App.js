import * as React from 'react';
import { Text, View, Button, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import * as firebase from 'firebase';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1}}>

     <ScrollView horizontal contentContainerStyle={{height:300, width:'200%'}} style={{flex:1}}>
      <ImageBackground source={{uri: 'https://picsum.photos/200/300'}} style={styles.image}>
        <View style={{position:'absolute',left:0,top:0,width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.5)'}}></View>
        <Text style={{fontSize:29, color:'white'}}>A minha Notícia!</Text>
      </ImageBackground>
     </ScrollView>

    </View>
  );
}

function NoticiaScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

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
    width:'50%'
  }
});
