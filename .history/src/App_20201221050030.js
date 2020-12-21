import ToDoTask from './components/ToDoTask'
import todo from './todolist'
import React, {Component} from 'react'
import Loader from './components/Loader'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      todos: todo,
      weather: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedToDos = prevState.todos.map( todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedToDos
      }
    })
  }

  componentDidMount() {
    // setTimeout( () => {
    //   this.setState(
    //     { isLoading: false }
    //   )
    // }, 1500)
  }
  
  render(){
    // const toDoList = todo.map(task => <ToDoTask key={task.id} item={task} handleChange={this.handleChange} />)

    return (
      <div className="mx-auto">
        
        <div className="container mt-20">
          {/* {toDoList} */}
          {/* <Loader isLoading={this.state.isLoading} /> */}
        </div>
          
      </div>
    );
  }
}

export default App;
