import React from 'react'
import * as firebase from 'firebase';
import 'firebase/firestore';
import {View, Button, Image} from 'react-native'
import Styles from '../assets/Stylesheet'
import RecipeComponent from './RecipeComponent'
import RecipeGetter from './RecipeGetter'



export default class DataScreen extends React.Component {
    constructor() {
        super();
        // Your web app's Firebase configuration
        var firebaseConfig = {
        apiKey: "AIzaSyBItM1QKCxGx5x5lIM7t6VmIAg10SHXR3c",
        authDomain: "home-resource-planning.firebaseapp.com",
        databaseURL: "https://home-resource-planning.firebaseio.com",
        projectId: "home-resource-planning",
        storageBucket: "",
        messagingSenderId: "594447905180",
        appId: "1:594447905180:web:d799b1e0b2439b4b"
      };

        !firebase.apps.length 
          ? firebase.initializeApp(firebaseConfig).firestore()
          : firebase.app().firestore();
        
        // Initialize Firebase
        //firebase.initializeApp(firebaseConfig);
        var db = firebase.firestore();
        console.log("Constructor Data");
        console.log(db.collection("ingredients").doc("milk"));
        db.collection("Anton").doc("bread").set({
            amount: 1,
            expirationDate: new Date()
        });
    }
    render() {
        return (
            <View style={Styles.cardContainer}>
                <RecipeComponent/>
            </View>
            
        )
    }
}