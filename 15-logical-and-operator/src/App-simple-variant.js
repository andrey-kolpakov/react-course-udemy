import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Button from './components/Button'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Counter newNumber={count} />

            <Button clickOnButtonComponent={setCount} count={count} />
            <Button clickOnButtonComponent={setCount} count={count} />
            <Button clickOnButtonComponent={setCount} count={count} />
            <Button clickOnButtonComponent={setCount} count={count} />
        </div>
    )
}

//На компонент НЕЛЬЗЯ ПОВЕСИТЬ атрибут HTML, например onClick. Надо передать туда какие-то пропсы, а внутри на сам html элемент, который возвращается из компонента повесить атрибут онклик

export default App
