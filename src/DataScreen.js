import React from 'react'
import { TouchableOpacity, View, Text, FlatList, Alert } from 'react-native'
import Modal from 'react-native-modalbox'
import Styles from '../assets/Stylesheet'
import DatabaseManager from './DatabaseManager'
import { AntDesign } from '@expo/vector-icons'

export default class DataScreen extends React.Component {
    constructor() {
        super();
        DatabaseManager.init();
        this.state = { ingredients: [], modalVisible: false }
    }

    async componentDidMount() {
        var allIngredients = await DatabaseManager.getAllIngredientsForUser();
        console.log(allIngredients);
        this.setState({ ingredients: allIngredients });
        //this.setState({ ingredients: [{name:"bla", amount:4, expirationDate:new Date()}, {name:"blabla", amount:45.1, expirationDate:new Date()}, {name:"bluúúð", amount:712, expirationDate:new Date()}]});
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Modal style={[Styles.container, {backgroundColor:'indianRed', opacity: 0.6}]} position={"bottom"} ref={"modal"}>
                    <AntDesign style={{fontSize:120}} color='red' name='frowno'></AntDesign>
                </Modal>
                <FlatList contentContainerStyle={Styles.ingredientsContainer} data={this.state.ingredients}
                    renderItem={({ item }) => <View style={Styles.ingredientItem}>
                        <Text style={Styles.ingredientText}>{item.name}</Text>
                        <Text style={Styles.ingredientText}>Rennur út {item.expirationDate.toDateString()}</Text>
                        <TouchableOpacity onPress={() => {
                            Alert.alert(
                                'Throw away item',
                                'Why are you deleting this?',
                                [
                                    { text: 'I threw it away', onPress: () => this.refs.modal.open() },
                                    { text: 'I used it',  onPress: () => console.log('Cancel Pressed') },
                                    { text: 'Other', onPress: () => console.log('OK Pressed') },
                                ],
                                { cancelable: false },
                            );

                        }}><AntDesign style={{ fontSize: 28 }} name="delete" /></TouchableOpacity>
                    </View>
                    } />
            </View>

        )
    }
}