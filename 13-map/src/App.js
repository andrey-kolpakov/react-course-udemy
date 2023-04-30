import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Button from './components/Button'

function App() {
    const [count, setCount] = useState(0)

    function incrementCount() {
        setCount(count + 1)
    }

    const texts = ['click me', 'click me please', 'hit me', 'press me']

    return (
        <div className="App">
            <Counter newNumber={count} />

            {texts.map((arrItem, index) => {
                return (
                    <Button
                        text={arrItem}
                        functionForOnClick={incrementCount}
                        key={index}
                    />
                )
            })}
        </div>
    )
}

//На компонент НЕЛЬЗЯ ПОВЕСИТЬ атрибут HTML, например onClick. Надо передать туда какие-то пропсы, а внутри на сам html элемент, который возвращается из компонента повесить атрибут онклик

export default App
