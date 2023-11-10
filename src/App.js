import React, { useState, useRef } from 'react';
import './App.css';
import image from './image.PNG';

function App() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();

  const containerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '60px',
    fontWeight: 'normal',
    margin: '0',
  };

  const formContainerStyle = {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const addBarStyle = {
    height: '40px',
    width: '1000px',
    fontSize: '30px',
  };

  const addButtonStyle = {
    height: '40px',
    width: '200px',
    marginTop: '20px',
  };

  const removeButtonStyle = {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const listItemStyle = (index) => ({
    background: index % 2 === 0 ? '#4caf50' : '#2196f3', // Green for even index, blue for odd index
    padding: '10px',
    marginBottom: '5px',
    borderRadius: '5px',
    position: 'relative',
    width: '1000px',
    display: 'flex',
    justifyContent: 'space-between', // Right-justify the content
    transition: 'background 0.3s', // Smooth transition for background color change
  });

  const listItemHoverStyle = {
    background: 'white', // Change to white on hover
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const text = todoRef.current.value;
    if (text !== '') {
      setTodos((prevTodos) => [...prevTodos, text]);
      todoRef.current.value = '';
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App" style={containerStyle}>
      <header>
        <h1 style={headingStyle}>ToDo List</h1>
      </header>

      <div style={formContainerStyle}>
        <form onSubmit={handleAddTodo}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Enter an item"
              aria-label="Enter an item"
              style={addBarStyle}
              ref={todoRef}
            />
          </div>
        </form>

        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{ ...listItemStyle(index), ':hover': listItemHoverStyle }}
            >
              {todo}
              <button style={removeButtonStyle} onClick={() => handleRemoveTodo(index)}>
                x
              </button>
            </li>
          ))}
        </ul>

        <button type="submit" className="btn btn-outline-success" style={addButtonStyle} onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
