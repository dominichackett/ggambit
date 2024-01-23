import { Fragment, useRef, useEffect,useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSignIn,faMoneyBillTransfer} from '@fortawesome/free-solid-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function WalletDialog(props:any) {
  const send = ()=>{
      props.setOpen(false)
      const sendto  =  document.getElementById("sendto").value 
      const amount  =  document.getElementById("amount").value 


      props.send(props.token,sendto,amount)
  }
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10"  onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                  <FontAwesomeIcon icon={faMoneyBillTransfer}   className={"text-4xl text-primary"}  />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-3xl font-bold leading-6 text-gray-900">
                    Send {props.tokenName}
                    </Dialog.Title>
                  
                  </div>
                  <div className="mt-4">
                    
                 
                         <label
                          for="sendto"
                          className="mt-2 mb-2 block text-base font-medium text-black"
                        >
                          Send To
                        </label>
                        <input
                         
                          type="text"
                          name="sendto"
                          id="sendto"
                          required
                          
                          className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-white outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                        />
                 </div>
                 <div className="mt-4">
                    
                 
                    <label
                     for="amount"
                     className="mt-2 mb-2 block text-base font-medium text-black"
                   >
                     Amount
                   </label>
                   <input
                    
                     type="number"
                     name="amount"
                     id="amount"
                     required
                     
                     className="w-full rounded-md border border-stroke bg-[#353444] py-3 px-6 text-base font-medium text-white outline-none transition-all focus:bg-[#454457] focus:shadow-input"
                   />
            </div>
          
                 
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="bg-primary hover:bg-opacity-90 inline-flex w-full justify-center rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                    onClick={() => send()}

                  >
                    Send
                  </button>
                  <button
                    type="button"
                    className=" hover:bg-primary hover:text-white mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:col-start-1 sm:mt-0"
                    onClick={() => props.setOpen(false)}
 
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
