import React from 'react';
import { TouchableWithoutFeedback, Dimensions, View, Text, Button } from 'react-native';
import EmehdoNav from '../../navbar/emehdonav';

// 375 × 853
const ShareLocationPage = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;

    return (
        <>
            <EmehdoNav />

            <View
                style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text>shareLocation</Text>
            </View>
        </>
    )
}

export default ShareLocationPage;