import React from 'react';
import Test from './Test.jsx';
import './style/index.less';
import { cube } from "./math";


function App(props) {
  return (
    <div >
      <h1 className="red" >{`16 cubed is equal to ${cube(6)}!`}</h1 >
      <Test value="1"/>
      <Test />
    </div >
  )
}

export default App;