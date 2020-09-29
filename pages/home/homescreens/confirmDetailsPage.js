import React from 'react';
import { TouchableWithoutFeedback, Dimensions, ScrollView, Image, Button } from 'react-native';
import EmehdoNav from '../../navbar/emehdonav';

// 375 × 853
const ConfirmDetailsPage = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;

    return (
        <>
            <EmehdoNav />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('ConfirmDetails')}> */}
                <Image
                    source={require('../../../assets/pageImages/home/confirmdetails.png')}
                    style={{
                        width: '100%',
                        height: 1029 * ratio,
                        flex: 1,
                    }} />
                <Button
                    onPress={() => navigation.navigate('IsHardwareReady')}
                    title="Next ->"
                    color="#0099F7"
                    accessibilityLabel="Learn more about this purple button"
                />
                {/* </TouchableWithoutFeedback> */}
            </ScrollView>
        </>
    )
}

export default ConfirmDetailsPage;