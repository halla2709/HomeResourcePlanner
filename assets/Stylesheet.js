import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE7E9',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 70,
      },
      cardContainer: {
          flex:1,
          alignItems: 'stretch'
      },
      card: {
          height:300
      },
      buttonColumn: {
          flex: 1,
          flexDirection: 'column'
      },
      button: {
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderColor: 'white',
          borderWidth: 2 
      },
      buttonText: {
          color: 'white',
          fontSize: 20
      },
      buttonIcon: {
        color: 'white',
        fontSize: 62
      },
      buttonContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      ingredientsContainer: {
        flex: 1,
        backgroundColor: '#EEE7E9',
        alignItems: 'stretch'
      },
      ingredientItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'powderblue',
        height: 70,
        paddingHorizontal: 10,
        borderColor: 'steelblue',
        borderWidth: 1,
        marginBottom:1
      },
      ingredientText: {
          fontSize: 18
      }
});