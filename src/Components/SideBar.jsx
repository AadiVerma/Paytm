import image from "../assets/avatar.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import SubComponent from "./SubComponent";
import { MdOutlineHome } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { SiGoogleanalytics } from "react-icons/si";
import { IoWalletSharp } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { BsLightningCharge } from "react-icons/bs";
import FooterPart from "./FooterComponent";
export default function SideBar(){
    return (
    <div className="bg-slate-800 h-full p-5 overflow-y-auto" >
        <div className="flex justify-between mb-7 gap-3">
            <img src={image} className="w-14 rounded-lg h-12"/>
            <div>
                <h2 className="text-white font-semibold text-xl">Aditya</h2>
                <h3 className="underline underline-offset-2 text-slate-300 text-lg">Visit Store</h3>
            </div>
            <RiArrowDropDownLine className="text-6xl text-white" />
        </div>
        <SubComponent icon={<MdOutlineHome/>} text={"Home"}/>
        <SubComponent icon={<FaClipboardList />} text={"Orders"}/>
        <SubComponent icon={<IoGridOutline />} text={"Products"}/>
        <SubComponent icon={<CiDeliveryTruck />} text={"Delivery"}/>
        <SubComponent icon={<HiMiniSpeakerWave />} text={"Marketing"}/>
        <SubComponent icon={<SiGoogleanalytics />} text={"Analytics"}/>
        <SubComponent icon={<IoWalletSharp />} text={"Payouts"}/>
        <SubComponent icon={<CiDiscount1 />} text={"Discounts"}/>
        <SubComponent icon={<MdPeopleAlt />} text={"Audience"}/>
        <SubComponent icon={<IoIosColorPalette />} text={"Appearance"}/>
        <SubComponent icon={<BsLightningCharge />} text={"Plugins"}/>
        <FooterPart/>
    </div>
    )
}