import React, { useMemo, useState } from 'react';
import { TouchableWithoutFeedback, Text, ScrollView, ImageBackground, Image, Picker, Dimensions } from 'react-native';
import HomeNav from '../navbar/homeNav'

//375 × 800
const HomePage = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;
    const _onPressButton = () => {
        navigation.navigate('ConfirmDetails')
    }

    return (
        <>
            <HomeNav />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ marginTop: 84 * ratio - 10, backgroundColor: 'white' }}>
                <TouchableWithoutFeedback onPress={_onPressButton}>
                    <Image
                        source={require('../../assets/pageImages/homepage.png')}
                        style={{
                            width: '100%',
                            height: 800 * ratio,
                            flex: 1,
                        }} />
                </TouchableWithoutFeedback>
            </ScrollView>
        </>
    )
}

export default HomePage;