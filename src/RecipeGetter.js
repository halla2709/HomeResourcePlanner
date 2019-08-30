import apiInfo from '../assets/apikeys'
import DatabaseManager from './DatabaseManager'
async function getRecipesFromApi() {
    var db = new DatabaseManager();
    var otherIngredients = await db.getAllIngredientsForUser();
    otherIngredients.sort((a,b) => { return a.expirationDate < b.expirationDate ? -1 : 1 });
    if (otherIngredients.length > 0) 
        return await fetchRecipes(otherIngredients[0].name, otherIngredients);
    else
        return [];
  }

async function fetchRecipes(key, otherIngredients) {
    try {
        let response = await fetch(getAPIPath(key));
        let responseJson = await response.json();
        var hits = responseJson.hits;
        sortHitsByMatchingIngredients(hits, otherIngredients);
        return hits;
      } catch (error) {
        console.error(error);
      }
}

function compareHits(a, b) {
    return b.recipe.ownedMatches.length - a.recipe.ownedMatches.length;
}

function addMatchesToHits(hits, ownedIngredients) {
    hits.forEach(hit => {
        var recipe = hit.recipe;
        recipe.ownedMatches = [];
        var ownedIngredientLines = {}
        ownedIngredients.forEach(owned => {
            for(var i = 0; i < recipe.ingredientLines.length; i++) {
                var ingredient = recipe.ingredientLines[i];
                if(!ingredient.found && ingredient.toLowerCase().includes(owned.name.toLowerCase())) {
                    recipe.ownedMatches.push(owned.name);
                    ownedIngredientLines[ingredient] = true;
                    break;
                }
            }
        });
        recipe.missing = recipe.ingredientLines.filter(function(ing) {
            return ownedIngredientLines[ing] == undefined;
        });
    });
}

function sortHitsByMatchingIngredients(hits, ownedIngredients) {
    addMatchesToHits(hits, ownedIngredients);
    return hits.sort(compareHits);
}

function getAPIPath(key) {
    return 'https://api.edamam.com/search?q='+key+'&app_id='+apiInfo.applicationID+'&app_key='+apiInfo.applicationKey+'&from=0&to=10';
}

export default {
    getRecipesFromApi
}