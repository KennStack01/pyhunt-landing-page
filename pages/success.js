import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Hero from '../components/hero'
import BlueButton from '../components/Buttons/BlueButton'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Head>
        <title>pyhunt | Home</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <h1 className="mx-auto my-10 text-center text-2xl font-bold lg:px-28 lg:text-3xl xl:text-5xl">
          Awesome! Please, check your spam box to confirm your subscription !
        </h1>

        <div className="mx-auto my-7 w-1/3 text-center md:w-1/6">
          <Link href="/">
            <a>
              <BlueButton className="" content={`Home Page`} />
            </a>
          </Link>
        </div>
      </Layout>
    </div>
  )
}

export default Home