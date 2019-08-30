import React from 'react'
import {ScrollView, FlatList} from 'react-native'
import Styles from '../assets/Stylesheet'
import RecipeComponent from './RecipeComponent'
import DatabaseManager from './DatabaseManager'
import RecipeGetter from './RecipeGetter'
export default class RecipeScreen extends React.Component {
    constructor() {
        super();
        this.state = {recipes: []};
        this.dBInstance = new DatabaseManager();
    }

    async componentDidMount() {
        var recipes = await RecipeGetter.getRecipesFromApi();
        this.setState({recipes: recipes});
    }

    render() {
        return (
            <ScrollView>
                <FlatList data={this.state.recipes} 
                    renderItem={({item})=><RecipeComponent key={item.recipe.label} recipe={item.recipe}/>
                }/>
            </ScrollView>            
        )
    }
}