import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, ScrollView, Image, Button, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EmehdoNav from '../../navbar/emehdonav';
import styled from 'styled-components';

// 375 × 853
const ConfirmDetailsPage = ({ navigation }) => {
    const ratio = Dimensions.get('window').width / 375;

    return (
        <>
            {/* <View
                style={{
                    width: Dimensions.get('window').width,
                    height: 105, //84 * ratio,
                    flex: 1,
                }}
            > */}
            <Image
                source={require('../../../assets/pageImages/navbar/emehdonav.png')}
                style={{
                    width: Dimensions.get('window').width,
                    height: 105, //84 * ratio,
                    flex: 1,
                    borderBottomWidth: 2,
                    borderColor: 'lightgrey',
                    // position: 'absolute',
                    // top: 0,
                    // left: 0
                }}
            />
            {/* </View> */}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('ConfirmDetails')}> */}
                <Image
                    source={require('../../../assets/pageImages/home/confirmdetails.png')}
                    style={{
                        width: '100%',
                        height: 1029 * ratio,
                        flex: 1,
                    }}
                />
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    backgroundColor: 'white',
                    textAlign: 'center',
                    paddingBottom: 30
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            height: 50,
                            minWidth: 130,
                            borderRadius: 5,
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: 'lightgrey'
                        }}>
                        <Text style={{ color: 'grey', textAlign: 'center' }}>BACK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('IsHardwareReady')}
                        style={{
                            height: 50,
                            minWidth: 130,
                            borderRadius: 5,
                            backgroundColor: "#0099F7",
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            border: '1px solid lightgrey'
                        }}>
                        <Text style={{ color: 'ghostwhite', textAlign: 'center' }}>NEXT</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            height: 35,
                            minWidth: 120,
                            borderRadius: 5,
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            border: '1px solid lightgrey'
                        }}>
                        <Text style={{ color: 'grey' }}>BACK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('IsHardwareReady')}
                        style={{
                            height: 35,
                            minWidth: 120,
                            borderRadius: 5,
                            backgroundColor: "#0099F7",
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            border: '1px solid lightgrey'
                        }}>
                        <Text style={{ color: 'ghostwhite' }}>NEXT</Text>
                    </TouchableOpacity>
                </View> */}
                {/* </TouchableWithoutFeedback> */}
            </ScrollView>
        </ >
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: '10px',
        backgroundColor: 'white'
    },
    buttonStyle: {
        height: 40,
        minWidth: 100,
        borderRadius: 10,
        backgroundColor: "yellow",
        color: 'yellow',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
});

export default ConfirmDetailsPage;