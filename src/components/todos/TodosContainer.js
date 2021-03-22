import React from "react"
import { connect } from "react-redux"
import Todo from "./Todo"

class TodosContainer extends React.Component {

  render() {
    const todos = this.props.todos.map((todo) => {
      return <Todo key={todo} text={todo} />
    })
    return (
      <div>{todos}</div>
    )
  }
}

export default connect((state) => {
  return {
    todos: state.todos
  }
})(TodosContainer)