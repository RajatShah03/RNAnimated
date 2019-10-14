import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const usePulse = (initialValue = 0, finalValue = 1, duration = 500) => {
  const s = useRef(new Animated.Value(initialValue)).current;

  const pulse = () => {
    Animated.sequence([
      Animated.timing(s, {
        toValue: finalValue,
        duration,
      }),
      Animated.timing(s, {
        toValue: initialValue,
        duration,
      }),
    ]).start(() => pulse());
  };

  useEffect(() => {
    const timeout = setTimeout(() => pulse(), duration);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  return s;
};

export default usePulse;
