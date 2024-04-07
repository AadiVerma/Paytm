import Data from "./Data"
export default function Data1(){
    return (
        <table  className="w-[100%] shadow-xl">
        <tr>
            <th className="py-5 px-6">ORDER ID</th>
            <th className="py-5 px-6">STATUS</th>
            <th className="py-5 px-6">TRANSACTION ID</th>
            <th className="py-5 px-6">REFUND DATE</th>
            <th className="py-5 px-6">ORDER AMOUNT</th>
        </tr>
       
       <Data OrderId={"281209"} status={"Successful"} color={'bg-green-500'} Date={"Today, 08:45 PM"} />
       <Data OrderId={"281208"} status={"Processing"} color={'bg-gray-500'} Date={"Yesterday, 08:45 PM"} />
       <Data OrderId={"281207"} status={"Failed"} color={'bg-red-500'} Date={"12 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281206"} status={"Successful"} color={'bg-green-500'} Date={"12 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281205"} status={"Processing"} color={'bg-gray-500'} Date={"12 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281204"} status={"Failed"} color={'bg-red-500'} Date={"12 Jul 2023, 1:00 PM"} />
       <Data OrderId={"281203"} status={"Successful"} color={'bg-green-500'} Date={"11 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281202"} status={"Successful"} color={'bg-green-500'} Date={"11 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281201"} status={"Failed"} color={'bg-red-500'} Date={"11 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281200"} status={"Successful"} color={'bg-green-500'} Date={"10 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281199"} status={"Successful"} color={'bg-green-500'} Date={"10 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281198"} status={"Failed"} color={'bg-red-500'} Date={"10 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281197"} status={"Successful"} color={'bg-green-500'} Date={"9 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281196"} status={"Successful"} color={'bg-green-500'} Date={"9 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281195"} status={"Failed"} color={'bg-red-500'} Date={"9 Jul 2023, 3:00 PM"} />
       
       <Data OrderId={"281194"} status={"Successful"} color={'bg-green-500'} Date={"8 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281193"} status={"Successful"} color={'bg-green-500'} Date={"8 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281192"} status={"Failed"} color={'bg-red-500'} Date={"8 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281191"} status={"Successful"} color={'bg-green-500'} Date={"7 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281190"} status={"Successful"} color={'bg-green-500'} Date={"7 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281189"} status={"Failed"} color={'bg-red-500'} Date={"7 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281188"} status={"Successful"} color={'bg-green-500'} Date={"6 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281187"} status={"Successful"} color={'bg-green-500'} Date={"6 Jul 2023, 3:00 PM"} />
       <Data OrderId={"281186"} status={"Successful"} color={'bg-green-500'} Date={"6 Jul 2023, 3:00 PM"} />
       
       
       
       
        </table>
    )
}
// <div className="p-5 pr-10 flex justify-between">
{/* <h1 className="text-[#146eb4] font-semibold">#{OrderId}</h1>
<div className="flex gap-3">
    <div className={`h-3 w-3  mt-2 ${color}rounded-full fill-green-900`}></div>
    <h1 className="text-medium ">{status}</h1>
</div>
<h1 className="mr-10">131634495747</h1>
<h1>{Date}</h1>
<h1 className="mr-8">₹1,125.00</h1>
</div> */}