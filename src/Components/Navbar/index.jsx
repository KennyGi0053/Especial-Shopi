import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = 'underline underline-offset-8 underline decoration-teal-900';
  const context = useContext(ShoppingCartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to='/'>
            Especial Shopi
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink 
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink 
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Electronics
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink 
            to='/furnitures'
            onClick={() => context.setSearchByCategory('furnitures')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Furnitures
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink 
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Toys
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink 
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3 ">
        {/* <li className=" text-black/60 text-xs">
          kennygabriel00@gmail.com
        </li> */}
        <li className="hidden md:block">
          <NavLink 
            to='/myorders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink 
            to='/myaccount'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink 
            to='/signin'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon> 
          <div>
            {context.cartProducts.length}
          </div>
        </li>
        <li className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-black" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black" />
            )}
          </button>
        </li>
      </ul>
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-start p-5 gap-3 md:hidden">
          <li>
            <NavLink 
              to='/'
              onClick={() => {
                context.setSearchByCategory();
                toggleMenu();
              }}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/clothes'
              onClick={() => {
                context.setSearchByCategory('clothes');
                toggleMenu();
              }}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/electronics'
              onClick={() => {
                context.setSearchByCategory('electronics');
                toggleMenu();
              }}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/furnitures'
              onClick={() => {
                context.setSearchByCategory('furnitures');
                toggleMenu();
              }}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/toys'
              onClick={() => {
                context.setSearchByCategory('toys');
                toggleMenu();
              }}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Toys
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/others'
              onClick={() => {
                context.setSearchByCategory('others');
                toggleMenu();
              }}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Others
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/myorders'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/myaccount'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/signin'
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Sign In
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;