import * as React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function ImagePreview({ route, navigation }) {
    const { photo } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>There should be an image</Text>
            <Image source={{ uri: photo }} style={{ width: 380, height: 550 }} />
        </View>
    );
}