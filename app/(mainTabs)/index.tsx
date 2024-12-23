import React, {useEffect, useRef} from 'react';
import {
    View,

    Animated,
    useAnimatedValue,
    ScrollView
} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "@/assets/styles/globalStyles";
import SectionHeader from "@/components/sectionHeader";
import HomeTiles from "@/components/homeTiles";
import {screenWidth} from "@/app/_layout";
import AdView from "@/components/adView";


const index = () => {
    const appear = useAnimatedValue(0)
    const disappear = useAnimatedValue(1)
    const sectionData = [
        {
            title: "Consult a Doctor",
            data: [
                {id: "1", name: "General Physician", description: "Get a consultation for common ailments."},
                {id: "2", name: "Pediatrician", description: "Specialized care for your children."},
                {id: "3", name: "Dermatologist", description: "Skin, hair, and nail concerns."},
                {id: "4", name: "Psychiatrist", description: "Mental health and emotional well-being."},
            ],
        },
        {
            title: "Book Tests",
            data: [
                {id: "5", name: "Blood Test", description: "Comprehensive blood panel testing."},
                {id: "6", name: "X-Ray", description: "Radiographic imaging for diagnosis."},
                {id: "7", name: "MRI Scan", description: "Detailed imaging of organs and tissues."},
                {id: "8", name: "COVID-19 Test", description: "RT-PCR and rapid antigen tests available."},
            ],
        },
    ];


    useEffect(() => {
        Animated.timing(appear, {toValue: 1, useNativeDriver: true, duration: 3000}).start();
        Animated.timing(disappear, {toValue: 0, useNativeDriver: true, duration: 3000}).start();

    }, []);
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={[globalStyles.mainView]}>
                <ScrollView>
                    <View style={{
                        display: 'flex',
                        flex:1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        // borderWidth: 1
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
                    <SectionHeader onClick={() => {/*Todo*/
                    }} title='Consult a Doctor'/>
                    <View style={{flex: 1}}>

                    </View>
                    <SectionHeader onClick={() => {/*Todo*/
                    }} title={'Book Tests'}/>
                    {/*<SectionList style={{flex: 1}} contentContainerStyle={{paddingBottom: 300}} sections={sectionData}*/}
                    {/*             renderItem={({item}) => {*/}
                    {/*                 return (*/}
                    {/*                     <View style={{*/}
                    {/*                         marginTop: 50,*/}
                    {/*                         backgroundColor: 'black',*/}
                    {/*                         width: '100%',*/}
                    {/*                         height: 300*/}
                    {/*                     }}></View>*/}
                    {/*                 )*/}
                    {/*             }}*/}
                    {/*    // stickyHeaderHiddenOnScroll={true}*/}
                    {/*             renderSectionHeader={({section: {title}}) => (*/}
                    {/*                 <View style={{*/}
                    {/*                     display: 'flex',*/}
                    {/*                     flexDirection: 'row',*/}
                    {/*                     justifyContent: 'center',*/}
                    {/*                     alignItems: 'center'*/}
                    {/*                 }}>*/}
                    {/*                     <View style={{*/}
                    {/*                         borderColor: 'grey',*/}
                    {/*                         width: '25%',*/}
                    {/*                         borderWidth: StyleSheet.hairlineWidth*/}
                    {/*                     }}/><Text style={{*/}
                    {/*                     fontSize: 16,*/}
                    {/*                     margin: 8,*/}
                    {/*                     color: 'grey',*/}
                    {/*                     fontFamily: 'Nunito',*/}
                    {/*                     fontWeight: '700'*/}
                    {/*                 }}>{title}</Text>*/}
                    {/*                     <View style={{*/}
                    {/*                         borderColor: 'grey',*/}
                    {/*                         width: '25%',*/}
                    {/*                         borderWidth: StyleSheet.hairlineWidth*/}
                    {/*                     }}/><Text style={{}}/>*/}
                    {/*                 </View>*/}
                    {/*             )}/>*/}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default index;

