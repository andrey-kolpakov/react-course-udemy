function Login() {
    function handleForSubmit(event) {
        event.preventDefault()

        const userData = {
            username: event.target.username.value,
            password: event.target.password.value
        }

        console.log(userData)
    }

    return (
        <>
            <h2>Login Form</h2>
            <form onSubmit={handleForSubmit}>
                <label htmlFor="username">
                    Username
                    <input type="text" name="username" />
                </label>

                <label htmlFor="password">
                    Password
                    <input type="password" name="password" />
                </label>

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login
