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
    View
} from 'react-native';
import Modal from 'react-native-modalbox'
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import DatabaseManager from "./DatabaseManager";
import Styles from '../assets/Stylesheet';

export default class ReadReceipt extends React.Component {
    state = {
        hasCameraPermission: null,
        scanned: false,
        json: null
    };
    shoppingList = [
        {name: 'chicken', amount: 333},
        {name: 'bacon', amount: 200},
        {name: 'butter', amount: 400},
        {name: 'potatoes', amount: 1000},
        {name: 'white wine', amount: 1000},
        {name: 'garlic', amount: 200}
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
                <Modal position={"bottom"} ref={"modal"}>
                    <ActivityIndicator size="large"/>
                </Modal>
            </View>
        );
    };

    handleBarCodeScanned = ({type, data}) => {
        this.setState({scanned: true});
        var navigate = this.props.navigation.replace;
        this.dBInstance.addList(this.shoppingList).then(function(value) {
            console.log("Navigate");
            navigate('Data');
        });
        this.refs.modal.open();
    }
}