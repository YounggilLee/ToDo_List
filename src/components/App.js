import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { addTodo, selectTodo } from "../actions";

class App extends Component {
  state = {
    event: ""
  };

  _onChange = e => {
    this.setState({
      event: e.target.value
    });
  };

  _onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.event);
  };

  _renderTodoList() {
    if (this.props.lists.todoList) {
      return this.props.lists.todoList.map(todo => {
        return (
          <li key={todo.id} >
            {todo.id} {todo.todoName} <button onClick={() => this.props.selectTodo(todo.id)}> Completed </button>
          </li>
        );
      });
    } else {
      return <div />;
    }
  }

  render() {
    //console.log(this.props)
    return (
      <div className="App">
        <form>
          <input
            onChange={this._onChange}
            type="text"
            name="Event"
            placeholder="Event"
          />
          <button onClick={this._onSubmit}>Add Todo</button>
        </form>
        <ul>{this._renderTodoList()}</ul>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodoHandler: (event) => dispatch(addTodo(event))
//   }
// }

const mapStateToProps = state => {
  return {
    lists: state.events
  };
};

export default connect(mapStateToProps, { addTodo, selectTodo })(App);
