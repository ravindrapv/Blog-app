import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Heder() {
    return (
        <>
            <header>
                <nav className="relative bg-white shadow dark:bg-gray-800">
                    <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                        <div className="flex items-center justify-between">
                            <div>
                                <NavLink to='/' exact className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">Conduit</NavLink>
                            </div>


                            {/* <div className="flex lg:hidden">
                                <button x-cloak click="isOpen = !isOpen" type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg x-show="!isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>

                                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div> */}
                        </div>

                        <div className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'] absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                            <div className="flex flex-col md:flex-row md:mx-6">
                                <NavLink to='/' exact activeClassName='active' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">Home</NavLink>
                                <NavLink to='/Login' activeClassName='active' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">Login</NavLink>
                                <NavLink to='/Registreation' activeClassName='active' className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">Register</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
