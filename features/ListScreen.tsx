import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

import data from "../vehicle.json";
import Title from "../ui/Title";

const ListScreen: React.FC = () => {
    const navigation = useNavigation();

    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
    const [types, setTypes] = useState<string[]>([]);
    const [selectedType, setSelectedType] = useState<string>("");

    interface Vehicle {
        id: number;
        type: string;
        driver: {
            id: number;
            name: string;
            phone: string;
        };
    }

    //вывод данных из json

    useEffect(() => {
        setVehicles([...data]);
        setFilteredVehicles([...data]);
        setTypes([...new Set(data.map((vehicle) => vehicle.type))]);
    }, []);

    //фильтрация пользователей по категориям

    useEffect(() => {
        if (selectedType === "" && vehicles.length > 0) {
            const filteredData = vehicles;
            setFilteredVehicles(filteredData);
        } else if (selectedType !== "" && vehicles.length === 0) {
            setFilteredVehicles([]);
        } else {
            const filteredData = vehicles.filter((vehicle) => vehicle.type === selectedType);
            setFilteredVehicles(filteredData);
        }
    }, [selectedType, vehicles])

    //навигация для перехода на страницу нужного пользователя
    const navigateToDetails = (vehicleId: number) => {
        navigation.navigate('UserDetails', { vehicleId });
    };

    return (
        <View style={styles.container}>
            <Title title="Список ТС"/>

            <Picker
                selectedValue={selectedType}
                onValueChange={(itemValue) => setSelectedType(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="All Types" value="" />
                {types.map((type) => (
                    <Picker.Item key={type} label={type} value={type} />
                ))}
            </Picker>

            <FlatList
                data={filteredVehicles}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigateToDetails(item.id)}
                        style={styles.vehicleItem}
                    >
                        <Text>Id: {item.id}</Text>
                        <Text>Name: {item.driver.name}</Text>
                        <Text>Type: {item.type}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.noDataText}>No vehicles found.</Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 30,
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
    },
    picker: {
        marginBottom: 16,
        backgroundColor: '#ede9e4'
    },
    vehicleItem: {
        marginBottom: 16,
        borderWidth: 2,
        borderColor: "#ede9e4",
        padding: 16,
        borderRadius: 8,
    },
    noDataText: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 32,
    },
});

export default ListScreen;