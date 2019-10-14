import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useFadeout = (duration = 500) => {
  const o = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(o, {
      toValue: 0,
      duration,
    }).start(() => fadeOut());
  };

  useEffect(() => {
    const timeout = setTimeout(() => fadeOut(), duration);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  return o;
};

export default useFadeout;
