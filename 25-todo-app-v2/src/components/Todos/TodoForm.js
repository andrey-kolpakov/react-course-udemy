import { useState } from 'react'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

function TodoForm({ addTodoHandler }) {
    const [textForTodo, setTextForTodo] = useState('')

    function onSubmitHandler(evt) {
        evt.preventDefault()

        if (textForTodo) {
            addTodoHandler(textForTodo)
            setTextForTodo('')
        }
    }

    return (
        <form
            className={styles.todoForm}
            onSubmit={(evt) => onSubmitHandler(evt)}
        >
            <input
                type="text"
                className={styles.todoInput}
                placeholder="Введите новое задание"
                value={textForTodo}
                onChange={(evt) => {
                    setTextForTodo(evt.target.value)
                }}
            />
            <Button>Добавить</Button>
        </form>
    )
}

export default TodoForm
