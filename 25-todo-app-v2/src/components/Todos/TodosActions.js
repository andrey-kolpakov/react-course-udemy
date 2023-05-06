import styles from './TodosActions.module.css'
import Button from '../UI/Button'

import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

function TodosActions({ resetHandler, deleteCompletedTodoHandler }) {
    return (
        <div className={styles.TodosActionsContainer}>
            <Button onClick={resetHandler}>
                <RiRefreshLine />
            </Button>
            <Button onClick={deleteCompletedTodoHandler}>
                <RiDeleteBin2Line />
            </Button>
        </div>
    )
}

export default TodosActions
