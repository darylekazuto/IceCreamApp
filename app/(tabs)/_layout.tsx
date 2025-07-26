import {View, Text} from 'react-native'
import React from 'react'
import {Redirect, Slot} from "expo-router";

export default function _Layout() {
    const  isAuthentecated = false;

    if(!isAuthentecated) return <Redirect href="/sign-in" />
    return  <Slot />
}