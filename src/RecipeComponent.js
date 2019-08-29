import React from 'react'
import { View } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import Styles from '../assets/Stylesheet'
export default class RecipeComponent extends React.Component {
    render() {
        return (
            <View style={Styles.card}>
                <Card>
                    <CardTitle
                        title="This is a title"
                        subtitle="This is subtitle"
                    />
                    <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                    <CardAction
                        separator={true}
                        inColumn={false}>
                        <CardButton
                            onPress={() => { }}
                            title="Push"
                            color="blue"
                        />
                        <CardButton
                            onPress={() => { }}
                            title="Later"
                            color="blue"
                        />
                    </CardAction>
                </Card>
            </View>
        )
    }
}