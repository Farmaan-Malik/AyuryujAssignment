import React from 'react';
import {Stack} from "expo-router";

const _layout = () => {
    return (
       <Stack>
           <Stack.Screen
               options={{headerShown: false}}
               name={"index"}
           />
           <Stack.Screen
               options={{headerShown: false}}
               name={"editProfile"}
           />
       </Stack>
    );
};

export default _layout;
