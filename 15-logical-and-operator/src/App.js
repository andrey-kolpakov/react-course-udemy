import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Button from './components/Button'

function App() {
    const [count, setCount] = useState(0)

    function incrementCount() {
        setCount(count + 1)
    }

    function resetCount() {
        setCount(0)
    }

    let buttonStyle = {
        backgroundColor: 'red',
        color: 'white',
    }

    return (
        <div className="App">
            <Counter newNumber={count} />

            <Button functionForOnClick={incrementCount} />
            <Button functionForOnClick={incrementCount} />
            <Button functionForOnClick={incrementCount} />
            <Button functionForOnClick={incrementCount} />

            {count > 0 && (
                <div>
                    <button style={buttonStyle} onClick={resetCount}>
                        Reset 
                    </button>
                </div>
            )}
        </div>
    )
}

//На компонент НЕЛЬЗЯ ПОВЕСИТЬ атрибут HTML, например onClick. Надо передать туда какие-то пропсы, а внутри на сам html элемент, который возвращается из компонента повесить атрибут онклик

export default App
