import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const CustomInput = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <View style={styles.container}>
            {/* Custom placeholder */}
            {inputValue === '' && (
                <Text style={styles.placeholder}>
                    <Text style={styles.part1}>First Half</Text>
                    <Text style={styles.part2}> Second Half</Text>
                </Text>
            )}

            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="" // Leave empty to hide default placeholder
            />
        </View>
    );
}

export default CustomInput;

const styles = StyleSheet.create({
    container: {
        // margin: 20,
        // position: 'relative',
        flexDirection: 'row',
        flex: 1,
        borderWidth: 1,
    },
    input: {
        height: 40,
        // borderBottomWidth: 1,
        fontSize: 16,
        color: 'black',
    },
    placeholder: {
        position: 'absolute',
        left: 0,
        top: 8, // Adjust to align with the text input
        fontSize: 16,
        flexDirection: 'row',
        // borderWidth: 1,
        width: '100%',
    },
    part1: {
        color: 'red',
    },
    part2: {
        color: 'blue',
    },
});
