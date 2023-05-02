import styles from './Todo.module.css'


function Todo({ currentItem, deleteTodo, index }) {
    return <div className={styles.todo} onDoubleClick={() => {deleteTodo(index)}}>{currentItem}</div>
}

export default Todo
