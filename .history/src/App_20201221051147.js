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
      character: {}
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
    fetch('https://swapi.dev/api/people/1/')
      .then(response => response.json())
      .then(data => 
        this.setState(
          {
            character: data
          }
        ))
  }
  
  render(){
    // const toDoList = todo.map(task => <ToDoTask key={task.id} item={task} handleChange={this.handleChange} />)

    return (
      <div className="mx-auto">
        
        <div className="container mt-20">
          {/* {toDoList} */}
          {/* <Loader isLoading={this.state.isLoading} /> */}
          <div className=" max-w-sm shadow bg-white mx-auto">
            <h1 className="text-blue-700 text-2xl">{this.state.character.name}</h1>
          </div>
        </div>
          
      </div>
    );
  }
}

export default App;
