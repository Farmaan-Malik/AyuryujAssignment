import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {screenWidth} from "@/app/_layout";
import {DoctorObject} from "../app/(mainTabs)/(doctorListing)";

interface DoctorCardProps {
    doctor: DoctorObject;
    onPress: () => void;
    selectDoctor?: () => void;
    title?: string,
    selected?: boolean,
}

const DoctorCard = ({doctor, selected = false, onPress, selectDoctor, title = 'Consult Now'}: DoctorCardProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainRow}>
                <View style={{}}>
                    <Image resizeMode={'contain'} style={styles.image}
                           source={require('@/assets/images/doctorPlaceholder.png')}/>
                    <Text style={{
                        fontFamily: 'Nunito',
                        textAlign: 'center',
                        fontWeight: '800',
                        // borderWidth: StyleSheet.hairlineWidth,
                        backgroundColor: 'tomato',
                        color: 'white',

                    }}>{doctor.yearsOfExperience} years exp</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.text}>{doctor.name}</Text>
                    <Text style={[styles.text, {fontSize: 14}]}>{doctor.degree}</Text>
                    <Text style={[styles.text, {fontSize: 12}]}>{doctor.speciality}</Text>
                    <Text style={[styles.text, {fontSize: 12}]}>{doctor.location}</Text>
                    <Text style={[styles.text, {fontSize: 14}]}>Fee: {doctor.fee} Rs</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={[styles.buttonText, {color: 'black', backgroundColor: 'white'}]}>Know more</Text>
                </TouchableOpacity>
                {selected ?
                    <View style={[styles.button]}>
                        <Text style={[styles.buttonText, {backgroundColor: '#90EE90', color: 'white',fontWeight: '900'}]}>Added</Text>
                    </View>
                    :
                    <TouchableOpacity onPress={selectDoctor} style={styles.button}>
                        <Text style={styles.buttonText}>{title}</Text>
                    </TouchableOpacity>
                }


            </View>
        </View>
    );
};

export default DoctorCard;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth - 50,
        // borderWidth: StyleSheet.hairlineWidth,
        minHeight: screenWidth / 2,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOpacity: 0.1,
        shadowOffset: {width: 2, height: 2},
        elevation: 5,
        zIndex: 1
    },
    mainRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        gap: 10,
// borderWidth: StyleSheet.hairlineWidth,
    },
    image: {
        width: screenWidth / 3,
        height: screenWidth / 3,
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        // borderWidth: StyleSheet.hairlineWidth,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Nunito',
        color: 'black',
    },
    footer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: 'tomato',
        flex: 1,
        marginHorizontal: 5,
        // borderWidth:1,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
        fontWeight: '600',
        fontFamily: 'Nunito',
        textAlign: 'center',
        padding: 8,
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.2,
        shadowOffset: {width: 2, height: 2},
        borderRadius: 10,
        backgroundColor: 'tomato',
        elevation: 5,

    }
});

