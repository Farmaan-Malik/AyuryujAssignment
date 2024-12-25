import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {screenWidth} from "@/app/_layout";
import {DoctorObject} from "@/app/(mainTabs)/(doctorListing)";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

interface DoctorCardProps {
    doctor: DoctorObject;
    onPress: () => void;
    selectDoctor?: () => void;
    title?: string;
    selected?: boolean;
}

const DoctorCard = ({doctor, selected = false, onPress, selectDoctor, title = 'Consult now'}: DoctorCardProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.mainRow}>
                <View>
                    <Image
                        resizeMode="contain"
                        style={styles.image}
                        source={require('@/assets/images/doctorPlaceholder.png')}
                    />
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={[styles.exp]}>{doctor.yearsOfExperience} years exp</Text>
                </View>
                <View style={styles.column}>
                    <View style={[styles.innerRow]}>
                        <Image style={styles.logo} source={require('@/assets/images/mfineLogo.png')}/>
                        <View style={{borderLeftWidth: StyleSheet.hairlineWidth, paddingLeft: 10}}>
                            <Text numberOfLines={1} style={styles.innerRowText} ellipsizeMode="tail">
                                {doctor.clinic}
                            </Text>
                            <Text numberOfLines={1} style={[styles.innerRowText, {fontSize: 10, fontWeight: '600'}]}>
                                {doctor.location}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.text}>{doctor.name}</Text>
                    <Text style={[styles.text, {fontSize: 12, color: 'grey', fontWeight: '600'}]}>
                        {doctor.degree}
                    </Text>
                    <Text style={[styles.text, {fontSize: 13, color: 'grey', fontWeight: '600'}]}>
                        {doctor.speciality}
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                        <Ionicons color="#79c1de" size={14} name="chatbubble-ellipses-outline"/>
                        {doctor.languages.length > 2 ? (
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5, marginBottom: 2}}>
                                <Text style={styles.languages}>
                                    {`${doctor.languages[0]}, ${doctor.languages[1]}...`}
                                </Text>
                                <Text
                                    style={{
                                        borderWidth: 1,
                                        padding: 2,
                                        borderRadius: 5,
                                        borderColor: '#79c1de',
                                        color: '#79c1de',
                                        fontWeight: 'bold',
                                        fontSize: 12
                                    }}
                                >
                                    {`+${doctor.languages.length - 2}`}
                                </Text>
                            </View>
                        ) : (
                            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 2}}>
                                {doctor.languages.map((language, index) => (
                                    <Text style={styles.languages} key={index}>
                                        {language}
                                        {index < doctor.languages.length - 1 ? ', ' : ''}
                                    </Text>
                                ))}
                            </View>
                        )}
                    </View>
                    <Text style={[styles.text, {fontSize: 14,marginTop:5}]}>₹{doctor.fee} Rs</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={onPress} style={[styles.button]}>
                    <LinearGradient colors={['#f6fbfc', '#f6fbfc']} style={[styles.button, {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }]}>
                        <AntDesign color={'#79c1de'} size={14} name={'playcircleo'}/>
                        <Text style={[styles.buttonText, {color: '#79c1de', fontWeight: '800'}]}>Know more</Text>
                    </LinearGradient>
                </TouchableOpacity>
                {selected ? (
                    <View style={styles.button}>

                        <Text style={[styles.buttonText, {
                            backgroundColor: '#90EE90',
                            color: 'white',
                            fontWeight: '900'
                        }]}>
                            Added
                        </Text>
                    </View>
                ) : (
                    <TouchableOpacity onPress={selectDoctor} style={styles.button}>
                        <LinearGradient start={{x: 0, y: 0.01}} end={{x: 0, y: 1}} colors={['#ffb6a5', 'tomato']}
                                        style={styles.button}>

                            <Text style={styles.buttonText}>{title}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default DoctorCard;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth - 25,
        minHeight: screenWidth / 2,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        zIndex: 1,
    },
    mainRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        gap: 2,
        paddingBottom: 8,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey'
    },
    image: {
        width: screenWidth / 3.5,
        height: screenWidth / 3,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        margin: 10,
        borderColor: 'grey',
    },
    column: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Nunito',
        color: 'black',
        marginBottom: 2,
    },
    footer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'space-between',
        gap: 5
    },
    button: {
        flex: 1,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 12,
        color: 'white',
        fontWeight: '800',
        fontFamily: 'Nunito',
        textAlign: 'center',
        padding: 8,
        borderRadius: 10,
    },
    exp: {
        fontFamily: 'Nunito',
        textAlign: 'center',
        fontWeight: '600',
        backgroundColor: '#4a95ba',
        color: 'white',
        width: '60%',
        alignSelf: 'center',
        borderRadius: 5,
        paddingVertical:2,
        fontSize: 12,
    },
    innerRow: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        // borderWidth: 1,
    },
    logo: {
        width: 30,
        height: 30,
    },
    innerRowText: {
        fontSize: 12,
        fontWeight: '700',
        fontFamily: 'Nunito',
        width: '95%',
        // borderWidth: StyleSheet.hairlineWidth,
    },
    languages: {
        fontFamily: 'Nunito',
        fontWeight: '800',
        color: 'grey',
    },
});
