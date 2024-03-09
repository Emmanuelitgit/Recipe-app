import React from 'react';
import Login from "../Screens/Login";
import Register from "../Screens/Register"
import Welcome from "../Screens/Welcome";
import RecipeList from '../Screens/RecipeList';
import SingleRecipe from '../Screens/SingleRecipe';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Navigation = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'
        screenOptions={{
            headerShown:false
        }}
        >
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='RecipeList' component={RecipeList}/>
            <Stack.Screen name='SingleRecipe' component={SingleRecipe}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation