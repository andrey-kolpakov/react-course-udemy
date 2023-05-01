import Post from './Post'
import { useEffect, useState } from 'react'

function Posts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const API_URL = 'https://jsonplaceholder.typicode.com/posts'


    //Другой вариант, более понятный, имхо
    /* useEffect(() => {
        async function getData(){
            try {
                const res = await fetch(API_URL)
                const posts = await res.json()
                setPosts(posts)
            } catch (error) {
                setError(error.message)
            }
            setIsLoading(false)
        }

        getData()
    }, []) */

    useEffect(() => {
        ;(async function(){
            try {
                const res = await fetch(API_URL)
                const posts = await res.json()
                setPosts(posts)
            } catch (error) {
                setError(error.message)
            }
            setIsLoading(false)
        })()


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
