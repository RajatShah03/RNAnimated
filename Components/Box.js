import React from 'react';
import { Animated, StyleSheet } from 'react-native';

const Box = ({ style }) => {
  return <Animated.View style={{ ...styles.box, ...style }} />;
};

export default Box;

const styles = StyleSheet.create({
  box: {
    width: 80,
    height: 80,
    backgroundColor: 'purple',
  },
});
