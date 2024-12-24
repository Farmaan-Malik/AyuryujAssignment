import React, {useEffect, useRef} from 'react';
import {
    View,
    ScrollView
} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "@/assets/styles/globalStyles";
import SectionHeader from "@/components/sectionHeader";
import HomeTiles from "@/components/homeTiles";
import AdView from "@/components/adView";
import ConsultTile from "@/components/consultTile";
import {router} from "expo-router";


const index = () => {
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={[globalStyles.mainView,{height:'100%'}]}>
                <ScrollView contentContainerStyle={{paddingBottom:150}}>
                    <View style={{
                        display: 'flex',
                        flex:1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',

                    }}>
                        <HomeTiles image={require('@/assets/images/consultation.png')} headerText={"Online \nConsultation"}/>
                        <HomeTiles image={require('@/assets/images/orderMeds.png')} headerText={"Order \nMedication"}/>
                        <HomeTiles image={require('@/assets/images/labTests.png')} headerText={"Lab \nTests"}/>
                        <HomeTiles image={require('@/assets/images/xray.png')} headerText={"X-Rays, MRIs \n& Scans"}/>
                        <HomeTiles image={require('@/assets/images/checkups.png')} headerText={"Body \nCheckups"}/>
                        <HomeTiles image={require('@/assets/images/dentist.png')} headerText={"Dental \nCare"}/>

                    </View>
                    <View style={[globalStyles.mainView, {
                        flex: 1,
                        // borderWidth: 1,
                        marginTop: 15,
                        marginBottom: 15
                    }]}>
                        <AdView/>
                    </View>
                    <SectionHeader onClick={() => {
                        router.navigate('/(mainTabs)/(doctorListing)')
                    }} title='Consult a Doctor'/>
                    <View style={{flex: 1,flexDirection:'row'}}>
                        <ConsultTile title={'Dentist'} onPress={() => router.push({
                                    pathname: '/(mainTabs)/(doctorListing)',
                                    params: {filter:'Dentist'}
                                })}
                        image={require('@/assets/images/DentistFilter.png')}/>
                        <ConsultTile title={'Pediatrician'} onPress={() => router.push({
                                    pathname: '/(mainTabs)/(doctorListing)',
                                    params: {filter:'Pediatrician'}
                                })}
                                     image={require('@/assets/images/PediatricianFilter.png')}/>
                        <ConsultTile title={'ENT'} onPress={() => router.push({
                                    pathname: '/(mainTabs)/(doctorListing)',
                                    params: {filter:'ENT '}
                                })}
                        image={require('@/assets/images/EntFilter.png')}/>
                    </View>
                    <SectionHeader onClick={() => {/*Todo*/
                    }} title={'Book Tests'}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default index;

