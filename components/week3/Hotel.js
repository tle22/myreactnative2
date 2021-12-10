import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
export default function Hotel() {
    return (

        <ScrollView>
            <View style={{ flex: 1 , padding : 10}}>
                {/* ก้อน1 */}
                <View style={{flexDirection:'row'}} >
                    <Image style={{flex :  1 , resizeMode : 'cover',aspectRatio :5/2 ,borderRadius:20}} source={require('../../assets/week3/room-1.jpg')} />
                </View>
                {/* ก้อน2 */}
                <View style={{flexDirection : 'row',marginTop:'10'}}>
                    <FontAwesome name="map-marker" size={32} color="orange" />
                    <Text style={{fontSize : 20 , color:'gray'}}>  553 Cislason Radial</Text>
                </View>
                {/* ก้อน3 */}
                <View>
                    <Text style={{fontSize : 30 }} >Boston Hotel</Text>
                </View>
                {/* ก้อน4 */}
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
                        <FontAwesome name="star" size={32} color="orange" />
                        <FontAwesome name="star" size={32} color="orange" />
                        <FontAwesome name="star" size={32} color="orange" />
                        <FontAwesome name="star" size={32} color="orange" />
                        <FontAwesome name="star-half" size={32} color="orange" />
                    </View>
                    <View>
                        <Text style={{fontSize : 20 , color:'gray'}}>100 Reviews</Text>
                    </View>
                </View>
                {/* ก้อน5 */}
                <View>
                    <Text style={{fontSize : 20 , color:'red'}}>$125</Text>
                </View>


            </View>

        </ScrollView>

    );
}