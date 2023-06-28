import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

type ButtonProps = {
    title: string
    onPress: () => void
};

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#ede9e4',
        width: 200,
    },
    buttonText: {
        color: '#565a5b',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default Button