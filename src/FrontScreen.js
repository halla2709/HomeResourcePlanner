import React from 'react'
import {View, Button, Image} from 'react-native'
import Styles from '../assets/Stylesheet'

export default class FrontScreen extends React.Component {
    render() {
        return (
            <View style={Styles.container}>
                <Image source={require("../assets/home.png")}></Image>
                <View style={Styles.buttonContainer}>
                    <Button onPress={()=>console.log("Add ingredients")} title="Bæta við innkaupum"></Button>
                    <Button onPress={() => {
                        console.log("Find recipe"); 
                        this.props.navigation.navigate('Recipes');
                     } } title="Finna uppskrift"></Button>
                    <Button onPress={()=>{console.log("Get ingredient list");
                    this.props.navigation.navigate('Data');
                    }} title="Hvað er til?"></Button>
                </View>
            </View>
            
        )
    }
}
