import React, { useMemo, useState } from 'react';
import { TouchableWithoutFeedback, Text, ScrollView, ImageBackground, Image, Picker, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const NestedStack = createStackNavigator();

//375 × 940
const HomePage = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;
    const _onPressButton = () => {
        navigation.navigate('Emehdo1', { screen: 'Emehdo1' })
    }

    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                <TouchableWithoutFeedback onPress={_onPressButton}>
                    <Image
                        source={require('../../assets/pageImages/screen1.png')}
                        style={{
                            width: '100%',
                            height: 940 * ratio,
                            flex: 1,
                        }} />
                </TouchableWithoutFeedback>
            </ScrollView>
        </>
    )
}

export default HomePage;