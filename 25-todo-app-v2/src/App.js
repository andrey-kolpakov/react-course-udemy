import './App.css'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
    const [TodoListArray, setTodoList] = useState([])
    // console.log('Current state', TodoListArray)

    function addTodoHandler(newText) {
        const newTodo = {
            text: newText,
            isCompleted: false,
            id: uuidv4(),
        }
        // console.log(newTodo)

        setTodoList([...TodoListArray, newTodo])
    }

    //Перебирает элементы. Передаёт в колбэк значение рассматриваемого элемента и его индекс. Если индекс рассматриваемого элемента совпадает с индексом того, что пришел в функцию deleteTodoHandler, возвращает false. ItemValue - сам элемент (его значение) - не нужен.
    function deleteTodoHandler(idOfItemToDelete) {
        setTodoList(
            TodoListArray.filter((todo) => {
                if (todo.id === idOfItemToDelete) {
                    return false
                } else {
                    return true
                }
            })
        )
    }

    return (
        <div className="App">
            <h1>Todo List v1</h1>

            <TodoForm addTodoHandler={addTodoHandler} />
            <TodoList
                TodoListArray={TodoListArray}
                deleteTodo={deleteTodoHandler}
            />
        </div>
    )
}

export default App
