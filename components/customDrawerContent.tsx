import React from 'react';
import {View, Text, StyleSheet, Platform, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {useStore} from "@/utils/store/store";
import {Ionicons} from "@expo/vector-icons";
import {router} from "expo-router";
import {SvgXml} from "react-native-svg";

export default function CustomDrawerContent(props: any) {
    const {username, age, gender,svg} = useStore((state: any) => state);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {Platform.OS === 'ios' ? <SvgXml style={{width: 80, height: 80, borderWidth:StyleSheet.hairlineWidth,borderColor:'white', borderRadius:100}} xml={svg}/> : <Image  source={require('@/assets/images/profilePlaceholder.png')} resizeMode={'cover'}
                           style={{width: 80, height: 80,borderWidth:StyleSheet.hairlineWidth, borderRadius:100}}/>
                }
                <View>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.username}><Text>{gender}, </Text>{age} yrs</Text>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItem style={{
                    shadowColor: 'blarck',
                    shadowOpacity: 0.1,
                    shadowRadius: 1,
                    overflow: 'visible',
                    shadowOffset: {width: 5, height: 5},
                    backgroundColor: 'white',
                    elevation: 2,
                }} icon={({size,color})=>(
                    <Ionicons name={'settings'} size={size}  color={'tomato'}/>
                )} label={"Profile"} labelStyle={{color:'tomato'}} onPress={()=>{router.navigate('/(mainTabs)/(profileScreen)')}}/>
                <DrawerItem style={{
                    marginTop: 10,
                    shadowColor: 'black',
                    shadowOpacity: 0.1,
                    shadowRadius: 1,
                    overflow: 'visible',
                    shadowOffset: {width: 5, height: 5},
                    backgroundColor: 'white',
                    elevation: 2,
                }} icon={({size,color})=>(
                    <Ionicons name={'people'} size={size}  color={'tomato'}/>
                )} label={"Doctor listing"} labelStyle={{color:'tomato'}} onPress={()=>{router.navigate('/(mainTabs)/(doctorListing)')}}/>
                <DrawerItemList {...props} />

            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: 'tomato',
        alignItems: 'center',
        gap: 20
    },
    username: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Nunito',
    },
});
