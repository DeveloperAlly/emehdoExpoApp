import React from 'react';
import { TouchableWithoutFeedback, Dimensions, ScrollView, Image, Button } from 'react-native';
import EmehdoNav from '../../navbar/emehdonav';

// 375 × 853
const IsHardwareReadyPage = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;

    return (
        <>
            <EmehdoNav />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Image
                    source={require('../../../assets/pageImages/home/ishardwareready.png')}
                    style={{
                        width: '100%',
                        height: 721 * ratio,
                        flex: 1,
                    }}
                />
                <Button
                    onPress={() => navigation.navigate('VerifyConnection')}
                    title="Next ->"
                    color="#0099F7"
                    height='40px'
                    accessibilityLabel="Learn more about this purple button"
                />
            </ScrollView>
        </>
    )
}

export default IsHardwareReadyPage;