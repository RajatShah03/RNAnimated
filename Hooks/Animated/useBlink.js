import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useBlink = (initialValue = 0, duration = 500) => {
  const o = useRef(new Animated.Value(initialValue)).current;

  const blink = () => {
    Animated.sequence([
      Animated.timing(o, {
        toValue: initialValue ? 0 : 1,
        duration,
      }),
      Animated.timing(o, {
        toValue: initialValue ? 1 : 0,
        duration,
      }),
    ]).start(() => blink());
  };
  useEffect(() => {
    const timeout = setTimeout(() => blink(), duration);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  return o;
};

export default useBlink;
