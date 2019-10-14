import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useMotion = (initialValue = -20, finalValue = 20, duration = 180) => {
  const p = useRef(new Animated.Value(initialValue)).current;

  const motion = () => {
    Animated.timing(p, {
      toValue: finalValue,
      duration,
    }).start();
  };

  useEffect(() => {
    const timeout = setTimeout(() => motion(), duration);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  return p;
};

export default useMotion;
