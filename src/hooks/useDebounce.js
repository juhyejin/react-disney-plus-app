import {useEffect, useState} from 'react';

//사용자가 미리 결정된 시간 동안 타이핑을 멈출 때 까지 keyup이벤트의 처리를 지연시킴

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(()=>{
      setDebouncedValue(value)
    },delay);
    return () =>{
      clearTimeout(handler)
    }
  }, [value,delay]);
  return debouncedValue;
};

export default useDebounce;
