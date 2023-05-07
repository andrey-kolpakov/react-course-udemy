import styles from './TodosActions.module.css'
import Button from '../UI/Button'

import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'


function TodosActions({
    resetHandler,
    deleteCompletedTodoHandler,
    lockAButton,
    itterator,
}) {

    return (
        <div className={styles.TodosActionsContainer}>
            <Button onClick={resetHandler} title="Сделать все невыполненными">
                <RiRefreshLine />
            </Button>
            <Button
                onClick={deleteCompletedTodoHandler}
                disabled={!itterator}
                title="Удалить выполненные"
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    )
}

export default TodosActions
