import { BsPatchQuestion } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
export default function NavBar(){

    return (
        <div className="bg-white p-2 flex justify-between shadow-lg">
            <div className="flex gap-3 pl-5 pt-1">
                <h2 className="text-2xl font-semibold">Payouts</h2>
                <div className="flex gap-2 mt-2">
                    <BsPatchQuestion className="pt-1 text-xl" />
                    <h3 className="text-sm">How it works</h3>
                </div>
            </div>
            <div className="flex bg-zinc-100 p-3 gap-5 rounded-lg" >
                <IoSearch className="text-slate-500  text-2xl"/>
                <input type="text" className="bg-zinc-100 w-80 h-6 outline-none" placeholder="Search features, tutorials, etc."/>
            </div>
            <div className="flex gap-4">
               <div className="w-10 h-10 bg-zinc-100 rounded-full relative">
                    <RiMessage2Fill className="text-slate-600 bg-zinc-100 absolute bottom-2 left-2 text-2xl"/>
                    
               </div>
               <div className="w-10 h-10 bg-zinc-100 rounded-full relative">
                    <FaCaretDown className="text-slate-600 bg-zinc-100 absolute bottom-2 left-2 text-2xl"/>
                    
               </div>
            </div>
        </div>
    )
}