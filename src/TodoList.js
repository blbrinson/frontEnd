import React, { Component } from 'react';
class TodoList extends Component {
    render(){
        return(
            <ul>
                {this.props.todoList.map((todo) => (
                    <li class="todo"><span>{todo.title}</span></li>
                ))}      
            </ul>
        )
    }
}
export default TodoList