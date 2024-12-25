import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Animated} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "@/assets/styles/globalStyles";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import DoctorCard from "@/components/doctorCard";
import {router} from "expo-router";
import {screenHeight, screenWidth} from "@/app/_layout";
import {useSearchParams} from "expo-router/build/hooks";
import {useStore} from "@/utils/store/store";
import CouponAd from "@/components/couponAd";

export interface DoctorObject {
    id: number;
    name: string;
    speciality: string;
    degree: string;
    location: string;
    fee: number;
    yearsOfExperience: number;
    description: string;
    clinic: string;
    languages: string[];
}

const DoctorListing = () => {
    const searchParams = useSearchParams(); // This returns URLSearchParams
    const remoteFilter = searchParams.get('filter');
    const doctors: DoctorObject[] = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            speciality: "Cardiologist",
            degree: "MBBS, MD (Cardiology)",
            location: "New York, NY",
            fee: 200,
            yearsOfExperience: 15,
            description: "Dr. Sarah Johnson is a highly skilled cardiologist specializing in the diagnosis and treatment of heart diseases. With over 15 years of experience, she is dedicated to providing personalized care to her patients.",
            clinic: "HeartCare Specialists",
            languages: ["English", "Spanish","Mandarin","French"]
        },
        {
            id: 2,
            name: "Dr. Michael Lee",
            speciality: "Dermatologist",
            degree: "MBBS, MD (Dermatology)",
            location: "Los Angeles, CA",
            fee: 150,
            yearsOfExperience: 10,
            description: "Dr. Michael Lee is an expert in treating various skin conditions, including acne, eczema, and skin cancers. His compassionate approach and in-depth knowledge make him a trusted name in dermatology.",
            clinic: "SkinGlow Dermatology Center",
            languages: ["English", "Korean", "Mandarin"]
        },
        {
            id: 3,
            name: "Dr. Priya Sharma",
            speciality: "Pediatrician",
            degree: "MBBS, MD (Pediatrics)",
            location: "Chicago, IL",
            fee: 100,
            yearsOfExperience: 8,
            description: "Dr. Priya Sharma specializes in pediatric healthcare, offering comprehensive medical care for children from infancy through adolescence. She is known for her gentle and empathetic approach.",
            clinic: "KidsCare Pediatrics",
            languages: ["English", "Hindi"]
        },
        {
            id: 4,
            name: "Dr. John Davis",
            speciality: "Orthopedic Surgeon",
            degree: "MBBS, MS (Orthopedics)",
            location: "Houston, TX",
            fee: 250,
            yearsOfExperience: 20,
            description: "With two decades of experience, Dr. John Davis is a renowned orthopedic surgeon, adept at treating fractures, joint issues, and sports injuries. His precision and expertise are unparalleled.",
            clinic: "Advanced Orthopedic Solutions",
            languages: ["English"]
        },
        {
            id: 5,
            name: "Dr. Emily Martinez",
            speciality: "Gynecologist",
            degree: "MBBS, MD (Gynecology)",
            location: "Phoenix, AZ",
            fee: 180,
            yearsOfExperience: 12,
            description: "Dr. Emily Martinez provides expert care in women’s health, including prenatal care, fertility treatments, and menopause management. She is committed to empowering women through healthcare.",
            clinic: "Women’s Wellness Clinic",
            languages: ["English", "Spanish"]
        },
        {
            id: 6,
            name: "Dr. Ahmed Khan",
            speciality: "Neurologist",
            degree: "MBBS, DM (Neurology)",
            location: "Seattle, WA",
            fee: 300,
            yearsOfExperience: 18,
            description: "Dr. Ahmed Khan is a distinguished neurologist specializing in disorders of the nervous system, such as epilepsy, migraines, and multiple sclerosis. His holistic approach ensures the best outcomes for patients.",
            clinic: "NeuroCare Center",
            languages: ["English", "Urdu", "Arabic","French","Spanish","Hindi"],
        },
        {
            id: 7,
            name: "Dr. Linda Brooks",
            speciality: "General Physician",
            degree: "MBBS",
            location: "San Francisco, CA",
            fee: 120,
            yearsOfExperience: 5,
            description: "Dr. Linda Brooks is a compassionate general physician, offering routine check-ups and preventive care to promote overall well-being. She is known for her patient-focused approach.",
            clinic: "City Health Clinic",
            languages: ["English"]
        },
        {
            id: 8,
            name: "Dr. Chen Wei",
            speciality: "Psychiatrist",
            degree: "MBBS, MD (Psychiatry)",
            location: "Boston, MA",
            fee: 200,
            yearsOfExperience: 14,
            description: "Dr. Chen Wei specializes in mental health, offering therapy and treatment for anxiety, depression, and other psychological disorders. His empathetic care helps patients on their journey to wellness.",
            clinic: "MindCare Psychiatry",
            languages: ["English", "Mandarin"]
        },
        {
            id: 9,
            name: "Dr. Sofia Patel",
            speciality: "ENT Specialist",
            degree: "MBBS, MS (ENT)",
            location: "Denver, CO",
            fee: 140,
            yearsOfExperience: 9,
            description: "Dr. Sofia Patel is an experienced ENT specialist, treating conditions related to the ear, nose, and throat. Her expertise ensures accurate diagnoses and effective treatments.",
            clinic: "ClearSound ENT Clinic",
            languages: ["English", "Gujarati"]
        },
        {
            id: 10,
            name: "Dr. Roberto Gomez",
            speciality: "Dentist",
            degree: "BDS, MDS (Orthodontics)",
            location: "Miami, FL",
            fee: 100,
            yearsOfExperience: 7,
            description: "Dr. Roberto Gomez is a skilled dentist specializing in orthodontics. He provides comprehensive dental care, including braces, aligners, and routine dental check-ups.",
            clinic: "BrightSmile Dental Care",
            languages: ["English", "Spanish", "Portuguese"]
        },
        {
            id: 11,
            name: "Dr. William Parker",
            speciality: "Cardiologist",
            degree: "MBBS, MD (Cardiology)",
            location: "New York, NY",
            fee: 210,
            yearsOfExperience: 12,
            description: "Dr. William Parker specializes in interventional cardiology, focusing on procedures such as angioplasty and stenting to treat heart conditions.",
            clinic: "New York Heart Institute",
            languages: ["English", "French"]
        },
        {
            id: 12,
            name: "Dr. Angela Kim",
            speciality: "Dermatologist",
            degree: "MBBS, MD (Dermatology)",
            location: "Los Angeles, CA",
            fee: 160,
            yearsOfExperience: 9,
            description: "Dr. Angela Kim has expertise in cosmetic dermatology, offering treatments like botox, fillers, and laser therapy for skin rejuvenation.",
            clinic: "GlowDerm Aesthetics",
            languages: ["English", "Korean"]
        },
        {
            id: 13,
            name: "Dr. Ravi Menon",
            speciality: "Pediatrician",
            degree: "MBBS, MD (Pediatrics)",
            location: "Chicago, IL",
            fee: 110,
            yearsOfExperience: 7,
            description: "Dr. Ravi Menon provides comprehensive child healthcare and is known for his proactive approach to early childhood development.",
            clinic: "Healthy Kids Pediatrics",
            languages: ["English", "Malayalam", "Hindi"]
        },
        {
            id: 14,
            name: "Dr. Laura Scott",
            speciality: "Orthopedic Surgeon",
            degree: "MBBS, MS (Orthopedics)",
            location: "Houston, TX",
            fee: 240,
            yearsOfExperience: 15,
            description: "Dr. Laura Scott is renowned for her expertise in joint replacement surgeries and rehabilitation programs.",
            clinic: "OrthoPlus Center",
            languages: ["English", "Spanish"]
        },
        {
            id: 15,
            name: "Dr. Maria Torres",
            speciality: "Gynecologist",
            degree: "MBBS, MD (Gynecology)",
            location: "Phoenix, AZ",
            fee: 190,
            yearsOfExperience: 10,
            description: "Dr. Maria Torres is passionate about women’s health and specializes in managing high-risk pregnancies.",
            clinic: "Phoenix Women’s Health",
            languages: ["English", "Spanish"]
        },
        {
            id: 16,
            name: "Dr. Samuel Peterson",
            speciality: "Neurologist",
            degree: "MBBS, DM (Neurology)",
            location: "Seattle, WA",
            fee: 320,
            yearsOfExperience: 22,
            description: "Dr. Samuel Peterson focuses on treating complex neurological disorders, including Parkinson’s and Alzheimer’s diseases.",
            clinic: "NeuroMed Specialists",
            languages: ["English"]
        },
        {
            id: 17,
            name: "Dr. Olivia Martinez",
            speciality: "General Physician",
            degree: "MBBS",
            location: "San Francisco, CA",
            fee: 125,
            yearsOfExperience: 6,
            description: "Dr. Olivia Martinez is dedicated to preventative medicine and offers health checkups tailored to individual needs.",
            clinic: "San Francisco Health Center",
            languages: ["English", "Spanish"]
        },
        {
            id: 18,
            name: "Dr. Emily Zhang",
            speciality: "Psychiatrist",
            degree: "MBBS, MD (Psychiatry)",
            location: "Boston, MA",
            fee: 210,
            yearsOfExperience: 13,
            description: "Dr. Emily Zhang specializes in adolescent psychiatry, helping teenagers cope with mental health challenges.",
            clinic: "Mental Wellness Hub",
            languages: ["English", "Mandarin"]
        },
        {
            id: 19,
            name: "Dr. Sophia Gomez",
            speciality: "ENT Specialist",
            degree: "MBBS, MS (ENT)",
            location: "Denver, CO",
            fee: 150,
            yearsOfExperience: 11,
            description: "Dr. Sophia Gomez focuses on pediatric ENT cases, ensuring the best care for children with hearing and sinus issues.",
            clinic: "Ear, Nose & Throat Care",
            languages: ["English", "Spanish"]
        },
        {
            id: 20,
            name: "Dr. Anthony Rivera",
            speciality: "Dentist",
            degree: "BDS, MDS (Periodontics)",
            location: "Miami, FL",
            fee: 120,
            yearsOfExperience: 8,
            description: "Dr. Anthony Rivera provides top-notch periodontal care, focusing on gum disease treatments and dental implants.",
            clinic: "Rivera Dental Studio",
            languages: ["English", "Spanish", "Portuguese"]
        }
    ]

    const [filterMode, setFilterMode] = useState('speciality')
    const [filter, setFilter] = useState('');
    const [data, setData] = useState<DoctorObject[]>(doctors);
    const [showModes, setShowModes] = useState(false)
    const animValue = useRef(new Animated.Value(0)).current
    const {setSelectedDoctor: setDoctor, selectedDoctor} = useStore(state => state)

    const useFilter = (value: string) => {
        if (value.trim() === '') {
            setData(doctors)
        } else {
            const filteredData = doctors.filter(doctor => {
                    if (filterMode === 'name') {
                        return doctor.name.toLowerCase().includes(value.toLowerCase())
                    } else if (filterMode == 'speciality') {
                        return doctor.speciality.toLowerCase().includes(value.toLowerCase())
                    } else if (filterMode == 'location') {
                        return doctor.location.toLowerCase().includes(value.toLowerCase())
                    }
                }
            );
            setData(filteredData);
        }
    };

    useEffect(() => {
        Animated.spring(animValue, {toValue: 1, useNativeDriver: true, stiffness: 100}).start()
    }, []);


    useEffect(() => {
        if (remoteFilter) {
            setFilterMode('speciality')
            setFilter(remoteFilter)
        }
    }, [remoteFilter])

    useEffect(() => {
        useFilter(filter)
    }, [filter, filterMode])


    return (
        <SafeAreaView edges={[]} style={[globalStyles.container, {backgroundColor: 'white'}]}>
            <View style={[globalStyles.mainView,{marginTop: 0}]}>
                <ScrollView style={[styles.Scroll]} contentContainerStyle={[styles.ScrollContent]}>
                    <Animated.View style={[styles.filterContainer, {
                        transform: [{
                            translateX: animValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [400, 0]
                            })
                        }]
                    }]}>
                        {showModes &&
                            <Animated.View style={styles.modeContainer}>
                                <TouchableOpacity onPress={() => {
                                    setFilterMode('name')
                                    setFilter('')
                                    useFilter('')
                                    setShowModes(false)
                                }} style={styles.modePress}>
                                    <Text style={styles.modeText}>Name</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    setFilterMode('speciality')
                                    setFilter('')
                                    useFilter('')
                                    setShowModes(false)
                                }} style={styles.modePress}>
                                    <Text style={styles.modeText}>Speciality</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    setFilterMode('location')
                                    setFilter('')
                                    useFilter('')
                                    setShowModes(false)
                                }} style={styles.modePress}>
                                    <Text style={styles.modeText}>Location</Text>
                                </TouchableOpacity>
                            </Animated.View>}

                        <View style={styles.searchInputContainer}>
                            <AntDesign onPress={() => setShowModes(!showModes)} color={'lightgray'} size={20}
                                       name={'search1'}/>
                            <Text style={[{color: '#79c1de',fontWeight:'600'}]}>Search for:</Text>
                            <TextInput
                                value={filter}
                                onChangeText={value => {
                                    setFilter(value);
                                    useFilter(value);
                                }}
                                style={[styles.textInput]}
                                placeholderTextColor={'lightgrey'}
                                placeholder={`${filterMode}`}
                            />
                            <MaterialIcons onPress={() => setShowModes(!showModes)} size={20}
                                                    color={'lightgrey'} name={filterMode == 'name' ? 'drive-file-rename-outline' : filterMode == 'location' ? 'location-pin' : 'local-hospital'}/>
                            <AntDesign onPress={() => {
                                setFilter('')
                            }} color={'black'} size={18} name={'close'}/>
                        </View>
                    </Animated.View>
                    <Animated.View style={[styles.listContainer, {
                        transform: [{
                            translateX: animValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [400, 0]
                            })
                        }]
                    }]}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                                    contentContainerStyle={{height: 50, flexDirection: 'row', marginTop: 10, gap: 10,paddingHorizontal:10}}>
                            <CouponAd label={'cashback on mobikwik wallet'} header={'250'}/>
                            <CouponAd label={'cashback on mobikwik wallet'} header={'100'}/>
                            <CouponAd label={'cashback on mobikwik wallet'} header={'50'}/>

                        </ScrollView>
                        <Text style={[styles.text]}>Showing earliest available doctors</Text>
                        {data.length > 0 ? (
                            data.map(item => (
                                <DoctorCard selected={selectedDoctor == item} onPress={() => {
                                    router.push({
                                        pathname: '/doctorDetails',
                                        params: {doctor: JSON.stringify(item)}
                                    })
                                }} doctor={item} key={item.id}
                                            selectDoctor={() => setDoctor(item)}/>
                            ))
                        ) : (
                            <View style={{height:screenHeight/2,justifyContent:'center',alignItems:'center'}}>
                            <Text style={styles.noResult}>No doctors available</Text>

                            </View>
                        )}
                    </Animated.View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default DoctorListing;

const styles = StyleSheet.create({
    searchInputContainer: {
        width: '90%',
        // borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightGrey',
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5,
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        elevation:5
    },
    textInput: {
        flex: 1,
        fontSize:14
    },
    listContainer: {
        zIndex: -1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f5f9',
        // paddingTop: 30
    },
    doctorName: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    noResult: {
        fontSize: 20,
        color: 'tomato',
        fontFamily: 'Nunito',
        fontWeight: '800'
    },
    filterContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        paddingVertical: 20,
        // borderWidth: 1,
        backgroundColor: 'white',
    },
    ScrollContent: {
        paddingBottom: 100,
        // borderWidth: 1,
        width: '100%',
    },
    Scroll: {
        width: screenWidth,
        // borderWidth: 1,
    },
    modeContainer: {
        position: 'absolute',
        backgroundColor: 'white',
        flex: 1,
        width: screenWidth / 3,
        top: '100%',
        right: 70,
        zIndex: 3,
        borderRadius: 10,
        borderTopEndRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowRadius: 5,
        shadowOpacity: 0.3
    },
    modeText: {
        fontSize: 14,
        textAlign: 'left',
        color: 'grey'
    },
    modePress: {
        padding: 15,
        width: '100%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,

    },
    text:{
        fontSize: 15,
        textAlign: 'left',
        width: '100%',
        marginTop: 25,
        marginLeft: 30,
        fontWeight:'600'
    }
});
