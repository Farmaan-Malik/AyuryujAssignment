import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from "@react-navigation/elements";
import {Colors} from "@/assets/colors/colors";

interface SectionHeaderProps {
    title: string;
    onClick: () => void;
}

const SectionHeader = ({title, onClick}: SectionHeaderProps) => {
    return (
        <View style={[styles.container]}>
            <Text style={[styles.title]}>
                {title}
            </Text>
            <TouchableOpacity onPress={onClick} style={styles.button}>
                <Text style={styles.buttonText}>View All</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SectionHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

    },
    button: {
        backgroundColor: Colors.Blue,
        padding: 6,
        borderRadius: 50,
        paddingHorizontal:10
    },
    buttonText: {
        color: 'white',
        fontWeight: '800',
        fontFamily: 'Nunito',
        fontSize: 12,
    },
    title: {
        fontFamily: 'Nunito',
        fontSize: 16,
        fontWeight: '600',
        // borderWidth: 1,
        marginVertical: 15}
});

