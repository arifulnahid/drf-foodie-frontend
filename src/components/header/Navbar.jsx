import { Button, MegaMenu, Navbar } from 'flowbite-react';
import { useAuth } from '../../authContext/authProvider';
import { Link } from 'react-router-dom';

export default function Menu() {
    const {user, logout} = useAuth()

  return (
    <MegaMenu>
      <div className="flex w-full flex-wrap items-center justify-around lg:justify-between p-4 md:space-x-8">
        <div className='lg:flex items-center'>
            <Navbar.Brand href="/">
            <img alt="foodie" src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-food-logo-png-image_8366720.png" className="mr-3 h-6 sm:h-9" />
            <span className="lg:mr-4 self-center whitespace-nowrap text-xl font-semibold dark:text-white">Foodie</span>
            </Navbar.Brand>
            
            <Navbar.Collapse>
                <Navbar.Link href="/">Home</Navbar.Link>
            </Navbar.Collapse>
        </div>
        <div className="lg:order-2 items-center flex">
          <Link
          to="/cart"
          className="cursor-pointer mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
          >Cart</Link>
          {
            !user?.token ? 
            (<>
            <a
            href="/login"
            className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
            >
            Login
          </a>
          <Button href="signup">Sign up</Button>
            </>) :
            (<>
            <MegaMenu.Dropdown toggle={<>Profile</>}>
            <ul className="grid grid-cols-3">
                <div className="space-y-4 p-4">
                    <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                            {user.username}
                        </a>
                    </li>
                    <li>
                        <a href="/orders" className="hover:text-primary-600 dark:hover:text-primary-500">
                           Orders
                        </a>
                    </li>
                    {
                        user?.token ?
                        <li>
                        <div onClick={logout} className="cursor-pointer hover:font-bold hover:text-primary-600 dark:hover:text-primary-500">
                            Logout
                        </div>
                        </li> : null
                    }
                </div>
            </ul>
            </MegaMenu.Dropdown>
            </>)
          }
        </div>
        
        <Navbar.Toggle />
      </div>
    </MegaMenu>
  );
}
