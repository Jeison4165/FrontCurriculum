
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Index } from '../pages/Index'
import { Error404 } from '../pages/Error404'

export const CoreApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/FrontCurriculum/' element={<Index />}></Route>
                <Route path='*' element={<Error404 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
