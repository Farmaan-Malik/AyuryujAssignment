import React from 'react';
import {Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {screenWidth} from "@/app/_layout";

interface Props {
    headerText: string
    image: string
}

const HomeTiles = ({headerText, image}: Props) => {
    return (
        <TouchableOpacity style={styles.container}>
            {
                <ImageBackground resizeMode={'contain'}
                                 style={[styles.image, {overflow: 'hidden'}]}
                                 source={image}>
                    <Text style={styles.headerText}>{headerText}</Text>
                </ImageBackground>
            }
        </TouchableOpacity>
    );
};

export default HomeTiles;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft:2,
        marginVertical: 8,
        width: screenWidth / 3.5,
        height: screenWidth / 3.5,
        // borderWidth: 1,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 8},
        shadowRadius: 5,
        elevation: 5,

    },
    image: {
        borderRadius: 20,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 12,
        fontFamily: 'Nunito',
        color: 'grey',
        fontWeight: '900',
        textAlign: 'center',
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 8,
    }
});

