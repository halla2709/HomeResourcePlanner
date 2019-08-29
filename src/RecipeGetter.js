import apiInfo from '../assets/apikeys'
async function getRecipesFromApi() {
    try {
      let response = await fetch(getAPIPath);
      let responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

function getAPIPath() {
    return 'https://api.edamam.com/search?q=chicken&app_id='+apiInfo.applicationID+'&app_key='+apiInfo.applicationKey
}

export default {
    getRecipesFromApi
}