import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <nav>
            <NavLink
                className={({ isActive }) => (isActive ? {color:'lightyellov', textDecoration: 'none'} : {})}
                to="."
                end
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? {color:'lightyellov', textDecoration: 'none'} : {})}
                to="about"
            >
                About
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? {color:'lightyellov', textDecoration: 'none'} : {})}
                to="contacts"
            >
                Contacts
            </NavLink>
        </nav>
    )
}

export default Menu

{
    /*Эта тема работает только для NavLink, больше ни для чего*/
}
