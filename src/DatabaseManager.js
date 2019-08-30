import * as firebase from 'firebase';
import 'firebase/firestore';
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

var db;

class DatabaseManager {
    constructor() {
        if (!!DatabaseManager.instance) {
            return DatabaseManager.instance;
        }

        DatabaseManager.instance = this;

        !firebase.apps.length
            ? firebase.initializeApp(firebaseConfig).firestore()
            : firebase.app().firestore();

        db = firebase.firestore();
        console.log("Init firestore");

        return this;
    }

   async getAllIngredientsForUser(name) {
       var snapshots = await db.collection("Anton").get();
       var ingredients = [];
       snapshots.forEach((doc) => {
           console.log(doc.data());
           var expirationDate = doc.data().expirationDate.toDate();
           ingredients.push({name:doc.id, amount:doc.data().amount, expirationDate:expirationDate});
       });
       return ingredients;
   }

   async deleteUsedIngredients(ingredients, name) {
       console.log(ingredients);
       ingredients.forEach((ing) => {
            db.collection("Anton").doc(ing).delete();
       });
   }

    async getExpirationDate(itemName) {
        var snap = await db.collection("ingredients").doc(itemName).get();
        var item = snap.data();
        console.log('shelflife: ', item.shelfLife);
        var expDate = new Date();
        expDate.setDate(expDate.getDate() + item.shelfLife);
        return expDate;
    }

    async addResource (item, self) {
        if (self === undefined) self = this;
        console.log('item: ', item.name);
        var date = await this.getExpirationDate(item.name);
        console.log("date:", date);
        await db.collection("Anton").doc(item.name).set({amount: item.amount, expirationDate: date});
        return true;
    }

    async addList (itemArray){
        var self = this;
        return Promise.all(itemArray.map(async function(item) { await self.addResource(item, self) }));
        /* await itemArray.forEach(async function(item){
           await self.addResource(item);
           console.log(item.name + " added");
        }); */
    }
}

export default DatabaseManager;