import React from 'react';

import Person from './components/samples/Person';
import SampleComponent from './components/samples/SampleComponent';
import logo from './logo.svg';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <SampleComponent />
        <Person name={'First Name'} surname={'Surname'} age={30} />
      </header>
    </div>
  );
};

export default App;
