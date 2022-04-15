import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import BlueButton from './Buttons/BlueButton'
import { CgMenuCheese } from 'react-icons/cg'
import { RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleNavbar = () => {
    setOpen(!isOpen)
  }
  const router = useRouter()

  const navLinks = [
    {
      name: 'Jobs',
      href: '/',
    },
    {
      name: 'Blog',
      href: '/',
    },
    {
      name: 'Business',
      href: '/',
    },
  ]

  return (
    // <nav className="shadow-turbo-black-500 flex w-full flex-row justify-between px-2 py-2 text-lg shadow-md">
    <nav className="shadow-turbo-black-500 sticky top-0 z-50 flex w-full flex-col bg-gray-800/90 px-2 py-2 text-lg shadow-md backdrop-blur-md backdrop-brightness-150">
      <div className="flex flex-row justify-between">
        <div className="my-auto flex flex-row justify-between px-2 md:mx-auto">
          <Link href="/">
            <a>
              <img
                src="/pyhunt-logo.svg"
                className="w-28 md:w-28 lg:w-36"
                alt="pyhunt logo"
              />
            </a>
          </Link>
        </div>
        <div
          className="hover:bg-turbo-dark-blue-500 active:bg-turbo-dark-blue-500 visible my-auto cursor-pointer rounded-sm p-2 text-2xl text-white md:invisible"
          onClick={toggleNavbar}
        >
          {!isOpen ? <CgMenuCheese /> : <RiCloseLine />}
        </div>

        <div className="text-md my-auto mx-auto hidden flex-row justify-between space-x-4 md:flex md:space-x-6 md:text-lg ">
          {navLinks.map((link, index) => {
            return (
              <div key={index} className="my-auto hover:underline">
                <Link href={link.href}>
                  <a className="">{link.name}</a>
                </Link>
              </div>
            )
          })}
          <div className="my-auto">
            <Link href="/">
              <a className="">
                <BlueButton content={'Post a Job'} />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen
            ? 'z-50 flex flex-col justify-center space-y-2 py-4 md:hidden'
            : 'hidden'
        }`}
      >
        <>
          {navLinks.map((link, index) => {
            return (
              <div key={index} className="my-auto hover:underline">
                <Link href={link.href}>
                  <a className="">{link.name}</a>
                </Link>
              </div>
            )
          })}
          <div className="my-auto mx-auto">
            <Link href="/">
              <a className="">
                <BlueButton content={'Post a Job'} />
              </a>
            </Link>
          </div>
        </>
      </div>
    </nav>
  )
}

export default Navbar
