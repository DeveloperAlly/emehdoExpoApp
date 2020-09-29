import React from 'react';
import { TouchableWithoutFeedback, Dimensions, ScrollView, Image, Button } from 'react-native';
import EmehdoNav from '../../navbar/emehdonav';

// 375 × 853
const VerifyConnectionPage = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;

    return (
        <>
            <EmehdoNav />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('TakePhoto')}>
                    <Image
                        source={require('../../../assets/pageImages/home/takephoto.png')}
                        style={{
                            width: '100%',
                            height: 527 * ratio,
                            flex: 1,
                        }}
                    />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('ShareLocation')}>
                    <Image
                        source={require('../../../assets/pageImages/home/sharelocation.png')}
                        style={{
                            width: '100%',
                            height: 639 * ratio,
                            flex: 1,
                        }}
                    />
                    {/* <Button
                    onPress={() => navigation.navigate('IsHardwareReady')}
                    title="Next ->"
                    color="#0099F7"
                    height='40px'
                    accessibilityLabel="Learn more about this purple button"
                /> */}
                </TouchableWithoutFeedback>
            </ScrollView>
        </>
    )
}

export default VerifyConnectionPage;