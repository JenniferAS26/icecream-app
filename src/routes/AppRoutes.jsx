import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import LoginEmailPassword from '../pages/LoginEmailPassword'
import LoginPhone from '../pages/LoginPhone'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route element={<PublicRoutes isAuthenticate={false} />}>
          <Route path='register' element={<Register />} />
          <Route path='login-email-password' element={<LoginEmailPassword />} />
          <Route path='login-phone' element={<LoginPhone />} />
        </Route>
        <Route element={<PrivateRoutes isAuthenticate={false} />}>
          <Route path='home' element={<Home />} />
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
