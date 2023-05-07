import { Link } from 'react-router-dom'

function CourseCard({ courseInfo }) {
    // console.log(courseInfo)

    return (
        <div className="courseCard">
            <>
                <h2>{courseInfo.title}</h2>
                <div>{courseInfo.id}</div>
                <div className="btn"></div>
                <Link className="linkOnCourse" to={courseInfo.slug}>
                    <div>Перейти</div>
                </Link >
            </>
        </div>
    )
}

export default CourseCard
