const addTodoButton = document.querySelector('#add-todo')
const newTodoInput = document.querySelector('#new-todo')
const todoList = document.querySelector('#todo-list ul')

addTodoButton.addEventListener('click', function()
    {
        const newTodo = newTodoInput.value

        if(newTodo === '')
        {
            return
        }

        const todoItem = document.createElement('li')
        todoItem.innerText = newTodo
        todoList.appendChild(todoItem)

        newTodoInput.value = ''
    }

)
