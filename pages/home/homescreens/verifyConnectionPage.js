import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Dimensions, ScrollView, Image, View, Text } from 'react-native';
import EmehdoNav from '../../navbar/emehdonav';

// 375 × 853
const VerifyConnectionPage = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;

    return (
        <>
            <EmehdoNav />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ marginTop: 84 * ratio - 10, backgroundColor: 'white' }}>
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
                            height: 558 * ratio,
                            flex: 1,
                        }}
                    />
                </TouchableWithoutFeedback>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.secondarybutton}>
                        <Text style={{ color: 'grey', textAlign: 'center' }}>BACK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('FinalStep')}
                        style={styles.mainbutton}>
                        <Text style={{ color: 'ghostwhite', textAlign: 'center' }}>NEXT</Text>
                    </TouchableOpacity>
                </View>
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
        paddingBottom: 30,
        paddingTop: 20
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


export default VerifyConnectionPage;