import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import * as Constants from 'expo-constants';

export default class App extends Component {
    state = {
        mapRegion: null,
        hasLocationPermissions: false,
        locationResult: null
    };

    componentDidMount() {
        this._getLocationAsync();
    }

    _handleMapRegionChange = mapRegion => {
        console.log(mapRegion);
        this.setState({ mapRegion });
    };

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
            });
        } else {
            this.setState({ hasLocationPermissions: true });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location) });

        // Center the map on the location we just fetched.
        this.setState({ mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 } });
    };

    render() {
        return (
            <View>
                <Text>
                    Location: {this.state.locationResult}
                </Text>
            </View>

        );
    }
}


