import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Animated} from 'react-native';
import {useSearchParams} from "expo-router/build/hooks";
import {DoctorObject} from "@/app/(mainTabs)/(doctorListing)/index";
import {SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "@/assets/styles/globalStyles";
import {AntDesign} from "@expo/vector-icons";
import {screenWidth} from "@/app/_layout";
import {LinearGradient} from "expo-linear-gradient";
import {Colors} from "@/assets/colors/colors";
import {router} from "expo-router";
import {useStore} from "@/utils/store/store";

const DoctorDetails = () => {
    const {selectedDoctor, setSelectedDoctor} = useStore(state => state)
    const animValue = useRef(new Animated.Value(0)).current;
    const searchParams = useSearchParams(); // This returns URLSearchParams
    // Extract and parse the 'doctor' parameter
    const doctor = searchParams.get('doctor');
    const parsedDoctor: DoctorObject = doctor ? JSON.parse(doctor) : null;

    useEffect(() => {
        Animated.spring(animValue, {toValue: 1, useNativeDriver: true, stiffness: 100}).start();
    }, [searchParams]);

    return (
        <SafeAreaView style={[globalStyles.container, {}]}>
            <View style={[globalStyles.mainView, {justifyContent: 'flex-start', width: '100%'}]}>
                <View style={[styles.topBar]}>
                    <AntDesign onPress={() => {
                        Animated.spring(animValue, {toValue: -2, useNativeDriver: true, stiffness: 100}).start();
                        setTimeout(()=>{router.navigate('/(mainTabs)/(doctorListing)')},150)
                    }} size={20} style={styles.back} name={'arrowleft'}/>
                    <Text style={styles.headerText}>Doctor's Profile</Text>
                </View>
                <Animated.View style={[styles.contentContainer, {
                    transform: [{
                        translateY: animValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [300, 0]
                        })
                    }]
                }]}>
                    <View style={styles.innerRow}>
                        <Image style={styles.image} source={require('@/assets/images/doctorPlaceholder.png')}/>
                        <View>
                            <Text style={[styles.docDetailText]}>Name: {parsedDoctor.name}</Text>
                            <Text
                                style={[styles.docDetailText, {fontSize: 12}]}>Qualification: {parsedDoctor.degree}</Text>
                            <Text
                                style={[styles.docDetailText, {fontSize: 14}]}>Speciality: {parsedDoctor.speciality}</Text>
                        </View>
                    </View>
                    <View style={[styles.content]}>
                        <View>
                            <Text style={[styles.docDetailText, {textAlign: 'left', width: '100%', fontSize: 14,color:'tomato'}]}>Clinic
                                Name:</Text>
                            <Text style={[styles.docDetailText, {
                                fontSize: 13,
                                fontWeight: '500'
                            }]}>{parsedDoctor.clinic}</Text>
                            <Text style={[styles.docDetailText, {
                                textAlign: 'left',
                                width: '100%',
                                marginTop: 10,
                                color:'tomato'
                            }]}>About</Text>
                            <Text style={[styles.docDetailText, {
                                fontSize: 14,
                                fontWeight: '500'
                            }]}>{parsedDoctor.description}</Text>
                        </View>
                        {
                            selectedDoctor?.id === parsedDoctor.id ?
                                <View style={[styles.button,{backgroundColor: '#90EE90'}]}>
                                    <Text style={[styles.buttonText]}>Added</Text>
                                </View>
                                :
                                <TouchableOpacity onPress={()=>{
                                    setSelectedDoctor(parsedDoctor)
                                }} style={styles.button}>
                                    <Text style={styles.buttonText}>Consult now</Text>
                                </TouchableOpacity>
                        }

                    </View>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
};

export default DoctorDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'wheat',
        // flex:1,
        // borderWidth: 1,
    },
    back: {
        padding: 10,
        // borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 50,
        backgroundColor: 'white',

    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        color: 'black',
    },
    contentContainer: {
        flex: 1,
        // borderWidth: StyleSheet.hairlineWidth,
        width: screenWidth,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: -2},
        shadowOpacity: 0.2,
        shadowRadius: 9,
    },
    image: {
        width: screenWidth / 3,
        height: screenWidth / 3,
        borderRadius: 100,
        borderWidth: 1,
        borderColor:'tomato'
    },
    innerRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '100%',
        paddingBottom: 20
    },
    docDetailText: {
        fontSize: 16,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        // flex:1,
        textAlign: 'left',
        padding: 5
        // borderWidth:StyleSheet.hairlineWidth,
    },
    button: {
        backgroundColor: 'tomato',
        marginHorizontal: 5,
        borderRadius: 10,
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: -3},
        elevation: 5,
        paddingVertical: 8
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
        fontWeight: '600',
        fontFamily: 'Nunito',
        textAlign: 'center',
        padding: 8,

    },
    content: {
        marginTop: 10,
        // borderWidth:1,
        flex: 1,
        justifyContent: 'space-around',
    }
});

