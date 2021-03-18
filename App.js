import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import {Platform} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Components/Home'
import CreatePost from './Components/CreatePost'
import CreateImagePost from './Components/CreateImagePost'
import CreateTextPost from './Components/CreateTextPost'
const Stack= createStackNavigator()
const App = () => {
  useEffect(()=>{
    (async ()=>{
      if(Platform !=='web'){
        const {status}= await ImagePicker.requestMediaLibraryPermissionsAsync()
        if(status != 'granted'){
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  },[])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name='CreateImagePost' component={CreateImagePost}/>
        <Stack.Screen name="CreateTextPost" component={CreateTextPost}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App
