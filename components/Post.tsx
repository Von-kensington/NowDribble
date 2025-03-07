//import liraries
import { Avatar, Icon } from '@rneui/base';
import { Card, Divider, Text } from '@rneui/themed';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Post = ({ post }: { post: { title: string, body: string } }) => {
    const [expanded, setExpanded] = useState(false);

    const postText =
      "This is an example of a text body that mimics an Instagram caption. It can be long or short. #ReactNative #InstagramClone #Coding";
  
    return (
      <Card containerStyle={styles.card}>
        {/* Header Section */}
        <View style={styles.header}>
          <Avatar
            rounded
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            size="medium"
          />
          <View style={styles.userInfo}>
            <Text style={styles.username}>john_doe</Text>
            <Text style={styles.timestamp}>2h ago</Text>
          </View>
          <Icon name="dots-three-horizontal" type="entypo" size={20} />
        </View>
  
        {/* Text Body (Caption) */}
        <View style={styles.captionContainer}>
          <Text style={styles.username}>john_doe</Text>
          <Text style={styles.caption} numberOfLines={expanded ? undefined : 2}>
            {postText}
          </Text>
            <TouchableOpacity onPress={() => setExpanded(!expanded)}>
              <Text style={styles.readMore}>Read {expanded? "less": "more"}</Text>
            </TouchableOpacity>
        </View>
      </Card>
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      borderWidth: 0,
      borderBottomWidth: 1,
      shadowOpacity: 0,
      padding: 10,
      elevation: 3,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
    },
    userInfo: {
      flex: 1,
      marginLeft: 10,
    },
    username: {
      fontSize: 16,
      fontWeight: "bold",
    },
    timestamp: {
      fontSize: 12,
      color: "gray",
    },
    captionContainer: {
      marginTop: 8,
    },
    caption: {
      fontSize: 14,
      color: "#333",
    },
    readMore: {
      color: "#3498db",
      marginTop: 4,
    },
  });

export default Post;
