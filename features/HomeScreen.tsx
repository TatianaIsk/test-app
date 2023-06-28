import React from 'react';
import { View, StyleSheet } from 'react-native';
import Button from "../ui/Button";

type HomeScreenProps = {
    navigation: any
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Список ТС"
                onPress={() => navigation.navigate('List')}
            />
            <Button
                title="Настройки"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
