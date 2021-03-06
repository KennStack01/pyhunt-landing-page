import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Hero from '../components/hero'
import BlueButton from '../components/Buttons/BlueButton'
import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'

const Home = () => {
  return (
    <div>
      <Head>
        <title>pyhunt | Home</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <h1 className="mx-auto my-10 text-center text-2xl font-bold lg:px-28 lg:text-3xl xl:text-5xl">
          <span>
            Awesome! See you soon ! We're Cooking something for you :)
          </span>
          {/* Awesome! Please, check your email box to confirm your subscription ! */}
          <a
            href="https://twitter.com/hellopyhunt"
            target="__blank"
            className="mx-auto my-5"
            style={{ background: '#1DA1F2' }}
          >
            {/* <div className="flex flex-row text-white "> */}
            <div className="my-8 flex flex-row justify-center">
              <FaTwitter className="" />
              <h3 className="">follow @hellopyhunt </h3>
            </div>
          </a>
        </h1>

        {/* <div className="mx-auto text-center text-sm">
          <span>
            If you don't see issues of Pyhunt Newsletter in your inbox, be sure
            to check:
          </span>{' '}
          <br />
          Your Promotions tab, if you're using Gmail or Your spam folder
        </div> */}

        {/* <div className="mx-auto my-7 w-1/3 text-center md:w-1/6">
          <Link href="/">
            <a>
              <BlueButton className="" content={`Home Page`} />
            </a>
          </Link>
        </div> */}
      </Layout>
    </div>
  )
}

export default Home
