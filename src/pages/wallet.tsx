import Head from 'next/head'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import Logo from '../components/Header/logobig';
import WalletDialog from '@/components/Wallet/Wallet';
import Notification from '@/components/Notification/Notification';
import { useState } from 'react';
const tokens = [{address:"0x12345678999",name:"USD",image:"/images/crypto.png",balance:1.2},{address:"0x1234567899911",name:"USD",image:"/images/crypto.png",balance:1.2},{address:"0x123456789991",name:"USD",image:"/images/crypto.png",balance:1.2},{address:"0x123456789992",name:"USD",image:"/images/crypto.png",balance:1.2},{address:"0x1234567899922",name:"USD",image:"/images/crypto.png",balance:1.2}]
export default function Wallet() {
  const [openWalletDialog, setOpenWalletDialog] = useState(false);
  const [token,setToken] = useState()
   const [tokenName,setTokenName] = useState()
  // NOTIFICATIONS functions
  const [notificationTitle, setNotificationTitle] = useState();
  const [notificationDescription, setNotificationDescription] = useState();
  const [dialogType, setDialogType] = useState(1);
  const [show, setShow] = useState(false);
  const close = async () => {
    setShow(false);
  };
  
 const closeWalletDialog = () => {
  setOpenWalletDialog(false);
};

const send = async (_token:any,sendto:any,amount:any) => {}
const sendToken = (_token:any,_tokenName:any) =>{
   setToken(_token)
   setTokenName(_tokenName)
   setOpenWalletDialog(true)
}
  
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
      className= " bg-[url('/images/splash.jpg')] w-full h-full relative z-10 overflow-hidden bg-cover bg-top bg-no-repeat pt-[190px] pb-24"
          >
        <div className='flex items-center justify-center'><h1                 className=" text-[40px] font-bold leading-tight text-white md:text-[50px] lg:text-[40px] xl:text-[46px] 2xl:text-[50px] sm:text-[46px]"
>My Wallet</h1></div>
     <div       className="overflow-auto p-6 m-40 mt-10   flex-col h-[380px]  rounded-lg border border-dashed border-[#A1A0AE] bg-[#353444]"
>
<div  className=" w-full h-[80px] text-white rounded-md bg-[#4E4C64] p-4  flex justify-between items-center"
>
<span>Image</span>

  <span>Token</span>
  <span>Balance</span>
  <span>Transaction</span>

</div> 
{tokens.map((item:any,index:any)=>(<div key={index} className="mt-2 w-full h-[80px] text-white rounded-md bg-[#4E4C64] p-4  flex justify-between items-center"
>
  <img src={item.image} height={50} width={50} />
  <span>{item.name}</span>
  <span>{item.balance}</span>

  <button
                  onClick={()=>sendToken(item.address,item.name)}
                  className="mr-5 inline-flex items-center justify-center rounded-md border-2 border-primary bg-primary py-1 px-4 text-base font-semibold text-white transition-all hover:bg-opacity-90"
                >
                  Send
                </button>
</div>))}
</div>
      
    </section>
    </div>
     <Footer/>
     <WalletDialog
        open={openWalletDialog}
        setOpen={closeWalletDialog}
        send={send}
        token={token}
        tokenName={tokenName}
      
        
      />
      <Notification
        type={dialogType}
        show={show}
        close={close}
        title={notificationTitle}
        description={notificationDescription}
      />
     </main>
     </>
  )
}
