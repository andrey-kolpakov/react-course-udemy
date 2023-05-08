import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function ChangeUser() {
    const [inputText, setInputText] = useState('')
    const { userName, changeUserName } = useContext(UserContext)

    function setInputTextHandler(evt){
        setInputText(evt.target.value)
    }

    return (
        <>
            <input type="text" value={inputText} onChange={(evt) => setInputTextHandler(evt)}/>
            <button
                onClick={() =>
                    changeUserName(inputText)
                }
            >
                Click me
            </button>
        </>
    )
}

export default ChangeUser
