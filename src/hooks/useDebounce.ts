import {useEffect, useState} from 'react';

interface DebounceProps {
  input: string;
  time: number;
}

export const useDebounce = ({input = '', time = 500}: DebounceProps) => {
  const [debounceValue, setDebounceValue] = useState<string>('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(input);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return debounceValue;
};
