import React from 'react'
import {View, Button, Image} from 'react-native'
import Styles from '../assets/Stylesheet'
import RecipeComponent from './RecipeComponent'
import RecipeGetter from './RecipeGetter'
export default class RecipeScreen extends React.Component {
    constructor() {
        super();
        console.log("Constructor");
        RecipeGetter.getRecipesFromApi();
    }
    render() {
        return (
            <View style={Styles.cardContainer}>
                <RecipeComponent/>
            </View>
            
        )
    }
}