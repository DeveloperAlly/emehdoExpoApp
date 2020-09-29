import React, { useMemo, useState } from 'react';
import { TouchableWithoutFeedback, Text, ScrollView, ImageBackground, Image, Picker, Dimensions } from 'react-native';

//375 × 940
const EmehdoNav = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;
    const _onPressButton = () => {
        navigation.navigate('ConfirmDetails')
    }

    return (
        <Image
            source={require('../../assets/pageImages/navbar/emehdonav.png')}
            style={{
                width: Dimensions.get('window').width,
                height: 89 * ratio,
                borderColor: 'lightgrey',
                zIndex: 10,
                position: 'absolute',
                top: 0,
                left: 0
            }}
        />
    )
}

export default EmehdoNav;