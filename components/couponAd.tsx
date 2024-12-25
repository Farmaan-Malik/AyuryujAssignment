import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

type Props = {
    header:string;
    label:string;
}

const CouponAd = ({header,label}:Props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={require('@/assets/images/mobiKwikLogo.png')}/>
           <View style={[styles.col]}>
            <Text style={styles.header}>Upto Rs {header}</Text>
            <Text style={styles.label}>{label}</Text>
           </View>

        </TouchableOpacity>
    );
};

export default CouponAd;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        paddingHorizontal:5,
        gap:5,
        borderRadius:10,
        borderColor:'grey',
        backgroundColor:'white',
    },
    image: {
        height:30,
        width:30
    },
    header: {
        fontSize:14,
        fontWeight:'700'
    },
    label: {
        fontSize:12,
        color:'grey',
        marginTop:2

    },
    col:{
        paddingHorizontal:5,
        borderLeftWidth:1,
        borderColor:'grey',
    }
});

