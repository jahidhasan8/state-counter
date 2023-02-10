
import { createContext, useState } from 'react';
import './App.css';
// import Child from './pages/Child';
import Parent from './pages/Parent';
export const COUNTER_CONTEXT=createContext()
function App() {
  const [count,setCount]=useState(0)
  const value={count,setCount}
  return (
    <COUNTER_CONTEXT.Provider value={value}>

    <div className="App">
      {/* <Child></Child> */}
      <Parent></Parent>
    </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
