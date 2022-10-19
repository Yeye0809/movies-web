import React, { useState } from 'react'

export const useCounter = () => {
    const [counter, setCounter] = useState(1);

    const nextPage = ()=>{
      setCounter(counter + 1); 
    }
    const backPage = ()=>{
      setCounter(counter - 1);
    }
  
    
  return {
    counter,
    nextPage,
    backPage 
  } 
}
