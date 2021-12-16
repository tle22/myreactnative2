import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    const [put, setput] = useState(0);
    const [i, seti] = useState(1);
    const onPressButton1 = () => {
        console.log("You pressButtom1");
        let output = put + i;
        setput(output);
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', padding: 30, alignContent: "space-around", justifyContent: "center" }}>
                <TouchableOpacity onPress={onPressButton1}>
                    <FontAwesome name="heart" size={100} color='yellow' />
                </TouchableOpacity>
                <Text style={{ marginLeft: 15, fontSize: 70 }}>{put}</Text>
            </View>
        </View>
    );
}
