import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import '../../App.css'

const AppRoutes = () => {

  const routes = useRoutes([
    { path: '/', element: <Home/>},
    { path: '/clothes', element: <Home/>},
    { path: '/electronics', element: <Home/>},
    { path: '/furnitures', element: <Home/>},
    { path: '/toys', element: <Home/>},
    { path: '/others', element: <Home/>},
    { path: '/myaccount', element: <MyAccount/>},
    { path: '/myorders', element: <MyOrders/>},
    { path: '/myorder', element: <MyOrder/>},
    { path: '/myorders/last', element: <MyOrder/>},
    { path: '/myorders/:id', element: <MyOrder/>},
    { path: '/*', element: <NotFound/>},
    { path: '/signin', element: <SignIn/>},
  ])

  return routes
}
const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
