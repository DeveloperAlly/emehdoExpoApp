import React from 'react';
import { Image, Dimensions } from 'react-native';

//375 × 940
const SummaryNav = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;

    return (
        <Image
            source={require('../../assets/pageImages/navbar/summarynav.png')}
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

export default SummaryNav;