import { createTheme, ThemeProvider } from "@rneui/themed";
import { Redirect } from "expo-router";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const theme = createTheme({
    lightColors: {
        primary: 'red',
    },
    darkColors: {
        primary: 'blue',
    },
    mode: 'light',
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Redirect href="./home" />
        </ThemeProvider>
    );
};



export default App;
