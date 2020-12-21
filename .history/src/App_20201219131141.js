import ToDoTask from './components/ToDoTask'
import todo from './todolist'
import React, {Component} from 'react'

class App extends Component {

  
  render(){
    const toDoList = todo.map(task => <ToDoTask key={task.id} item={task} />)
    
    return (
      <div className="mx-auto">
        
        <div className="container">
          {toDoList}
        </div>
          
      </div>
    );
  }
}

export default App;
