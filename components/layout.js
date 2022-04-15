import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

export default function Layout(props) {
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-800 text-white">
      {/* <Navbar /> */}
      <img
        src="/pyhunt-logo.svg"
        className="mx-auto mt-16 mb-4 w-3/4 md:my-8 md:w-1/3"
        alt="pyhunt logo"
      />

      <main className="relative z-10 mx-auto w-full flex-1 items-center justify-center pb-10">
        {props.children}
      </main>

      {/* <Footer /> */}
    </div>
  )
}
