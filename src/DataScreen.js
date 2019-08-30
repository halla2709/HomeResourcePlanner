import React from 'react'
import {View, Text, Image} from 'react-native'
import Styles from '../assets/Stylesheet'
import DatabaseManager from './DatabaseManager'

export default class DataScreen extends React.Component {
  //  this.dBInstance;    
    constructor() {
        super();
        this.dBInstance = new DatabaseManager();
    }

    async componentDidMount() {
        var allIngredients = await this.dBInstance.getAllIngredientsForUser();
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