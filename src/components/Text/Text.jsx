import { View, Text as RNText, StyleSheet } from "react-native";
import React from "react";
import { presets } from "./Text.Presets";

export default function Text({ children, preset = "default", style }) {
  const textStyle = StyleSheet.compose(presets[preset], style);

  return <RNText style={textStyle}>{children}</RNText>;
}
