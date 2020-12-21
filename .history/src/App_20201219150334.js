import ToDoTask from './components/ToDoTask'
import todo from './todolist'
import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todo
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    this.setState(prevState => {
      return {
        completed: !prevState
      }
    })
  }
  
  render(){
    const toDoList = todo.map(task => <ToDoTask key={task.id} item={task} />)

    return (
      <div className="mx-auto">
        
        <div className="container mt-20">
          {toDoList}
        </div>
          
      </div>
    );
  }
}

export default App;
