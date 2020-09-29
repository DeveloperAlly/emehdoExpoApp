import React from 'react';
import { TouchableWithoutFeedback, Dimensions, ScrollView, Image, View, Text } from 'react-native';
import { NavigationHelpersContext } from '@react-navigation/native';

//375 × 1188
const HelpPage = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;
    const _onPressButton = () => {
        alert('You tapped the button!')
    }
    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('Home', { name: 'Jane' })}> */}
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text>Get Help</Text>
                </View>
                {/* <Image
                        source={require('../../assets/pageImages/screen1.png')}
                        style={{
                            width: '100%',
                            height: 1188 * ratio,
                            flex: 1,
                        }} /> */}
                {/* </TouchableWithoutFeedback> */}
            </ScrollView>
        </>
    )
}

export default HelpPage;