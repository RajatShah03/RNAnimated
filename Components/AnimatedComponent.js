import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import useBlink from '../Hooks/Animated/useBlink';
import useFadein from '../Hooks/Animated/useFadein';
import useFadeout from '../Hooks/Animated/useFadeout';
import useMotion from '../Hooks/Animated/useMotion';
import usePulse from '../Hooks/Animated/usePulse';
import useShake from '../Hooks/Animated/useShake';
import useSpin from '../Hooks/Animated/useSpin';
import Box from './Box';
import Circle from './Circle';

const AnimatedComponent = () => {
  const boxBlinkOpacity = useBlink();
  const boxFadeInOpacity = useFadein();
  const boxFadeOutOpacity = useFadeout();
  const boxPulseScale = usePulse();
  const boxShakeX = useShake();
  const boxSpinDeg = useSpin('0deg', '90deg', 1000);
  const boxSlideX = useMotion();

  const circleBlinkOpacity = useBlink(1, 1000);
  const circleFadeInOpacity = useFadein(1000);
  const circleFadeOutOpacity = useFadeout(1000);
  const circlePulseScale = usePulse(1, 0.2, 1000);
  const circleShakeX = useShake(100);
  const circleSpinDeg = useSpin();
  const circleSlideX = useMotion(10, -10, 300);

  return (
    <ScrollView contentContainerStyle={styles.outerWrapper}>
      <View style={styles.innerWrapper}>
        <View style={styles.elementWrapper}>
          <Box style={{ opacity: boxBlinkOpacity }} />
          <Text>Blink (0, 500ms)</Text>
        </View>
        <View style={styles.elementWrapper}>
          <Circle style={{ opacity: circleBlinkOpacity }} />
          <Text>Blink (1, 1000ms)</Text>
        </View>
      </View>
      <View style={styles.innerWrapper}>
        <View style={styles.elementWrapper}>
          <Box style={{ opacity: boxFadeInOpacity }} />
          <Text>Fade in (500ms)</Text>
        </View>
        <View style={styles.elementWrapper}>
          <Circle style={{ opacity: circleFadeInOpacity }} />
          <Text>Fade in (1000ms)</Text>
        </View>
      </View>
      <View style={styles.innerWrapper}>
        <View style={styles.elementWrapper}>
          <Box style={{ opacity: boxFadeOutOpacity }} />
          <Text>Fade out (500ms)</Text>
        </View>
        <View style={styles.elementWrapper}>
          <Circle style={{ opacity: circleFadeOutOpacity }} />
          <Text>Fade out (1000ms)</Text>
        </View>
      </View>
      <View style={styles.innerWrapper}>
        <View style={styles.elementWrapper}>
          <Box style={{ transform: [{ scale: boxPulseScale }] }} />
          <Text>Pulse (500ms)</Text>
        </View>
        <View style={styles.elementWrapper}>
          <Circle style={{ transform: [{ scale: circlePulseScale }] }} />
          <Text>Pulse (1, 0.2, 1000ms)</Text>
        </View>
      </View>
      <View style={styles.innerWrapper}>
        <View style={styles.elementWrapper}>
          <Box style={{ transform: [{ translateX: boxShakeX }] }} />
          <Text>Shake (80ms)</Text>
        </View>
        <View style={styles.elementWrapper}>
          <Circle style={{ transform: [{ translateX: circleShakeX }] }} />
          <Text>Shake (100ms)</Text>
        </View>
      </View>
      <View style={styles.innerWrapper}>
        <View style={styles.elementWrapper}>
          <Box style={{ transform: [{ rotateZ: boxSpinDeg }] }} />
          <Text>Spin (0deg, 90deg, 1000ms)</Text>
        </View>
        <View style={styles.elementWrapper}>
          <Circle style={{ transform: [{ rotateX: circleSpinDeg }] }} />
          <Text>Spin (0deg, 360deg, 500ms)</Text>
        </View>
      </View>
      <View style={styles.innerWrapper}>
        <View style={styles.elementWrapper}>
          <Box style={{ transform: [{ translateX: boxSlideX }] }} />
          <Text>SlideX (-8, +8, 180ms)</Text>
        </View>
        <View style={styles.elementWrapper}>
          <Circle style={{ transform: [{ translateX: circleSlideX }] }} />
          <Text>SlideX (-10, +10, 300ms)</Text>
        </View>
      </View>
      <View style={[styles.innerWrapper, styles.higher]}>
        <View style={styles.elementWrapper}>
          <Box style={{ transform: [{ translateY: boxSlideX }] }} />
          <Text>SlideY (-8, +8, 180ms)</Text>
        </View>
        <View style={styles.elementWrapper}>
          <Circle style={{ transform: [{ translateY: circleSlideX }] }} />
          <Text>SlideY (+10, -10, 300ms)</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AnimatedComponent;

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  innerWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  elementWrapper: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  higher: {
    // flex: 3,
  },
});
