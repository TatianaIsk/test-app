import React, {useState} from "react";
import {View, Text} from "react-native";
import {Picker} from "@react-native-picker/picker";

import Title from "../ui/Title";

export default function SettingsPage() {
    const [lang, setLang] = useState("ru");

    return (
        <View style={{flex: 1, justifyContent: "center", marginHorizontal: 24}}>
            <Title title="Настройки"/>
            <Text style={{fontSize: 16}}>
                Выберите язык:
            </Text>
            <Picker
                selectedValue={lang}
                onValueChange={(itemValue) => setLang(itemValue)}
                style={{marginBottom: 16, backgroundColor: '#ede9e4', marginTop: 16}}
            >
                <Picker.Item label="Русский" value="ru"/>
                <Picker.Item label="English" value="en"/>
            </Picker>
        </View>
    );
}