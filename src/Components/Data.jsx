export default function Data({OrderId,color,Date,status}){
    return (
        <tr className="text-center">
            <td className="text-[#146eb4] py-5 font-semibold">#{OrderId}</td>
            <td className="font-semibold py-5 px-6 text-gray-500 flex gap-2">
                <div className={`${color}  rounded-full h-3 w-3 mt-2 fill-green-900`}></div>
                <h1 className="text-medium ">{status}</h1>
            </td>
            <td className="py-5 px-6">131634495747</td>
            <td className="py-5 px-6" >{Date}</td>
            <td className="py-5 px-6">₹1,125.00</td>
        </tr>
    )
}