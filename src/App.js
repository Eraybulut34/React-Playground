import './App.css';
import React from 'react';
import Todos from './components/Todos/Todos';
import Calculator from './components/PropUsing/Calculator';
import AntdTable from './components/Antd-Table/AntdTable';

function App() {
  return (
    <div className="App">
     <Todos/>
<Calculator/>
<AntdTable/>
    </div>
  );
}

export default App;
