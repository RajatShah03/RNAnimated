import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useFadein = (duration = 500) => {
  const o = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(o, {
      toValue: 1,
      duration,
    }).start(() => fadeIn());
  };

  useEffect(() => {
    const timeout = setTimeout(() => fadeIn(), duration);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  return o;
};

export default useFadein;
