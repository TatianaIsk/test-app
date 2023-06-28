import React, {useState} from "react";
import {View, Text} from "react-native";

type TitleProps = {
    title: string;
};

const Title: React.FC<TitleProps> = ({title}) => (
    <Text style={{fontSize: 22, fontWeight: "bold", marginBottom: 16}}>
        {title}
    </Text>
);

export default Title
