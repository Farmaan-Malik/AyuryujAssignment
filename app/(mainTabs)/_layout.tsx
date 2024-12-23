import {View, Text} from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import TabLayout from '@/app-example/app/(tabs)/_layout'
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from "expo-router/drawer";
import {FontAwesome, Ionicons, Octicons} from "@expo/vector-icons";

const _layout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,tabBarBackground: () => {
                return <View style={{backgroundColor: 'tomato', flex: 1}}></View>;
            }
        }}>
            <Tabs.Screen
                name='index'
                options={{
                    tabBarIcon: ({focused}) => {
                        return <Ionicons color={'white'} size={25} name={focused ? 'home' : 'home-outline'}></Ionicons>;
                    },
                    tabBarLabel: 'Home',
                    tabBarLabelStyle:{fontFamily:'Nunito', fontSize: 10,color:'white',fontWeight:'800'},
                }}
            />
            <Tabs.Screen
                name='doctorListing'
                options={{
                    tabBarIcon: ({focused}) => {
                        return <Ionicons color={'white'} size={25}
                                         name={focused ? 'medical' : 'medical-outline'}></Ionicons>;
                    },
                    tabBarLabel: 'Doctor Listing',
                    tabBarLabelStyle:{fontFamily:'Nunito', fontSize: 10,color:'white',fontWeight:'800'},
                }}
            />
            <Tabs.Screen
                name='profileScreen'

                options={{
                    tabBarIcon: ({focused}) => {
                        return <Octicons color={'white'} size={25}
                                         name={focused ? 'person-fill' : 'person'}></Octicons>;
                    },
                    tabBarLabel: 'Profile',
                    tabBarLabelStyle:{fontFamily:'Nunito', fontSize: 10,color:'white',fontWeight:'800'},
                }}
            />
        </Tabs>

    )
}

export default _layout