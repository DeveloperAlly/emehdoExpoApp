import React from 'react';
import { Image, Dimensions } from 'react-native';

//375 × 940
const HomeNav = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;

    return (
        <Image
            source={require('../../assets/pageImages/navbar/homenav.png')}
            style={{
                width: Dimensions.get('window').width,
                height: 84 * ratio,
                borderColor: 'lightgrey',
                zIndex: 10,
                position: 'absolute',
                top: 0,
                left: 0
            }}
        />
    )
}

export default HomeNav;