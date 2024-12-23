import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConsultTile = () => {
    return (
        <View style={styles.container}>
            <Text>ConsultTile</Text>
        </View>
    );
};

export default ConsultTile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

