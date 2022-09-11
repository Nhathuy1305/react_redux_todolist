import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
    render() {
        return (
            <ul className="todo__list">
                {
                    this.props.todos.map((todo) => {
                        if (todo.display === true) {
                            return <TodoItem key={todo.id} todo={todo} actions=
                            {this.props.actions}/>
                        }
                    })
                }
            </ul>
        )
    }
}

export default TodoList