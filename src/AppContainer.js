import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FrontScreen from './FrontScreen'
import RecipeScreen from './RecipeScreen'
import DataScreen from './DataScreen'
import ReadReceipt from './ReadReceipt'

const AppNavigator = createStackNavigator({
  Home: FrontScreen,
  Recipes: RecipeScreen,
  Data: DataScreen,
    ReadReceipt: ReadReceipt
},{
    initialRouteName:"Home"
});

export default createAppContainer(AppNavigator);