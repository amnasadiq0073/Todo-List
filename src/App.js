
import './App.css';
import Header from './MyComponents/Header';
// import TodoItems from './MyComponents/TodoItems';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import About from './MyComponents/About';
import AddTodo from './MyComponents/AddTodo';

// import Alert from 'react-bootstrap/Alert';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import { render } from '@testing-library/react';


function App() {
  let initTodo = [];

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));

  }

  const onDelete = (todo) => {
    console.log("this is delete of ", todo);
    setTodos(todos.filter(e => {
      return e !== todo;
    }));

  }

  const addTodo = (title, desc) => {
    console.log("Add ", title, " ", desc);
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // let myvar = 2;
  return (
    <>
      <Router>
        <Header title="Todos List" search={false} />
        <Routes>
          {/* <Route path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route> */}
          <Route path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          }>
          </Route>
          <Route path="/about" element={<About />}>

          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
