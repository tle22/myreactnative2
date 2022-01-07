import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, Image, FlatList, ScrollView } from "react-native";
import { borderRightColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function Event(props) {
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json ');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }
    useEffect(() => {
        loadOnlineTours();
    }, []);

    return (
        <View style={props.style}>
            <Text style={{ fontSize: 25 }}>Up Coming Event</Text>
            <Text style={{ color: "gray" }}>
                What's the worst The Could Happend
            </Text>
            <FlatList
                horizontal={true}
                data={onlineTours}
                renderItem={({ item, index }) => {
                    console.log(item, index, item.uri);
                    return (
                        <View style={{ marginRight: 10 }}>
                            <Image source={{ uri: item.uri }} style={{ width: 300, height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                            <View style={{ flexDirection: "row", borderBottomLeftRadius: 10, backgroundColor: "white", borderWidth: 1, borderColor: "gray", borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                <View style={{ padding: 10 }}>
                                    <Text style={{ color: "red", fontSize: 15 }}>{item.month}</Text>
                                    <Text style={{ color: "gray", fontSize: 10 }}>{item.date}</Text>
                                </View>

                                <View style={{ padding: 10 }}>
                                    <Text style={{ fontSize: 15, color: "black" }}>{item.title}</Text>
                                    <Text style={{ color: "gray", fontSize: 10 }}>{item.datetime}</Text>
                                    <Text style={{ color: "gray", fontSize: 10 }}>{item.place}</Text>
                                </View>

                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}