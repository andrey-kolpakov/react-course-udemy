import Post from './Post'
import { useEffect, useState } from 'react'

function Posts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => {
                response.json().then((data) => {
                    setPosts(data)
                })
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if (error) {
        return (
            <div>
                <h1>Error: {error}</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>Posts</h1>
            <hr />
            <br />

            <div className="cards-list">
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    posts.map((item, index) => {
                        return <Post {...item} key={index} />
                    })
                )}
            </div>
        </div>
    )
}

export default Posts
