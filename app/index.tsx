import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, Animated, useAnimatedValue, ImageBackground} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {FontAwesome} from "@expo/vector-icons";
import {router} from "expo-router";
import {screenWidth} from "@/app/_layout";

const index = () => {
    const animTexts = useRef(new Animated.Value(0)).current


    useEffect(() => {
        Animated.spring(animTexts, {toValue: 1, useNativeDriver: true, stiffness:100}).start();

    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "space-around",
                    paddingVertical: 20,
                }}
                source={require("@/assets/images/wavesLogin.png")}
                resizeMode="cover">


            <View style={{marginTop: 20}}>
                <Animated.Text style={{
                    fontSize: 50,
                    fontWeight: '600',
                    fontFamily: 'Nova-Oval',
                    color: 'tomato',
                    transform: [{translateY: animTexts.interpolate({inputRange: [0, 1], outputRange: [-300, 0]})},{scale: animTexts.interpolate({inputRange: [0, 1], outputRange: [0,1]})}]
                }}>Health<Text
                    style={{color: 'green'}}>{'\n Bridge'}</Text></Animated.Text>
            </View>
            {/*<View style={[styles.container]}>*/}
            {/*    <Animated.Image style={{*/}
            {/*        flex: 1,*/}
            {/*        width: screenWidth,*/}
            {/*        height: screenHeight / 3,*/}
            {/*        position: 'absolute',*/}
            {/*        top: 0,*/}
            {/*        borderWidth: 1,*/}
            {/*        // left: '25%',*/}
            {/*        transform: [{scale: animTexts.interpolate({inputRange:[0,1],outputRange:[0,1]})}]*/}

            {/*    }} source={require('@/assets/images/docBg.png')}/>*/}
            {/*</View>*/}
            <Animated.View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center',transform: [{translateY: animTexts.interpolate({inputRange: [0, 1], outputRange: [300, 0]})},{scale: animTexts.interpolate({inputRange: [0, 1], outputRange: [0,1]})}]
            }}>

                <Text style={{
                    fontFamily: 'Nunito',
                    marginBottom: 30,
                    fontSize: 20,
                    width: screenWidth,
                    textAlign: 'center',
                }}>
                    Instant Access to Expert Care</Text>
                <FontAwesome onPress={() => {
                    router.replace('/(mainTabs)')
                }} size={60} color={'tomato'} name={'arrow-circle-right'}/>

            </Animated.View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});