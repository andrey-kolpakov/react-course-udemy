import './App.css'

import Info from './components/Info'

function App() {
    return (
        <div className="App">
            <Info />

            <div className='info'>
                <h1>App Component Heading</h1>
                <button className="myButton">Click me</button>
            </div>
        </div>
    )
}

export default App
