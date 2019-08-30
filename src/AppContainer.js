import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FrontScreen from './FrontScreen'
import RecipeScreen from './RecipeScreen'
import DataScreen from './DataScreen'

const AppNavigator = createStackNavigator({
  Home: FrontScreen,
  Recipes: RecipeScreen,
  Data: DataScreen
},{
    initialRouteName:"Home"
});

export default createAppContainer(AppNavigator);