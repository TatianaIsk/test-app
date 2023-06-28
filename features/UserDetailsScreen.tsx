import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";

import data from "../vehicle.json";

import Button from "../ui/Button";
import Title from "../ui/Title";
import Map from "./../ui/Map"

type UserScreenProps = {
    vehicleId: number;
};

const UserScreen: React.FC<UserScreenProps> = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const vehicleId = route.params?.vehicleId;
    const vehicle = data.find((vehicle) => vehicle.id === vehicleId);

    const handleCall = () => {
        navigation.navigate("List", {phoneNumber: vehicle?.driver.phone});
    };

    const handleSendMessage = () => {
        navigation.navigate("List", {phoneNumber: vehicle?.driver.phone});
    };

    return (
        <View style={styles.container}>
            <Title title="Полная информация о ТС"/>

            <Text style={styles.text}>
                ID: {vehicle?.id}
            </Text>
            <Text style={styles.text}>
                Категория: {vehicle?.type}
            </Text>
            <Text style={styles.text}>
                Имя водителя: {vehicle?.driver.name}
            </Text>
            <Text style={styles.text}>
                Номер водителя: {vehicle?.driver.phone}
            </Text>
            <Map
                latitude={vehicle?.position.latitude ? Number(vehicle.position.latitude) : 0}
                longitude={vehicle?.position.longitude ? Number(vehicle.position.longitude) : 0}
            />
            <Button
                title="Позвонить"
                onPress={handleCall}
            />
            <Button
                title="Написать"
                onPress={handleSendMessage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 60,
    },
    text: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 10
    }
})

export default UserScreen;