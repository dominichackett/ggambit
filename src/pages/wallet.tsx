import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import Logo from '../components/Header/logobig';

export default function Home() {
  return (
    <>
      <Head>
      <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans&display=swap" rel="stylesheet"/>   
     <title>Galactic Gambit - Dice Poker Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black"
       
     >
    
     <Header/>
     <div class="container h-screen relative">

     <section
      id="home"
      className= " bg-[url('/images/splash.jpg')] w-full h-full relative z-10 overflow-hidden bg-cover bg-top bg-no-repeat pt-[150px] pb-24"
          >
     

      
    </section>
    </div>
     <Footer/>
     </main>
     </>
  )
}
