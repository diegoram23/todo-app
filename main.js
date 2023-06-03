const todosContainer = document.getElementById('todos-container')
const form = document.getElementById('form')


let myTodos = [
    {
        title: 'Do Laundry',
        isDone: false
    },
    {
        title: 'Buy groceries',
        isDone: false
    },
    {
        title: 'Do Dishes',
        isDone: false
    },
]

class Todo {
    constructor(title, isDone) {
        this.title = title
        this.isDone = isDone
    }
}

const addTodo = () => {
    myTodos.push(new Todo(title.value, isDone = false))
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
                <p>${todo.isDone}</p>
            </div>
        `
    })
    todosContainer.innerHTML = todosHtml
}


getTodosHtml()
