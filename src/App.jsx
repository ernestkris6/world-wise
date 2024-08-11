import React, { useReducer } from 'react';


const initialState = {
  count : 0,
}

function reducer(state, action){
  switch(action.type){
    case "inc": 
    return {...state, 
      count: state.count + 1,
    }
    case "dec":
      return {
        ...state, 
        count: state.count -1,
      }
      default: return state
  }

}


export default function App() {


  const [{count}, dispatch] = useReducer(reducer, initialState)


  return (
    <div>
      {count}
      <br />
      <button onClick={()=> dispatch({type: "inc"})}>Add 1</button>
      <br />
      <button onClick={()=> dispatch({type: "dec"})}>Subtract 1</button>
    </div>
  )
}









































































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
