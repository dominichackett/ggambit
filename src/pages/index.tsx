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
     <section
      id="home"
      className= " bg-[url('/images/splash.jpg')] w-full  relative z-10 overflow-hidden bg-cover bg-top bg-no-repeat pt-[150px] pb-24"
          >
      <div
        className="grade absolute left-0 top-0 -z-10 h-full w-full"
       
        
      ></div>      
      <div
        className="absolute left-0 top-0 -z-10 h-full w-full"
      
      ></div>
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h1
                className="mb-4 text-[40px] font-bold leading-tight text-white md:text-[50px] lg:text-[40px] xl:text-[46px] 2xl:text-[50px] sm:text-[46px]"
              >
               
               <span class="titleGalactic">Galactic</span><span class="titleGambit"> Gambit</span> - <span class="titleDicePoker"> Dice Poker Game</span>
                             </h1>
              <p
                className="mb-8 text-lg font-medium leading-relaxed text-body-color md:pr-14"
              >
Embark on a thrilling multiplayer journey through the cosmos with Galactic Gambit, an engaging dice poker game that brings together players from across the galaxy. In this space-themed adventure, participants use regular dice to strategically outmaneuver opponents and claim victory in interstellar showdowns. With its visually striking design, diverse regular dice options, and seamless online multiplayer functionality, Galactic Gambit transforms the gaming experience into a cosmic odyssey. Whether challenging friends or testing skills against a galactic community, players can immerse themselves in the excitement of multiplayer dice poker, creating an ever-expanding universe of strategic competition and interstellar camaraderie.  AI game assistant to help increase your odds of winning.              </p>
         <div className="flex flex-wrap items-center">
                <Link
                  href="/lobby"
                  className="mr-5 mb-5 inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary py-3 px-7 text-base font-semibold text-white transition-all hover:bg-opacity-90"
                >
                  Game Lobby
                </Link>
                <Link
                  href="/about"
                  className="mb-5 inline-flex items-center justify-center rounded-md border-2 border-white py-3 px-7 text-base font-semibold text-white transition-all hover:border-primary hover:bg-primary"
                >
                  About
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="text-center">
            <Logo/>

       <div id="logo" className='mt-4'>Galactic <div id="logored">Gambit</div><div id="dicepokersmall"> Dice Poker</div></div>
   

            </div>
          </div>
        </div>
      </div>

      
    </section>
     <Footer/>
     </main>
     </>
  )
}
