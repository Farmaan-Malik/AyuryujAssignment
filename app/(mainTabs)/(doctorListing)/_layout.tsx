import React from 'react';
import {router, Stack} from "expo-router";
import {AntDesign} from "@expo/vector-icons";

const _layout = () => {
    return (
       <Stack screenOptions={{headerLeft:()=><AntDesign onPress={()=>router.back()} size={20} color={'grey'} name={'arrowleft'}/>}} >
           <Stack.Screen name={'index'} options={{headerTitle:'Choose your Doctor'}}/>
           <Stack.Screen name={'doctorDetails'} options={{headerTitle:'Doctor\'s Profile' }} />
       </Stack>
    );
};

export default _layout;

