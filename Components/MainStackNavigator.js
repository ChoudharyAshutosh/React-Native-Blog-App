import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home'
import CreatePost from './CreatePost'
import CreateImagePost from './CreateImagePost'
import CreateTextPost from './CreateTextPost'
const Stack= createStackNavigator()
const MainStackNavigator = () => {
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
export default MainStackNavigator
