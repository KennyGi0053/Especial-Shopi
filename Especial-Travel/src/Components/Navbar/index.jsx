import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/'> 
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink to='/'>
                    All
                </NavLink>
            </li>
            <li>
                <NavLink to='/clothes'>
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink to='/electronics'>
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink to='/furnitures'>
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink to='/toys'>
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink to='/others'>
                    Others
                </NavLink>
            </li>
        </ul>
        <ul>
            <li>
                kennygabriel00@gmail.com
            </li>
            <li>
                <NavLink to='/myorders'>
                    MyOrders
                </NavLink>
            </li>
            <li>
                <NavLink to='/myaccount'>
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink to='/signin'>
                    Sign In
                </NavLink>
            </li>
            <li>
                🛒 0
            </li>
        </ul>
    </nav>
  )
}

export default Navbar