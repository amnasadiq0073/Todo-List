import React from 'react';
import TodoItems from './TodoItems';

const Todos = (props) => {
  let TodoStyle ={
    minHeight:"70vh",
    margin:"40px auto"
  }
  let TodoList ={
    color: "green"
  }
  return (
    <div className='container' style={TodoStyle} >
      <h3 className ='my-3' style={TodoList}>Todos List</h3>    
      {props.todos.length ===0?"No Todos to display":  
      props.todos.map((todo)=>{
        return (<TodoItems todo={todo} key = {todo.sno} onDelete={props.onDelete}/>)
      })
      }
      

    </div>
  );
}

export default Todos;
