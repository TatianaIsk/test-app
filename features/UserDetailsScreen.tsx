import React from "react";
import {View, Text, StyleSheet, Linking, Platform} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";

import data from "../vehicle.json";

import Button from "../ui/Button";
import Title from "../ui/Title";
import Map from "./../ui/Map"

type UserScreenProps = {
    vehicleId: number;
};

const UserScreen: React.FC<UserScreenProps> = () => {
    const route = useRoute();

    const vehicleId = route.params?.vehicleId;
    const vehicle = data.find((vehicle) => vehicle.id === vehicleId);

    const phoneNumber = vehicle?.driver.phone;
    const whatsappLink = `whatsapp://send?phone=${phoneNumber}`;

    //переход на звонок водителю
    const handleCall = () => {
        const url = `${Platform.OS === 'ios' ? 'telprompt:' : 'tel:'}${vehicle?.driver.phone}`;

        Linking.canOpenURL(url).then(canOpen => {
            if (canOpen) {
                Linking.openURL(url).catch((e) => Promise.reject(e));
            }
        });
    };

    //переход на WhatsApp
    const handleSendMessage = () => {
        const vehicle = {
            driver: {
                phone: ''
            }
        };

        if (vehicle.driver && vehicle.driver.phone) {
            const whatsappLink = `https://wa.me/${vehicle.driver.phone}?text=Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе`;
            window.open(whatsappLink, '_blank');
        }
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