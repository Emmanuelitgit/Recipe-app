import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Category from '../Components/Category';

const RecipeList = ({navigation}) => {

  const handleNavigate = (itemId) =>{
    navigation.navigate("SingleRecipe", {itemId})
  }

  return (
        <Category
         nav={handleNavigate(itemId)}
        />
  )
}

export default RecipeList