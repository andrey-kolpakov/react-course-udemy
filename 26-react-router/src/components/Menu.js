import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <nav>
            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                to="."
                end
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                to="about"
            >
                About
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                to="contacts"
            >
                Contacts
            </NavLink>

            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                to="courses"
            >
                Courses
            </NavLink>
        </nav>
    )
}

export default Menu

{
    /*Эта тема работает только для NavLink, больше ни для чего*/
}
