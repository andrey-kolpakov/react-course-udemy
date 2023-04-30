import './App.css'
import Wrapper from './components/Wrapper'

function App() {
    return (
        <div className="App">
            <Wrapper color="lightblue">
                <h2>Text inside of the wrapper</h2>
                <button>Click me</button>
            </Wrapper>

            <Wrapper color="lightgreen">
                <h2>Another Text</h2>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aut!</p>

                <input type="text" placeholder="Enter value" />
            </Wrapper>
        </div>
    )
}

export default App
