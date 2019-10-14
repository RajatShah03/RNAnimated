import React from 'react';
import { Animated, StyleSheet } from 'react-native';

const Circle = ({ style }) => {
  return <Animated.View style={{ ...styles.circle, ...style }} />;
};

export default Circle;

const styles = StyleSheet.create({
  circle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'purple',
  },
});
