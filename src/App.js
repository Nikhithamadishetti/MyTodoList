import React,{useState} from 'react';
import './App.css';
import Form from './componets/Form';
import Header from './componets/Header';
import TodosList from './componets/TodosList';

const App=() =>{
  const[input,setInput]=useState(" ");
  const[todos,setTodos]=useState([]);
  const[editTodo,setEditTodo]=useState(null);
  return (
  <div className='container'>
    <div className='app-wrapper'>
      <div>
        <Header/>
      </div>
    <div>
        <Form
        input ={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
    </div>
    <div>
        <TodosList 
         todos={todos} 
         setTodos={setTodos}
         setEditTodo={setEditTodo}/>
    </div>
    </div>
  </div>
  );
}

export default App;
