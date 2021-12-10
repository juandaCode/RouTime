import React from 'react';
import { useState } from "react";
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoItem } from './components/TodoItem/TodoItem';
import { TodoLogo} from './components/TodoLogo/TodoLogo';
//import './App.css';

const defaultTodos = [ {
    text: "Cortar cebolla",
    completed: false
  },
  {
    text: "Intro React",
    completed: true
  },
  {
    text: "Cortar pera",
    completed: false
  },
  {
    text: "Cortar manzana",
    completed: false
  },
  {
    text: "Cortar Piña",
    completed: false
  },
  {
    text: "Cortar Fresa",
    completed: false
  }
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [search, setSearch] = useState('');
  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  let filteredTodos = [];
  if (search.length > 0) {
    filteredTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    filteredTodos = todos;
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const DeleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoLogo />
      <TodoCounter 
        total = {totalTodos}
        completed = {completedTodos}
      />
      <TodoSearch 
      search={search}
      setSearch={setSearch}
      /> 
      <TodoList>
        { defaultTodos.map( todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} 
          onComplete = { () => completeTodo(todo.text) }
          onDelete = { () => DeleteTodo(todo.text) }
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
    );
    
}

export default App;
