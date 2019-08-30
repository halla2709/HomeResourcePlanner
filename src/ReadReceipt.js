import React from 'react'
import {
    ActivityIndicator,
    Image,
    Platform,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    Button,
    View,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import DatabaseManager from "./DatabaseManager";



export default class ReadReceipt extends React.Component {
    state = {
        hasCameraPermission: null,
        scanned: false,
        json: null
    };
    shoppingList = [
        {name: 'bacon', amount: 200},
        {name: 'butter', amount: 400},
        {name: 'oregano', amount: 70},
        {name: 'potatoes', amount: 1000},
        {name: 'pepper', amount: 70}
    ];

    async componentDidMount() {
        this.getPermissionsAsync();
    }

    getPermissionsAsync = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    };

    constructor() {
        super();
        console.log("Constructor");
        this.dBInstance = new DatabaseManager();
    }

    render() {
        const {hasCameraPermission, scanned} = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}>
                <BarCodeScanner
                    onBarCodeScanned= {scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            </View>
        );
    };

    handleBarCodeScanned = ({type, data}) => {
        this.setState({scanned: true});
        this.dBInstance.addList(this.shoppingList).then(
            this.props.navigation.replace('Data')
        )
    }
}