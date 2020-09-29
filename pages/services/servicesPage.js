import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import SummaryNav from '../navbar/summarynav';

// 375 × 853
const ServicesPage = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;

    return (
        <>
            <SummaryNav />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('ConfirmDetails')}> */}
                <Image
                    source={require('../../assets/pageImages/home/servicesummary.png')}
                    style={{
                        width: Dimensions.get('window').width,
                        height: 2659 * ratio,
                        flex: 1,
                    }}
                />
                {/* <View style={styles.buttoncontainer}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.secondarybutton}>
                        <Text style={{ color: 'grey', textAlign: 'center' }}>BACK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('IsHardwareReady')}
                        style={styles.mainbutton}>
                        <Text style={{ color: 'ghostwhite', textAlign: 'center' }}>NEXT</Text>
                    </TouchableOpacity>
                </View> */}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    buttoncontainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        textAlign: 'center',
        paddingBottom: 30
    },
    secondarybutton: {
        height: 40,
        minWidth: 150,
        borderRadius: 2,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
    mainbutton: {
        height: 40,
        minWidth: 150,
        borderRadius: 2,
        backgroundColor: "#0099F7",
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
});

export default ServicesPage;