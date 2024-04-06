import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import '../../App.css'

const AppRoutes = () => {

  const routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/myaccount', element: <MyAccount/>},
    { path: '/myorders', element: <MyOrders/>},
    { path: '/myorder', element: <MyOrder/>},
    { path: '/*', element: <NotFound/>},
    { path: '/signin', element: <SignIn/>},
  ])

  return routes
}
const App = () => {
  return (
      <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      </BrowserRouter>
  )
}

export default App