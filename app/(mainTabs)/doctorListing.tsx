import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {globalStyles} from "@/assets/styles/globalStyles";
import {SafeAreaView} from "react-native-safe-area-context";

const DoctorListing = () => {
    return (
        <SafeAreaView style={[globalStyles.container]}>

        <View style={globalStyles.mainView}>
            <Text>DoctorListing</Text>
        </View>
        </SafeAreaView>
    );
};

export default DoctorListing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

