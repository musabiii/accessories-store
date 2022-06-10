import React, { MouseEvent } from 'react';
import { supabase } from './utils/sapabaseClient';
import './App.css';

function App() {

  const handleClick = (e:MouseEvent<HTMLButtonElement>)=> {
    e.preventDefault();

    console.log('click');
    getSupabase();
  }

  async function getSupabase() {
    let { data: accessories, error } = await supabase
    .from('accessories')
    console.log(accessories);
  }

  return (
    <div className="App">
      Hello
      <button onClick={handleClick}>sclick</button>
    </div>
  );
}

export default App;
