import React, { useState } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Pagi, kuliah algoritma dan pemrogramman',
      completed: false,
    },
    {
      id: 2,
      title: 'Siang, meeting internal ukm',
      completed: false,
    },
    {
      id: 3,
      title: 'Sore, event developer',
      completed: false,
    },
    {
      id: 4,
      title: 'Malam, explore teknologi baru',
      completed: false,
    },
    {
      id: 5,
      title: 'Buat project web portofolio',
      completed: false,
    },
    {
      id: 6,
      title: 'Buat list untuk besok',
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: '36px',
  },
};

export default App;
