import React from 'react';
import { TouchableWithoutFeedback, Dimensions, ScrollView, Image } from 'react-native';

// 375 × 853
const Hardware1 = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;

    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Emehdo2')}>
                    <Image
                        source={require('../../../assets/pageImages/harwarePages/Screen3.png')}
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

export default Hardware1;