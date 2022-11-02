import React, { useEffect, useState } from "react";

interface CounterProps {
  initCounter: number;
}

interface CounterState {
  counter: number;
}

function Counter(props: CounterProps) {
    const [counter, setCounter] = useState<number>(props.initCounter);
    let intervalId = -1;
    
    //useEffect(() => {
    //   intervalId = window.setInterval(() => setCounter(counter + 1), 1000)
    // })
    return (
        <>
          <div>Counter value is: {counter}</div>
          <div>
            <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
          </div>
        </>
      );
    
}
 
   


export default Counter;
