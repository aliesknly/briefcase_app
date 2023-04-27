import { Routes, Route } from 'react-router-dom'


interface Props {
    children: JSX.Element | JSX.Element[]
}

function RoutesWithNotFounds({ children }: Props) {
    return (
        <Routes>
            {children}
            <Route path="*" element={<h1>Que buscas aqui, no hay nada...</h1>} />
        </Routes>
    )
}
export default RoutesWithNotFounds