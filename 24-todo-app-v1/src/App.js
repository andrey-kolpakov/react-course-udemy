import './App.css'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

import { useState } from 'react'

function App() {
    const [TodoListArray, setTodoList] = useState([])
    console.log('Current state', TodoListArray)

    function addTodoHandler(item) {
        setTodoList([...TodoListArray, item])
    }


    //Перебирает элементы. Передаёт в колбэк значение рассматриваемого элемента и его индекс. Если индекс рассматриваемого элемента совпадает с индексом того, что пришел в функцию deleteTodoHandler, возвращает false. ItemValue - сам элемент (его значение) - не нужен.
    function deleteTodoHandler(itemToDeleteIndex){
        setTodoList(TodoListArray.filter((itemValue, itemIndex) => {
            if (itemIndex === itemToDeleteIndex){
                return false
            }   else {
                return true
            }
        }))
    }

    return (
        <div className="App">
            <h1>Todo List v1</h1>

            <TodoForm addTodoHandler={addTodoHandler} />
            <TodoList TodoListArray={TodoListArray} deleteTodo={deleteTodoHandler}/>
        </div>
    )
}

export default App
