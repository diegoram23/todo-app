const todosContainer = document.getElementById('todos-container')
const form = document.getElementById('form')
const urgentsContainer = document.getElementById('priority-todos')

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

Todo.prototype.toggleDone = function () {
    return this.isDone = !this.isDone
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
                <label>Done?</label>
                <input type='checkbox' data-done='${todo.isDone}'>
            </div>
        `
    })
    todosContainer.innerHTML = todosHtml
}

const getUrgentsHtml = () => {
    let urgents = myTodos.filter(todo => {
        return todo.priority === "Urgent"
    })

    let urgentsHtml = ''
    urgents.forEach(todo => {
        urgentsHtml += `
            <div class='urgents'>
            <p>${todo.title}</p>
            <p>Priority: ${todo.priority}<p>
            <label>Done?</label>
            <input type='checkbox' data-done='${todo.isDone}'>
            </div>
        `
    })
    urgentsContainer.innerHTML = urgentsHtml

}


getUrgentsHtml()
getTodosHtml()
