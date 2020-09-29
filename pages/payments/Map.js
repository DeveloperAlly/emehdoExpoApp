import React from 'react';
import { TouchableWithoutFeedback, Dimensions, ScrollView, Image, View, Text } from 'react-native';
import { NavigationHelpersContext } from '@react-navigation/native';

const MapPage = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;
    const _onPressButton = () => {
        alert('You tapped the button!')
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>Map</Text>
        </View>
    )
}

export default MapPage;