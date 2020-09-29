import React from 'react';
import { TouchableWithoutFeedback, Dimensions, ScrollView, Image, StatusBar } from 'react-native';

// 375 × 853
const Details = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;

    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Emehdo1')}>
                    <Image
                        source={require('../../../assets/pageImages/harwarePages/Screen2.png')}
                        style={{
                            width: '100%',
                            height: 1188 * ratio,
                            flex: 1,
                        }} />
                </TouchableWithoutFeedback>
            </ScrollView>
        </>
    )
}

export default Details;