import React, { Component } from 'react';
import { TouchableWithoutFeedback, Dimensions, ScrollView, Image, View, Text } from 'react-native';
import { NavigationHelpersContext } from '@react-navigation/native';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Maploc';

const mapStyles = {
    width: '80%',
    height: '40%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <CurrentLocation
                centerAroundCurrentLocation
                google={this.props.google}
            >
                <Marker onClick={this.onMarkerClick} name={'Current Location'} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </CurrentLocation>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDHIHypl6Oa6a6JjG_8nYs2uFU5X3egH_I'
})(MapContainer);

// const MapPage = ({ navigation }) => {
//     const ratio = Dimensions.get('window').width / 375;
//     const _onPressButton = () => {
//         alert('You tapped the button!')
//     }

//     return (
//         <View
//             style={{
//                 flex: 1,
//                 backgroundColor: '#fff',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//             }}
//         >
//             <Text>Map</Text>
//         </View>
//     )
// }

// export MapPage;