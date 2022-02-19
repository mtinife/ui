import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom"

function Navbar() {
    return <div>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2 5 dark:bg-slate-200">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex self-center text-lg font-semibold whitespace-nowrap dark:text-gray-500">
                    Book Tracker
                </Link>
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-gray-500 round-lg md:hidden hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link to="/login" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-300 md:dark:hover:bg-transparent dark:border-gray-700">Login</Link>
                        </li>
                        <li>
                            <Link to="/register" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </div>;
}

export default Navbar;
