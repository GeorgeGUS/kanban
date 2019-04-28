import React from 'react';
import Boards from '../Boards';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <h1 className='visually-hidden'>Канбан доска</h1>
      <Boards />
    </div>
  );
};

export default App;
