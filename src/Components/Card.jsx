import { BsPatchQuestion } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
export default function Card({Top,  Amount, flag ,flag1, text,flag2}){
    return (
        <div className="w-[32%]">
            <div className={`${flag1? 'bg-[#146eb4]':'bg-white' } p-3 rounded-t-lg h-32 shadow-lg`}>
            <div className="flex gap-2 mb-4">
               <h2 className={`${flag1?'text-white':'text-black'} text-lg`}>{Top}</h2>
               <BsPatchQuestion className={`pt-1 text-xl ${flag1?'text-white':'text-black'} mt-1` }/>
            </div>
            <div className="flex justify-between gap-5">
                <h2 className={`${flag1?'text-white':'text-black'} text-3xl font-semibold `}>{Amount}</h2>
                {flag ? (
                    <div className={`flex gap-2 mt-4 underline underline-offset-2 ${flag1 ? 'text-white underline' : 'text-blue-800 underline-blue-400'}`}>
                    <h3 className={flag1 ? 'text-white' : 'text-blue-800'}>{text}</h3>
                    <FaChevronRight className={`mt-1 ${flag1 ? 'text-white' : 'text-blue-800'}`} />
                    </div>
                ) : <></>}
            </div>
        </div>
       {flag2?( <div className="bg-blue-900 text-white flex justify-between p-3 rounded-b-lg shadow-lg">
               <h2>Next Payout date : </h2>
               <h2>Today, 04:00 PM</h2>
            </div>):<></>}
        </div>

    )
}