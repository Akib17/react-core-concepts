import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Counter />

      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(5)
  return (
    <div>
      <h2> {count}  </h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Users />
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }, [])
  return (
    <div>
      {
        users.map((user) => 
          <ol> {user.email} </ol>
        )
      }
    </div>
  )
}


export default App;
