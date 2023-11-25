import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = ({ isAuthenticate, redirectPath = '/register', children }) => {
    if (!isAuthenticate) return <Navigate to={redirectPath} />
    return (
        <div>{children ? children : <Outlet />}</div>
    )
}

export default PrivateRoutes