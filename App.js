import 'react-native-gesture-handler';
import React,{useEffect, useState} from 'react';
import {Platform} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import MainStackNavigator from './Components/MainStackNavigator'
import {Provider as StoreProvider} from 'react-redux'
import store from './Components/redux/store'
const App = () => {
  const [hk, setHK]=useState("This is state data")
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
    <StoreProvider store={store}>
      <MainStackNavigator/>
    </StoreProvider>
  );
};
export default App
