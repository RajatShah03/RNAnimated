import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useSpin = (
  initialValue = '0deg',
  finalValue = '360deg',
  duration = 500,
) => {
  const d = useRef(new Animated.Value(0)).current;

  const spin = () => {
    Animated.timing(d, {
      toValue: 1,
      duration,
    }).start();
  };

  useEffect(() => {
    const timeout = setTimeout(() => spin(), duration);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  return d.interpolate({
    inputRange: [0, 1],
    outputRange: [initialValue, finalValue],
  });
};

export default useSpin;
