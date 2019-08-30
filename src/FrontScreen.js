import React from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import Styles from '../assets/Stylesheet'

export default class FrontScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={Styles.container}>
            <View style={Styles.buttonContainer}>
                <View style={Styles.buttonColumn}>
                    <TouchableHighlight style={[Styles.button, { flex: 0.45, backgroundColor: 'deeppink' }]} onPress={() => {
                        console.log("Add ingredients")
                    }}>
                        <View style={Styles.buttonContent}>
                            <AntDesign style={Styles.buttonIcon} name="qrcode" />
                            <Text style={Styles.buttonText}>Bæta við innkaupum</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Styles.button, { flex: 0.55, backgroundColor: 'darkviolet' }]} onPress={() => {
                        console.log("Find recipe");
                        this.props.navigation.navigate('Recipes');
                    }}>
                        <View style={Styles.buttonContent}>
                            <MaterialCommunityIcons style={Styles.buttonIcon} name="food-apple-outline" />
                            <Text style={Styles.buttonText}>Hvað á að elda?</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={Styles.buttonColumn}>
                    <TouchableHighlight style={[Styles.button, { flex: 0.55, backgroundColor: 'dodgerblue' }]} onPress={() => {
                        console.log("Get ingredient list");
                        this.props.navigation.navigate('Data');
                    }}>
                        <View style={Styles.buttonContent}>
                            <MaterialCommunityIcons style={Styles.buttonIcon} name="fridge-outline" />
                            <Text style={Styles.buttonText}>Hvað er til?</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={[Styles.button, { flex: 0.45, backgroundColor: 'coral' }]} onPress={() => {
                        console.log("User")
                    }}>
                        <View style={Styles.buttonContent}>
                            <MaterialCommunityIcons style={Styles.buttonIcon} name="settings-outline" />
                            <Text style={Styles.buttonText}>Stillingar</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            </View>
            

        )
    }
}
