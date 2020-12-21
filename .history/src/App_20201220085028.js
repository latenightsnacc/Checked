import ToDoTask from './components/ToDoTask'
import todo from './todolist'
import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: todo
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    console.log('changed', id)
  }
  
  render(){
    const toDoList = todo.map(task => <ToDoTask key={task.id} item={task} handleChange={this.handleChange} />)

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
