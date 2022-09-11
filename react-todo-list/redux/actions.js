let actions = {
    addTodo: function(title) {
        return {
            type: 'ADD_TODO',
            title: title,
        }
    },

    completeTodo: function(id) {
        return {
            type: 'COMPLETE_TODO',
            id: id
        }
    },

    deleteTodo: function(id) {
        return {
            type: 'DELETE_TODO',
            id: id
        }
    }
}

export default actions