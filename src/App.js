import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
        <header className="Header">
          <h1>Employee Directory</h1>
          <h3>Click on carrots to filter by heading or use search to search by name</h3>
        </header>
        <Navbar />
        <Table />
    </div>
  );
}

export default App;
