import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Image} from 'react-native';
import {useStore} from "@/utils/store/store";
import {createAvatar} from "@dicebear/core";
import {lorelei} from "@dicebear/collection";
import {SvgXml} from "react-native-svg";
import {SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "@/assets/styles/globalStyles";
import Switch from "@/components/switch";
import {router} from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const EditProfile = () => {
    const {setUsername, setSvg, username: currentUser, age, gender, setGender,setAge} = useStore(state => state)
    const [formName, setFormName] = useState<string>(currentUser);
    const [formAge, setFormAge] = useState<string>(age);
    const [formGender, setFormGender] = useState<string>(gender)

    const avatar = createAvatar(lorelei, {
        seed: formName
        // ... options
    });
    const svg = avatar.toString()
    return (
        <SafeAreaView style={[globalStyles.container]}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={[globalStyles.mainView]}>
                    {Platform.OS === 'ios' ? <SvgXml style={[styles.svg]} xml={svg}/> :  <Image style={[styles.svg,{borderWidth: 0}]} source={require('@/assets/images/profilePlaceholder.png')}/>}
                    <Text style={[styles.text]}> Username:</Text>
                    <TextInput style={[styles.input]} value={formName}
                               onChangeText={(value) => setFormName(value)}/>
                    <Text style={[styles.text]}> Age:</Text>
                    <TextInput keyboardType={'numeric'} style={[styles.input]} value={formAge}
                               onChangeText={(value) => setFormAge(value)}/>

                    <Text style={[styles.text]}> Gender:</Text>
                    <View style={[styles.switchContainer]}>
                        <Switch onPress={() => {
                            setFormGender('Male')
                        }} selected={formGender == 'Male'} label={'Male'}/>
                        <Switch onPress={() => {
                            setFormGender('Female')
                        }} selected={formGender == "Female"} label={'Female'}/>
                    </View>
                    <View style={[{flex: 1, width: '90%',gap:30, justifyContent: 'center', alignItems: 'center',flexDirection:'row'}]}>
                        <TouchableOpacity style={[styles.touchable]} onPress={() => {
                            router.replace('/(mainTabs)/(profileScreen)')
                        }}>
                            <MaterialIcons color={'tomato'} size={20} name={'cancel'}/>
                            <Text style={[{
                                fontSize: 15,
                                fontFamily: 'Nunito',
                                fontWeight: '800',
                                alignSelf: 'center',
                                padding: 8,
                                color:'tomato'
                            }]}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.touchable,{backgroundColor: '#90EE90'}]} onPress={() => {
                            setUsername(formName)
                            setGender(formGender)
                            setAge(formAge)
                            setSvg(svg)
                            setTimeout(()=>{
                                router.replace('/(mainTabs)/(profileScreen)')
                            },500)
                        }}>
                            <Text style={[{
                                fontSize: 15,
                                fontFamily: 'Nunito',
                                fontWeight: '900',
                                alignSelf: 'center',
                                padding: 8,
                                color:'white'
                            }]}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    svg: {
        width: 130,
        height: 130,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 100,
        marginTop: 30,
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        width: '80%',
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 12,
        fontSize: 18,
        backgroundColor:'white',
    },
    text: {
        fontSize: 15,
        fontFamily: 'Nunito',
        fontWeight: '600',
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginVertical: 8,
    },
    switchContainer: {
        flexDirection: 'row',
        width: '80%',
        gap: 10
    },
    touchable: {
        backgroundColor: 'white',
        flex:1,
        // width: '80%',
        // borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10,
        shadowColor: '#000',
        shadowOffset:{width: 0, height: 2},
        shadowOpacity: 0.2,
        flexDirection:'row',
        elevation:5,
    }

});

