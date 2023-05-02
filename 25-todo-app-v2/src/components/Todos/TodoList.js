import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ TodoListArray, deleteTodo }) {
    console.log()

    return (
        <div className={styles.todoList}>
            {/* Ниже код проверяет: если длинна массива равна нулю, рендер текста. Мап не запускается, потому что для этого необходимо заполнить форму и нажать на кнопку, это в свою очередь вызовет функцию сетСтейт массива и приложение перерендерится. После этого проверка ниже вернёт false и не зарендерит h2 с текстом нет новых задач, но пойдёт дальше. Мап не включается сам собой при открытии приложения потому что мы задали НАЧАЛЬНОЕ значение в setState как пустое. Если там будет что-то лежать, проверка ниже сразу вернёт false, не зарендерит h2 и пойдёт в мап. Что бы не лежало в массиве, кроме Undefined, это будет считаться элементом, даже null, тогда проверка тоже вернет фолс и включится мап, потому что наличие чего либо, кроме пустой строки, создаёт массив заполненный чем-то и длинна его становится не 0, а 1, например. Если вызвать useState и начальным значением дать ничего абсолютно (пустые скобки), он вернёт ошибку*/}

            {/*Добавляем индекс задачи в кнопку, чтобы он прикрепился к ней. Так же, как прикрепили key. Этот индекс - это номер элемента в массиве TodoListArray, который приходит сюда, когда вызывается функция setTodoList из App.js*/}

            {TodoListArray.length === 0 && <h2>Нет новых задач</h2>}
            {TodoListArray.map((currentItem) => {
                return (
                    <Todo
                        currentItemText={currentItem.text}
                        key={currentItem.id}
                        deleteTodo={deleteTodo}
                        index={currentItem.id}
                    />
                )
            })}
        </div>
    )
}

export default TodoList

// {TodoListArray.length !== 0 ? (
//     TodoListArray.map((currentItem, index) => {
//         return <Todo currentItem={currentItem} key={index} />
//     })
// ) : (
//     <h2>Нет новых задач</h2>
// )}

//Более явный вариант
