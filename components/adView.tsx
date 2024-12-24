import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {screenWidth} from "@/app/_layout";

const AdView = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={[styles.leftText]}>Avail a <Text
                    style={{fontWeight: '800', color: 'tomato'}}>{"Free \nConsultation\n"}<Text
                    style={{fontWeight: '500', color: 'black'}}>Today</Text></Text></Text>
            </View>
            <View style={styles.rightContainer}>
                <Image style={[styles.image]} resizeMode={'contain'}
                       source={require('../assets/images/doctorPic.png')}/>
            </View>

        </View>
    );
};

export default AdView;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 15,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 8},
        shadowRadius: 5,
        elevation: 5,
    },
    leftContainer: {
        flexDirection: 'column',
        flex: 1,
        // borderWidth: 1
    },
    rightContainer: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        borderTopEndRadius: 30,
        borderBottomEndRadius: 30,
        // borderWidth: 1,
        overflow: 'hidden',
        flex: 1,
    },
    image: {
        width: screenWidth / 2,
        height: screenWidth / 2,
        backgroundColor: 'white',
    },
    leftText: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Nunito',
    }
});

