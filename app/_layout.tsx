import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import React, {useEffect} from "react";
import {useFonts} from "expo-font";
import {Dimensions} from "react-native";

export const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export default function RootLayout() {
    const [fonts] = useFonts({
        "Nunito": require('@/assets/fonts/Nunito.ttf'),
        "NunitoItalic": require("@/assets/fonts/Nunito-Italic.ttf"),
        "Nova-Oval": require("@/assets/fonts/NovaOval-Regular.ttf"),
    });
    return (
        <GestureHandlerRootView>
            <Drawer screenOptions={{
                drawerType: "front",
                drawerContentContainerStyle: {flex: 1, backgroundColor: 'tomato'},
                drawerItemStyle: {
                    marginTop: 10,
                    shadowColor: 'black',
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                    overflow: 'visible',
                    shadowOffset: {width: 5, height: 5},
                    backgroundColor: 'white',
                    elevation: 2,
                },
                drawerActiveBackgroundColor: 'white',
                drawerInactiveTintColor: 'grey',
                drawerHideStatusBarOnOpen: true,
                drawerStatusBarAnimation: 'slide',
                drawerLabelStyle: {fontSize: 12},
                headerTransparent: true,
                headerTitleStyle: {fontSize: 16,fontFamily: 'Nunito', fontWeight: 'semibold'},
                drawerContentStyle: {borderRadius:20},
                drawerStyle: {backgroundColor:'transparent'},
            }}>

                <Drawer.Screen
                    name="(mainTabs)"
                    options={{title: 'Home'}}
                />
                <Drawer.Screen
                    name="setting"/>
                <Drawer.Screen
                    name="index"
                options={{title: 'Main',headerShown: false}}/>
            </Drawer>
        </GestureHandlerRootView>
    )
}
