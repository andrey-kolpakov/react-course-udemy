import styles from './Todo.module.css'
import { FaCheck } from 'react-icons/fa'
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'

function Todo({ currentItemText, deleteTodo, index, checkTodo, isCompleted }) {
    // console.log(checkTodo, index)

    return (
        //Пустая строка styles 

        <div className={`${styles.todo} ${isCompleted ? styles.todoDone : ''}  `}>
            <RiTodoFill className={styles.todoIcon} />

            <div className={styles.todoText}>{currentItemText}</div>

            <RiDeleteBin2Line
                className={`${styles.todoIconDelete}`}
                onClick={() => {
                    deleteTodo(index)
                }}
            />
            <FaCheck
                className={`${styles.todoIconChecked}`}
                onClick={() => {
                    checkTodo(index)
                }}
            />
        </div>
    )
}

export default Todo
