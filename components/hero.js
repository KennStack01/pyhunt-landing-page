import React, { useState, useEffect } from 'react'
import BlueButton from './Buttons/BlueButton'
import { useRouter } from 'next/router'

const Hero = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const router = useRouter()

  const subscribeMe = async (event) => {
    event.preventDefault()

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({ email: email }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    const { error, message } = await res.json()
    if (error) {
      setError(error)
      router.push('/')
    } else {
      setSuccess(message)
      setEmail('')
      router.push('/success')
    }
  }

  const changeEmail = (event) => {
    const email = event.target.value
    setEmail(email)
  }

  return (
    <div className="mx-auto my-6 flex flex-col justify-between rounded-sm p-4 text-center md:my-8 lg:mx-10">
      <div className="my-auto mx-auto w-full md:w-5/6">
        <h1 className="text-4xl font-bold lg:px-28 lg:text-3xl xl:text-5xl">
          Python Jobs made simple to access and apply to
        </h1>
        <div className="mx-auto flex w-full flex-col justify-between">
          <p className="mx-auto my-6 px-2 text-center text-xs font-semibold md:text-lg">
            ⚡ Join a Company/Startup. Help build a better future by Joining a
            Team. <br />
            <span>
              <span className="text-turbo-yellow-500">pyhunt</span> gives the
              Job you were looking for
            </span>
          </p>

          <p className="my-2 text-center text-sm md:text-lg">
            We're Launching in Two Weeks. Dont'miss 👇
          </p>
          <form
            action="https://formsubmit.co/kibadikennedy@gmail.com"
            method="POST"
            // onSubmit={subscribeMe}
            className=" mx-auto my-auto flex flex-row"
          >
            <input
              type="hidden"
              name="_subject"
              value="pyhunt - New Subscriber!"
            />
            <input
              type="hidden"
              name="_next"
              value="https://www.pyhunt.com/success"
            />
            <input
              className="mx-2 block w-2/3 rounded-sm border border-gray-700 bg-gray-700 p-2 text-sm text-white placeholder-gray-400 outline-none focus:border-turbo-light-blue-500 focus:ring-turbo-light-blue-500 dark:text-white dark:focus:ring-blue-500 md:w-auto md:text-lg"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={changeEmail}
              placeholder="elonmusk@twitter.com"
              required
            />
            <button type="submit" className="w-1/3 md:w-auto">
              <BlueButton content={'Join for free'} />
            </button>
          </form>
          {success ? (
            <span className="mx-auto my-2 flex items-center text-sm font-semibold text-turbo-yellow-500">
              {success}
            </span>
          ) : (
            <span className="mx-auto my-2 flex items-center text-sm font-semibold text-red-800">
              {error}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
