import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Dimensions, ScrollView, Image, View, Text } from 'react-native';
import EmehdoNav from '../../navbar/emehdonav';

// 375 × 853
const FinalStep = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;

    return (
        <>
            <EmehdoNav />
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <Image
                    source={require('../../../assets/pageImages/home/step4.png')}
                    style={{
                        width: '100%',
                        height: 1037 * ratio,
                        flex: 1,
                    }}
                />
                <View style={styles.buttoncontainer}>
                    {/* <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.secondarybutton}>
                        <Text style={{ color: 'grey', textAlign: 'center' }}>BACK</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Services')}
                        style={styles.mainbutton}>
                        <Text style={{ color: 'ghostwhite', textAlign: 'center' }}>SUBMIT</Text>
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
        minWidth: 300,
        borderRadius: 2,
        backgroundColor: "#35237F",
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey'
    },
});


export default FinalStep;