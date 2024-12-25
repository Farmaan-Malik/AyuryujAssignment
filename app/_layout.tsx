import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import React from "react";
import {useFonts} from "expo-font";
import { Dimensions} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import CustomDrawerContent from "@/components/customDrawerContent";
import {useSegments} from "expo-router";


export const {width: screenWidth,height:screenHeight} = Dimensions.get('window');

export default function RootLayout() {

     const [fonts] = useFonts({
        "Nunito": require('@/assets/fonts/Nunito.ttf'),
        "NunitoItalic": require("@/assets/fonts/Nunito-Italic.ttf"),
        "Nova-Oval": require("@/assets/fonts/NovaOval-Regular.ttf"),
    });
    const segments = useSegments();

    return (
        <GestureHandlerRootView>
            <Drawer drawerContent={CustomDrawerContent} screenOptions={{
                drawerItemStyle: {
                    marginTop: 10,
                    shadowColor: 'black',
                    shadowOpacity: 0.1,
                    shadowRadius: 1,
                    overflow: 'visible',
                    shadowOffset: {width: 5, height: 5},
                    backgroundColor: 'white',
                    elevation: 2,
                },

                drawerActiveTintColor: 'tomato',
                drawerActiveBackgroundColor: 'white',
                drawerInactiveTintColor: 'tomato',
                drawerHideStatusBarOnOpen: true,
                drawerStatusBarAnimation: 'slide',
                drawerLabelStyle: {fontSize: 12},
                headerTransparent: true,
                headerTitleStyle: {fontSize: 16, fontFamily: 'Nunito', fontWeight: 'semibold'},
            }}>


                <Drawer.Screen
                    name="(mainTabs)"
                    options={{
                        title: 'Home', drawerIcon: ({color, size}) => (
                            <Ionicons color={color} size={size} name={'home'}/>
                        ),
                        headerTitle: '',
                        headerShown: (segments[1] !== "(doctorListing)"),
                    }}
                />

                <Drawer.Screen
                    name="index"
                    options={{
                        title: 'Log Out', headerShown: false, drawerIcon: ({color, size}) => (
                            <Ionicons color={color} size={size} name={'log-out'}/>
                        )
                    }}/>
            </Drawer>
        </GestureHandlerRootView>
    )
}

