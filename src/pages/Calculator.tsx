import { useCallback } from 'react';
import useCalculatorStore from 'stores/useCalculatorStore';

const Calculator = () => {
  const {count, increase} = useCalculatorStore();

  const handleClick = useCallback(() => {
    increase(count);
  }, []);

  return(
    <>
      <span>{count}</span>
      <button onClick={handleClick}>one up</button>
    </>
  );
}

export default Calculator;