import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {globalStyles} from "@/assets/styles/globalStyles";
import {SafeAreaView} from "react-native-safe-area-context";

const ProfileScreen = () => {
    return (
        <SafeAreaView style={[globalStyles.container]}>

        <View style={globalStyles.mainView}>
            <Text>ProfileScreen</Text>
        </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

