import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import Logo from '../components/Header/logobig';
import Dice from '@/components/Dice/Dice';
import Player2Dice ,{ Player2DiceRef }from '@/components/Dice/Player2Dice'
import { useRef } from 'react';
export default function Game() {
    const player2DiceRef = useRef<Player2DiceRef>(null)

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
     <div class="container min-h-screen   bg-[url('/images/splash.png')] bg-cover bg-top bg-no-repeat pt-[140px] pb-28">

     <div className='flex items-center justify-center'><span id="titlePot" className="mt-14">Pot: </span></div>

               <div className='flex items-center justify-center'> <span id="titlePlayerOne" className="mt-14 ">Player 1</span></div> 
 
    <div class="mt-10 flex items-center justify-center"><Dice />
</div> 
<div className='flex items-center justify-center'> <span id="titlePlayerTwo" className="mt-14 ">Player 2</span></div> 

        <div class="mt-10 mb-80 flex items-center justify-center"><Player2Dice ref={player2DiceRef}/>      <button id="rollButton" onClick={()=>player2DiceRef.current.roll([6,5,4,3,2])}>Roll dice!</button>
</div>


    </div>
     <Footer/>
     </main>
     </>
  )
}
