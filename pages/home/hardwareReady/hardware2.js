import React from 'react';
import { TouchableWithoutFeedback, Dimensions, ScrollView, Image } from 'react-native';
import { NavigationHelpersContext } from '@react-navigation/native';

// 375 × 853
const Hardware2 = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;
    const _onPressButton = () => {
        alert('You tapped the button!')
    }
    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Home', { name: 'Jane' })}>
                    <Image
                        source={require('../../../assets/pageImages/harwarePages/Screen4.png')}
                        style={{
                            width: '100%',
                            height: 853 * ratio,
                            flex: 1,
                        }} />
                </TouchableWithoutFeedback>
            </ScrollView>
        </>
    )
}

export default Hardware2;