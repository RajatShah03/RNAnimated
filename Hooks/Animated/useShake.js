import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useShake = (duration = 80) => {
  const x = useRef(new Animated.Value(0)).current;

  const shake = () => {
    Animated.sequence([
      Animated.timing(x, {
        toValue: -5,
        duration,
      }),
      Animated.timing(x, {
        toValue: 0,
        duration,
      }),
      Animated.timing(x, {
        toValue: 5,
        duration,
      }),
    ]).start(() => shake());
  };

  useEffect(() => {
    const timeout = setTimeout(() => shake(), duration);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  return x;
};

export default useShake;
