import { useEffect, useRef } from 'react'

const useClickOut = (flag, setFlag) => {
  const ref = useRef();
  useEffect(() => {
    if (flag){
      const listener = (event) => {
        if (event.target !== ref.current && ref.current && !ref.current.contains(event.target)){
          setFlag(false);
        }
      };
      document.addEventListener('click', listener);
      return () => document.removeEventListener('click', listener);
    }
  }, [flag, setFlag]);
  return ref;
}

export default useClickOut;