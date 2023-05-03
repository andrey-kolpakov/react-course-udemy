import styles from './Todo.module.css'
import { RiTodoFill } from 'react-icons/ri'

function Todo({ currentItem, deleteTodo, index }) {
    return (
        <div
            className={styles.todo}
            onDoubleClick={() => {
                deleteTodo(index)
            }}
        >
            <RiTodoFill className={styles.todoIcon} />
            <div>{currentItem}</div>
        </div>
    )
}

export default Todo
