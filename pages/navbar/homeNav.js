import React, { useMemo, useState } from 'react';
import { TouchableWithoutFeedback, Text, ScrollView, ImageBackground, Image, Picker, Dimensions } from 'react-native';

//375 × 940
const HomeNav = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;
    const _onPressButton = () => {
        navigation.navigate('ConfirmDetails')
    }

    return (
        <Image
            source={require('../../assets/pageImages/navbar/homenav.png')}
            style={{
                width: '100%',
                height: 105, //84 * ratio,
                flex: 1,
                borderBottom: '2px ridge ghostwhite',
                boxShadow: '1px 1px 1px #888888',
            }}
        />
    )
}

export default HomeNav;