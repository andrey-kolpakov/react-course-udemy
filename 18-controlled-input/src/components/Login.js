import { useState } from 'react'

function Login() {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('') можгно и так

    const [data, setData]= useState({username: '', password: ''})

    function handleForSubmit(event) {
        event.preventDefault()

        console.log(data)
    }

    function handleInputChange(e, name){
        setData({...data, [name]: e.target.value})
    }

    return (
        <>
            <h2>Login Form</h2>
            <form onSubmit={handleForSubmit}>
                <label>
                    Username
                    <input
                        type="text"
                        value={data.username}
                        onChange={(e) => handleInputChange(e, 'username')}
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => handleInputChange(e, 'password')}
                    />
                </label>

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login
