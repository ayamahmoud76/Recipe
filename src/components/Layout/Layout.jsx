import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function Layout() {
 const [isOpen , setIsOpen]= useState(false)
function openNav(){
    setIsOpen(!isOpen)
}
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
     
        <aside className='hidden lg:block h-screen sticky top-0'>
          <Navbar />
        </aside>
{/* navbar in small screens */}
        {isOpen && <>
         <div className="inset-0 fixed cursor-pointer bg-black/50 z-30" onClick={()=>{openNav()}}>
         </div>
       <div className="fixed z-40">
<Navbar />
</div>
        </>}
{/* navbar in small screens */}
{isOpen ? null: <button className="btn w-12 h-12 p-3 m-5 lg:hidden flex rounded-xl bg-amber-500 flex-col justify-between cursor-pointer"
   onClick={()=>{openNav()}}  >
    <span className='bg-white w-4 h-0.5'></span>
    <span className='bg-white w-7 h-0.5'></span>
    <span className='bg-white w-4 h-0.5'></span>
</button>}
{/* responsive navbar */}

        <main className="flex-1 md:py-6">
          <div className="mx-auto w-full max-w-screen-xl">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
