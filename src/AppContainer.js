import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FrontScreen from './FrontScreen'
import RecipeScreen from './RecipeScreen'

const AppNavigator = createStackNavigator({
  Home: FrontScreen,
  Recipes: RecipeScreen
},{
    initialRouteName:"Home"
});

export default createAppContainer(AppNavigator);