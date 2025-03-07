import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Post from './Post';

const Feed = () => {
    return (
        <View style={styles.container}>
            <Post post={{title: "Antonio Cook", body: "Welcome to now dribble"}}/>
            <Post post={{title: "Antonio Cook", body: "Welcome to now dribble"}}/>
            <Post post={{title: "Antonio Cook", body: "Welcome to now dribble"}}/>
            <Post post={{title: "Antonio Cook", body: "Welcome to now dribble"}}/>
            <Text style={styles.noPostText}>Nothing posted yet...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    noPostText:{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        color: 'gray'
    }
});

export default Feed;
