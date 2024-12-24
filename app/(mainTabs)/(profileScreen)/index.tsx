import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Platform} from 'react-native';
import {globalStyles} from "@/assets/styles/globalStyles";
import {SafeAreaView} from "react-native-safe-area-context";
import {useStore} from "@/utils/store/store";
import  {SvgXml} from "react-native-svg";
import {router} from "expo-router";
import {screenWidth} from "@/app/_layout";
import DoctorCard from "@/components/doctorCard";

const Index = () => {

    const {svg, username, gender, age, selectedDoctor, setSelectedDoctor} = useStore(state => state)
    return (
        <SafeAreaView style={[globalStyles.container]}>
            <View style={[globalStyles.mainView, {backgroundColor: 'white', marginTop: 0}]}>
                <Image resizeMode={'contain'} style={[styles.bg]} source={require('@/assets/images/profileBg.png')}/>
                <View style={[styles.topContainer]}>
                    <View style={[styles.top]}>
                        {Platform.OS === 'ios' ? <SvgXml style={[styles.svg]} xml={svg}/> :  <Image resizeMode={'cover'} style={[styles.svg,{borderWidth: 1,backgroundColor: 'white'}]} source={require('@/assets/images/profilePlaceholder.png')}/>}
                    </View>
                    <View style={[styles.content]}>
                        <Text style={[styles.text]}>{username}</Text>
                        <Text style={[styles.text, {
                            // borderWidth: 1,
                            fontWeight: '800',
                            fontSize: 14
                        }]}>{gender}, <Text> {age} yrs</Text></Text>
                        <View style={[{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'center',
                            marginVertical: 10
                        }]}>
                            <TouchableOpacity onPress={() => {
                                router.navigate('/(mainTabs)/(profileScreen)/editProfile')
                            }} style={styles.button}>
                                <Text style={[styles.buttonText]}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={{height: '100%'}} contentContainerStyle={[{}]}>

                            <Text style={[styles.text, {
                                alignSelf: 'flex-start',
                                marginLeft: 8,
                                fontWeight: '600',
                                color: 'black'
                            }]}>Selected Doctor:</Text>
                            {selectedDoctor ? <DoctorCard selectDoctor={() => {
                                setSelectedDoctor(null)
                            }} title={'Cancel Appointment'} doctor={selectedDoctor} onPress={() => {
                                router.push({
                                    pathname: '/doctorDetails',
                                    params: {doctor: JSON.stringify(selectedDoctor)}
                                })
                            }}/> : <Text style={[styles.text, {marginTop: 20}]}>No Doctor Selected</Text>
                            }
                        </ScrollView>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Index;

const styles = StyleSheet.create({
    top: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        top: '-8%',
        flex:1,
        // right:0,
        // borderWidth:StyleSheet.hairlineWidth,
        overflow:'visible'
    },
    edit: {
        width: '100%',
        flex: 1,
        backgroundColor: 'yellow',
    },
    svg: {
        width: screenWidth/3,
        height:screenWidth/3,
        borderWidth: 2,
        borderColor: 'tomato',
        borderRadius: 100,
        flex: 1,
        shadowColor: 'black',
        backgroundColor: 'transparent',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 0},
        // elevation: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        flex: 1,

    },
    bg: {
        position: 'relative',
        width: '100%',

    },
    topContainer: {
        // flex: 1,
        width: '100%',
        // borderWidth: 1,
        overflow:'visible'
        // position: 'relative',
    },
    content: {
        marginTop: '20%',
        // borderWidth: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // flex: 1,
        height: '100%',
        // paddingTop:10
    },
    text: {
        fontSize: 18,
        fontWeight: '800',
        fontFamily: 'Nunito',
        color: 'tomato',
        marginTop: 6
    },
    button: {
        backgroundColor: 'tomato',
        // flex:1,
        marginHorizontal: 5,
        // borderWidth:1,
        borderRadius: 10,
        marginTop: 8
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

