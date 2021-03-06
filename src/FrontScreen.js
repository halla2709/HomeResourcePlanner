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
                    <TouchableHighlight underlayColor="#EEE7E9" style={[Styles.button, { flex: 0.45, backgroundColor: 'deeppink' }]} onPress={() => {
                        this.props.navigation.navigate('ReadReceipt');
                    }}>
                        <View style={Styles.buttonContent}>
                            <AntDesign style={Styles.buttonIcon} name="qrcode" />
                            <Text style={Styles.buttonText}>Add new items</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#EEE7E9" style={[Styles.button, { flex: 0.55, backgroundColor: 'darkviolet' }]} onPress={() => {
                        this.props.navigation.navigate('Recipes');
                    }}>
                        <View style={Styles.buttonContent}>
                            <MaterialCommunityIcons style={Styles.buttonIcon} name="food-apple-outline" />
                            <Text style={Styles.buttonText}>Find recipes</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={Styles.buttonColumn}>
                    <TouchableHighlight underlayColor="#EEE7E9" style={[Styles.button, { flex: 0.55, backgroundColor: 'dodgerblue' }]} onPress={() => {
                        this.props.navigation.navigate('Data');
                    }}>
                        <View style={Styles.buttonContent}>
                            <MaterialCommunityIcons style={Styles.buttonIcon} name="fridge-outline" />
                            <Text style={Styles.buttonText}>Look at inventory</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="#EEE7E9" style={[Styles.button, { flex: 0.45, backgroundColor: 'coral' }]} onPress={() => {
                    }}>
                        <View style={Styles.buttonContent}>
                            <MaterialCommunityIcons style={Styles.buttonIcon} name="settings-outline" />
                            <Text style={Styles.buttonText}>Settings</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            </View>
            

        )
    }
}
