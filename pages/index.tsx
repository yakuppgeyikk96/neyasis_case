import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Neyasis Case</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
