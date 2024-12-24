import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {screenWidth} from "@/app/_layout";
import {LinearGradient} from "expo-linear-gradient";
import {Colors} from "@/assets/colors/colors";

interface ConsultTileProps {
    onPress: () => void;
    image: string,
    title: string,
}

const ConsultTile = ({onPress, image, title}: ConsultTileProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <LinearGradient style={styles.image} start={{x: 0, y: 0.2}} end={{x: 1, y: 1}}
    // @ts-ignore
                            colors={Colors.PrimaryGradient}>
                <ImageBackground style={styles.image}
    // @ts-ignore
                                 source={image}>
                    <Text style={styles.text}>{title}</Text>
                </ImageBackground>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default ConsultTile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth / 3.2,
        height: screenWidth / 3.2,
        margin: 4,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 3,
        shadowOffset: {width: 2, height: 2},
        overflow: 'hidden',
    },
    image: {
        width: screenWidth / 3.5,
        height: screenWidth / 3.5,
        borderRadius: 20,

    },
    text: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
        padding: 6,
        textAlign: 'center',
        fontFamily:'Nunito',
        fontWeight:'600',
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        elevation: 1,

    }
});

