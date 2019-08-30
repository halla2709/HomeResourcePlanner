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



export default class ReadReceipt extends React.Component {
    state = {
        hasCameraPermission: null,
        scanned: false,
        json: null
    };

    fakeJson = {
        Bananas: {
            quantity: 1.055,
            itemType: "food",
            unit: "kg",
            unitCost: 240
        },
        Onion: {
            pack: "4",
            packUnit: "pcs",
            quantity: "1",
            itemType: "food",
            unit: "pcs",
            unitCost: "349",
        },
        Spinach: {
            quantity: 1,
            unit: "pcs",
            unitCost: "349",
            pack: 200,
            packUnit: "g",
            itemType: "food",
        }
    };


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
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            </View>
        );
    };

    handleBarCodeScanned = ({type, data}) => {
        this.setState({scanned: true});
        //TODO adda í database
        this.props.navigation.navigate('Data');
    }
}