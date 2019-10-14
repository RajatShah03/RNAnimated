import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AnimatedComponent from './Components/AnimatedComponent';

const App = () => {
  return (
    <SafeAreaView style={[styles.bodyMargin, styles.appWrapper]}>
      <AnimatedComponent />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  bodyMargin: {
    margin: 12,
  },
  appWrapper: {
    flex: 1,
  },
});
