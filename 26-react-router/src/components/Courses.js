import React from 'react'
import courses from '../data/courses'
import CourseCard from './CourseCard'

import queryString from 'query-string'

import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function sortCourses(courses, key) {
    let sortedCourses = [...courses]

    sortedCourses.sort((a, b) => a[key] - b[key])

    return sortedCourses
}

// sortCourses(courses ,'id')
const SORT_KEYS = ['title', 'id', 'slug']

function Courses() {
    const location = useLocation()
    const query = queryString.parse(location.search)

    const [sortKey, setSortKey] = useState(query.sort)
    const [coursesState, setCoursesState] = useState(
       sortKey ? sortCourses(courses, sortKey) : courses
    )

    const navigateFromCoursesSort = useNavigate()

    useEffect(() => {
        if (!SORT_KEYS.includes(sortKey)){
            navigateFromCoursesSort('.')
            setSortKey('')
        } 
    }, [sortKey, navigateFromCoursesSort])

    

    return (
        <>
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : ''}</h1>
            <div className="courseList">
                {coursesState.map((course) => {
                    return <CourseCard courseInfo={course} key={course.id} />
                })}
            </div>
        </>
    )
}

export default Courses
