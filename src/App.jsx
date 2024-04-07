import './App.css'
import SideBar from './Components/SideBar'
import NavBar from './Components/NavBar'
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { BsDownload } from "react-icons/bs";
import Card from './Components/Card';
import Data1 from './Components/Data1';
function App() {

  return (
    <div className='flex bg-zinc-100'>
     <aside className='fixed h-screen top-0 left-0 z-40'>
     <SideBar/>
     </aside>
      <div className='w-[80%] relative ml-[20%]'>
        <NavBar />
        <div className='flex justify-between p-5'>
          <h2 className='text-2xl font-semibold'>Overview</h2>
          <div className='border-2 border-slate-300 inline-flex rounded-lg p-1 pl-2 w-32'>
            <h1>This Month</h1>
            <RiArrowDropDownLine className='text-3xl mt-[-2px]' />
          </div>
        </div>
        <div className='flex flex-wrap gap-2 justify-between p-5'>
          <Card Top={"Next Payout"} Amount={"₹ 2,312.23"} flag={true} text={"23 Orders"} flag1={true} flag2={true} />
          <Card Top={"Amount Pending"} Amount={"₹ 92,312.20"} flag={true} text={"13 orders"} />
          <Card Top={"Amount Processed"} Amount={"₹ 23,92,312.19"} />
        </div>
        <div className='p-5'>
          <h2 className='text-xl font-semibold'>Transactions | This Month</h2>
        </div>
        <div className='p-5'>
          <button className='h-9 mr-4 w-28 bg-slate-200 rounded-3xl text-gray-600'>Payouts (22)</button>
          <button className='h-9 w-28  rounded-3xl text-white bg-[#146eb4]'>Refunds (6)</button>
        </div>
        <div className="bg-white rounded-lg m-5">
         <div className='flex p-2 justify-between m-4 rounded-lg'>
         <div className="flex bg-white p-2 gap-5 rounded-lg border-2 border-slate-300" >
            <IoSearch className="text-slate-500  text-xl" />
            <input type="text" className="bg-white w-80 h-6 outline-none" placeholder="Order ID or transaction ID" />
          </div>
          <div className='flex gap-5'>
            <div className='border-2 border-slate-300 flex rounded-lg pl-2 w-24 '>
              <h1 className='text-xl mt-1 mr-3'>sort</h1>
              <HiMiniArrowsUpDown className='text-xl mt-2' />
            </div>
            <div className='border-2 border-slate-300  rounded-lg  w-16'>
              <BsDownload className='text-xl ml-4 mt-2' />
            </div>
          </div>
         </div>
         <Data1/>
         <hr className='bg-slate-300 '></hr>
          
        </div>
        <h1 className='flex justify-center pt-2'>
            ----- Made By <span className='text-blue-800 font-semibold pl-1 pr-1'><a href="https://twitter.com/KaplishAditya" target='_blank'>Aditya Verma</a></span> , Inspired By  <span className='text-blue-800 font-semibold pl-1 pr-1'><a href="https://twitter.com/mydukaanapp" target='_blank'>Dukaan App UI</a></span> -----
          </h1>
          <h1 className='flex justify-center pb-5 text-gray-500 underline cursor-pointer'><a href="https://github.com/AadiVerma/Paytm" target='_blank'>Get the source Code</a></h1>
      </div>
    </div>
  )
}

export default App
