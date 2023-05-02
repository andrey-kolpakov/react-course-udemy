import styles from './Todo.module.css'
import { RiTodoFill } from 'react-icons/ri'

function Todo({ currentItemText, deleteTodo, index }) {
    return (
        <div
            className={styles.todo}
            onDoubleClick={() => {
                deleteTodo(index)
            }}
        >
            <RiTodoFill className={styles.todoIcon} />
            <div>{currentItemText}</div>
        </div>
    )
}

export default Todo
