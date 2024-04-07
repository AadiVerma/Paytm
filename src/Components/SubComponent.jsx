
export default function SubComponent({icon,text}){
    return (
        <div className="mb-3">
            <div className="flex gap-3 hover:bg-slate-700 group cursor-pointer rounded-lg h-12 p-[4%] w-[100%]">
                <div  className="text-slate-100 text-2xl">{icon}</div>
                <h2 className="text-slate-300 text-lg font-semibold group-hover:text-white">{text}</h2>
            </div>
        </div>
    )
}