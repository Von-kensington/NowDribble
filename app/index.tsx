import { useAuth } from "@/context/AuthContext";
import { auth } from "@/firebaseConfig";
import { Redirect } from "expo-router";
import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

const App = () => {
  return <Redirect href="/home" />;
};

export default App;
