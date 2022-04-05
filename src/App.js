import './App.css';
import React, { useState } from 'react';

const INITIAL_STATE = [
  { id: 1, baslik: "Yapılacak 1", done: false },
  { id: 2, baslik: "Yapılacak 2", done: true }
];

function App() {
  const [list, setList] = useState(INITIAL_STATE);
const [newTodo, setNewTodo] = useState('');

  return (
    <div className="App">
      <b-table></b-table>
      <h1>Yapılacaklar Listesi</h1>
      <div className="add-form">
        <input value={newTodo}
        autoFocus
        type="text" placeholder="Yapılacakları Giriniz" 
        onChange={
          (e) => {
            setNewTodo(e.target.value);
          }
        }
        />
        <button 
        //set the enter

        class="btn btn-primary" onClick={
          () => {
            setList([...list, { id: list.length + 1, baslik: newTodo, done: false }]);
            setNewTodo('');
          }
        }>Ekle</button>
      </div>
      <div className="list">
        
        {list.map(item => (
          <div key={item.id}  onClick={() =>
            setList(list.map(item2 => item2.id === item.id ? { ...item, done: !item.done } : item2))
          } className={item.done ? "done" : ""}>{item.baslik}</div>))}
      </div>
      <button class="btn btn-primary" onClick={
        () => setList(list.filter(item => !item.done))
      }>Tamamlananları Temizle</button>
    </div>
  );
}

export default App;
