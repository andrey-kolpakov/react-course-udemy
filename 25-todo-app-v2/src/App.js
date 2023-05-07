import './App.css'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

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

    function deleteCompletedTodoHandler() {
        setTodoList(
            TodoListArray.filter((todo) => {
                if (todo.isCompleted === false) {
                    return true
                } else {
                    return false
                }
            })
        )
    }

    function resetHandler() {
        setTodoList(
            TodoListArray.map((todo) => {
                if (todo.isCompleted === true) {
                    return { ...todo, isCompleted: false }
                } else {
                    return { ...todo }
                }
            })
        )
    }

    // checkTodo
    function checkTodoHandler(idOfItemToChecked) {
        setTodoList(
            TodoListArray.map((todo) => {
                if (todo.id === idOfItemToChecked) {
                    return { ...todo, isCompleted: !todo.isCompleted }
                } else return { ...todo }
            })
        )
    }


    let itterator = 0
    const itteratorOfCompletedTodos = function () {
        for (let item of TodoListArray) {
            if (item.isCompleted) {
                itterator++
            }
        }
    }
    itteratorOfCompletedTodos()

    return (
        <div className="App">
            <h1>Todo List v1</h1>

            <TodoForm addTodoHandler={addTodoHandler}/>

            {TodoListArray.length > 0 ? (
                <TodosActions
                    deleteCompletedTodoHandler={deleteCompletedTodoHandler}
                    resetHandler={resetHandler}
                    itterator={itterator}
                />
            ) : (
                ''
            )}

            <TodoList
                TodoListArray={TodoListArray}
                deleteTodo={deleteTodoHandler}
                checkTodo={checkTodoHandler}
            />

            <h2>{itterator > 0 ? `Вы закончили ${itterator} заданий` : ''}</h2>
        </div>
    )
}

export default App
