import React from 'react'
import { Text } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import * as WebBrowser from 'expo-web-browser';
import Styles from '../assets/Stylesheet'
import DatabaseManager from './DatabaseManager'

export default class RecipeComponent extends React.Component {
    createUsedDescription() {
        var usesString = "Uses " + this.props.recipe.ownedMatches.length + " owned ingredients: \n ";
        this.props.recipe.ownedMatches.forEach(element => {
            usesString += " ~ " + element + "\n ";
        });
        return usesString;
    }
    createMissingDescription() {
        var missingString = "Missing ingredients: \n";
        this.props.recipe.missing.forEach(element => {
            missingString += " ~ " + element + "\n ";
        });
        return missingString;
    }
    render() {
        var recipe = this.props.recipe;
        return (
                <Card style={Styles.card}>
                    <CardTitle title={recipe.label} />
                    <CardImage source={{uri:recipe.image}}/>
                    <CardContent>
                        <Text style={{color:"green"}}>{this.createUsedDescription()}</Text>
                        <Text style={{color:"darkred"}}>{this.createMissingDescription()}</Text>
                    </CardContent>
                    <CardAction
                        separator={true}
                        inColumn={false}>
                        <CardButton
                            onPress={() =>  WebBrowser.openBrowserAsync(recipe.shareAs) }
                            color="black"
                            title="See recipe"
                        />
                        <CardButton
                            onPress={() => {
                                var db = new DatabaseManager();
                                db.deleteUsedIngredients(recipe.ownedMatches);
                                console.log("Delete used ingredients");
                             }}
                            color="black"
                            title="Cook recipe"
                        />
                    </CardAction>
                </Card>
        )
    }
}