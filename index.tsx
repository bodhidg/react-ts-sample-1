import React, { useEffect, useState, Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

const App: React.FC = props => {
  const [name, setName] = useState('react');

  useEffect(() => {
    //
  }, []);

  const handleUserNameChange = newName => {
    setName(newName.target.value);
  };

  return (
    <div>
      <Hello name={name} />
      <p>Start editing to see some magic happen :)</p>
      <input type="text" name="username" onChange={handleUserNameChange} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
