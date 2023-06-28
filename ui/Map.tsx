import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface MapProps {
    latitude: number;
    longitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: Number(latitude),
                    longitude: Number(longitude),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: Number(latitude),
                        longitude: Number(longitude),
                    }}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    map: {
        flex: 1,
        marginBottom: 10,
    },
});

export default Map;