import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type SwitchProps = {
    label: string;
    selected: boolean;
    onPress: () => void;
}

const Switch = ({label,selected,onPress}:SwitchProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor:selected ? 'tomato' : 'white'}]}>
            <View>
                <Text style={[styles.text,{color: selected ? 'white' : 'tomato'}]}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Switch;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        flex: 1,
        borderRadius:50,
        paddingVertical:10,
        marginBottom:10,
        shadowColor: '#000',
        shadowOffset:{width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation:5,
    },
    text:{
        fontSize:16,
        fontWeight:'600',
        fontFamily:'Nunito',

    }
});

