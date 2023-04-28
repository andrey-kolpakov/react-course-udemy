const App = ({initialButtonText, style}) => {
    

    const [state, setState] = React.useState({ style: style, text: initialButtonText })

    const onButtonClick = function () {
        setState({ style: 'green-button', text: 'Hello from React' })
    }

    return (
        <div className="app">
            <button className={state.style} onClick={onButtonClick}>
                {state.text}
            </button>
        </div>
    )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="click me" style="sample"/>)
