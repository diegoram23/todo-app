const todosContainer = document.getElementById('todos-container')
const form = document.getElementById('form')


let myTodos = [
    {
        title: 'Do Laundry',
        isDone: false,
        priority: 'none'
    },
    {
        title: 'Buy groceries',
        isDone: false,
        priority: 'Urgent'
    },
    {
        title: 'Do Dishes',
        isDone: false,
        priority: 'Urgent'
    },
]

class Todo {
    constructor(title, isDone, priority) {
        this.title = title
        this.isDone = isDone
        this.priority = priority
    }
}

const addTodo = () => {
    myTodos.push(new Todo(title.value, isDone = false, priority.value))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()
    getTodosHtml()
})

const getTodosHtml = () => {
    let todosHtml = ''
    myTodos.forEach(todo => {
        todosHtml += `
            <div class='item'>
                <p>${todo.title}</p>
                <p>Priority: ${todo.priority}<p>

                <label>Finished?</label>
                <input type='checkbox' data-finished='${todo.isDone}'>

            </div>
        `
    })
    todosContainer.innerHTML = todosHtml
}


getTodosHtml()
