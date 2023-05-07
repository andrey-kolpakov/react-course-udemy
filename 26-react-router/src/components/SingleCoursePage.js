import { useParams, useNavigate, Link } from 'react-router-dom'
import courses from '../data/courses'
import NotFound from './NotFound'
import { useEffect } from 'react'


function SingleCoursePage() {
    const { slug } = useParams()

    let currentCourse = courses.find((item) => {
        return item.slug === slug ? item : ''
    })

    //UseNavigate возвращает функцию, которая позволяет перенаправить пользователя. Фактически сейчас в navigate лежит функция, вызвав которую и передав ей адрес, мы перенаправим пользователя
    const navigate = useNavigate()
    useEffect(() => {
        console.log('123')

        if (!currentCourse) {
            navigate('..', { relative: 'path' })
        }
    }, [currentCourse, navigate])

    // //Дальше функция уже не идет, потому что ретерн тут. Простой вариант, выше получше
    // if(!currentCourse){
    //     return <NotFound />
    // }


    //Такой прикол, что useEffect вызывается только после того, Как реакт попытается зарендерить компонент. Вопросительный знак проверяет есть ли тайтл внутри каренткурс
    return (
        <>
            <div>{currentCourse?.title}</div>
            <Link to=".." relative="path">
                К списку всех курсов
            </Link>
        </>
    )
}

export default SingleCoursePage
