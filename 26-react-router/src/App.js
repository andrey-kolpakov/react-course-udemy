import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import About from './components/About'
import MainLayout from './layouts/MainLayout'
import Courses from './components/Courses'
import SingleCoursePage from './components/SingleCoursePage'

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index={true} element={<Home />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="about" element={<About />} />
                        <Route path="courses" element={<Courses />} />
                        <Route
                            path="courses/:slug"
                            element={<SingleCoursePage />}
                        />

                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
