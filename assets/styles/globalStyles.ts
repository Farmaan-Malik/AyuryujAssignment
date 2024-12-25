import {StyleSheet} from "react-native";
import {screenWidth} from "@/app/_layout";

export const  globalStyles = StyleSheet.create({
    container: {
        // flex: 1,
        width:screenWidth,
        height:'100%',
        backgroundColor: '#F5FCFF',
        // padding:8,
        // borderWidth:1
    },
    mainView: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop:'15%',
        // borderWidth:1,
        width:'100%',
        height:'100%',
        paddingHorizontal:8
    }
});