import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Hero from '../components/hero'

const Home = () => {
  return (
    <div>
      <Head>
        <title>pyhunt | Early Access</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout>
        <Hero />
      </Layout>
    </div>
  )
}

export default Home
