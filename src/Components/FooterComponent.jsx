import { HiMiniWallet } from "react-icons/hi2";
export default function FooterPart(){
    return(
        <div className="flex gap-2 bg-slate-700 rounded-lg p-3 ml-3 mr-3 mt-5 group cursor-pointer">
            <div className="border-4 rounded-lg border-slate-800 m-1"><HiMiniWallet className="text-slate-100 bg-slate-800 text-2xl"/></div>
            <div>
                <h2 className="text-slate-200 text-sm font-semibold group-hover:text-white">Available Credits</h2>
                <h2 className="text-slate-200 text-sm font-semibold group-hover:text-white">$2000</h2>
            </div>
        </div>
    )
}