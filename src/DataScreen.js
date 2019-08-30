import React from 'react'
import {View, Text, Image} from 'react-native'
import Styles from '../assets/Stylesheet'
import DatabaseManager from './DatabaseManager'

export default class DataScreen extends React.Component {
    constructor() {
        super();
        DatabaseManager.init();
    }

    async componentDidMount() {
        var allIngredients = await DatabaseManager.getAllIngredientsForUser();
        console.log(allIngredients);
    }
    render() {
        return (
            <View style={Styles.container}>
                <Text>DATA</Text>
            </View>
            
        )
    }
}