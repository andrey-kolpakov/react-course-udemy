import Menu from '../components/Menu'

import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
}

//Все что надо выводить на каждой странице, должно быть выше outlet

export default MainLayout
