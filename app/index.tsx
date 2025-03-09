//import liraries
import { Redirect } from 'expo-router';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Home = () => {
    return (
        <Redirect href="./home" />
    );
};

//make this component available to the app
export default Home;
