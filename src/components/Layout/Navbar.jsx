import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import logo from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Contact", href: "contact", current: true },
  { name: "About", href: "about", current: true },
];
import useAuthContext from '../../context/AuthContext'
import { useEffect } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const { user, login, logout, getUser } = useAuthContext()
 
  useEffect(() => {
    try {
      getUser()
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log(user)
  return (
    <Disclosure as="nav" className="bg-white md:py-2 py-0 hidden lg:block">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-16 items-center justify-between lg:mx-0 mx-6 lg:px-4">
          <div className="flex md:flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className=" hidden md:block shrink-0 items-center">
              <Link to="/">
                <img alt="Your Company" src={logo} className="h-8 w-auto" />
              </Link>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="hidden sm:ml-6 sm:block">
              {/* {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className="text-[#222222] hover:text-[#0083B3] transition uppercase
                      rounded-md px-3 py-2 text-sm font-medium tracking-wide"
                  style={{ fontFamily: "Poppins" }}
                >
                  {item.name}
                </a>
              ))} */}
              <Link to="/">
                <button
                  className="text-[#222222] hover:text-[#0083B3] transition uppercase cursor-pointer
                      rounded-md px-3 py-2 text-sm font-medium tracking-wide"
                  style={{ fontFamily: "Poppins" }}
                >
                  Home
                </button>
              </Link>
              <Link to="contact">
                <button
                  className="text-[#222222] hover:text-[#0083B3] transition uppercase cursor-pointer
                      rounded-md px-3 py-2 text-sm font-medium tracking-wide"
                  style={{ fontFamily: "Poppins" }}
                >
                  Contact
                </button>
              </Link>
              <Link to="about">
                <button
                  className="text-[#222222] hover:text-[#0083B3] transition uppercase cursor-pointer
                      rounded-md px-3 py-2 text-sm font-medium tracking-wide"
                  style={{ fontFamily: "Poppins" }}
                >
                  About
                </button>
              </Link>
            </div>
            {user ? (
              <div className="flex"> 
                 <Link to="profile">
              <span className="md:block hidden px-8 py-1 text-[#0083B3] font-medium" style={{ fontFamily: "Poppins" }}>
                {user.name}
              </span></Link>
                <button onClick={logout}
                  className="md:block hidden px-8 cursor-pointer py-1 bg-[#1a2880] text-white rounded-full hover:text-white"
                  style={{ fontFamily: "Poppins" }}
                >
                  Logout
                </button></div>
            ) : (
              <Link to="verification">
                <button
                  className="md:block hidden px-8 cursor-pointer py-1 bg-[#0083B3] text-white rounded-full hover:text-white"
                  style={{ fontFamily: "Poppins" }}
                >
                  Login
                </button>
              </Link>
            )}
            {/* Mobile menu button*/}
            {/* <div className=" inset-y-0 left-0 flex items-center sm:hidden">
           
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 cursor-pointer text-gray-400 hover:text-gray-600 hover:bg-[#F7F7F7] focus:ring-2 focus:ring-[#F7F7F7] focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div> */}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 bg-[#F7F7F7]">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-[#0083B3] text-white"
                  : "text-gray-700 hover:bg-[#0083B3] hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
