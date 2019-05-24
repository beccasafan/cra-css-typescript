import React from 'react';
//import logo from './logo.svg';
import './App.css';
import * as styles from './test.css';
import * as moduleStyles from './test.module.css';

const App: React.FC = () => {
  return (
    <div className={`${styles.test} ${moduleStyles.test}`}>Test Div</div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
