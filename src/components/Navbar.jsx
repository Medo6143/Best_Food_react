import { useState } from "react";
import { FaList, FaSearch, FaShoppingCart, FaWallet } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineFavorite, MdOutlineHelp } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

export const Navbar = () => {
    const [show, setShow] = useState(false);
  return (
    <div className="max-w-[1640px] max-auto flex justify-between items-cente p-4 font-serif">
      {/* Sidebar */}

      <div className="flex items-center gap-4">
      <div className="cursor-pointer" onClick={() => setShow(!show)}>
          <FaList size={30} />
        </div>
    
        <h1 className="text-2xl  sm:text-3xl lg:text-4xl font-bold px-2">
          Best <span className="text-[#facc15]">Food</span>
        </h1>

        <div className=" items-center hidden sm:flex  rounded-full p-1 text-[14px] bg-gray-200">
          <p className="bg-black text-white  rounded-full px-4 py-2">Delivery</p>
          <p className=" p-2">Pickup</p>
        </div>
    
      </div>
    {/* search */}
    <div className=" bg-gray-200 rounded-full flex items-center  px-2 gap-2 max-[200px] md:w-[400px] lg:w-[500px]">
        <FaSearch size={20}/>
        <input type="text" placeholder="Search Food" className="bg-transparent  p-2 focus:outline-none w-full"/>
    </div>

    {/* cart */}
    <div className="flex items-center gap-2 bg-black text-white rounded-full px-4 py-2">
        <FaShoppingCart size={20}/>
        <p className="">Cart</p>
    </div>



    {/* mobile menue */}
    {/* overlay */}
    {show && <div className="bg-black/80 fixed h-screen z-10 w-full left-0 top-0" onClick={() => setShow(!show)}></div>}
{/* side bar */}
<div className={`${show ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 w-[300px] h-screen  bg-white z-10 duration-300 ease-in-out transform`}>

<IoClose  size={40} className="absolute top-4 right-4 cursor-pointer" onClick={() => setShow(!show)}/>
<h2 className="text-2xl p-4 font-serif ">Best <span className="text-[#facc15] font-bold font-serif">Food</span></h2>
<nav>
    <ul className="flex flex-col p4 " >
        <li className="flex text-xl items-center hover:bg-gray-200 cursor-pointer  font-semibold  p-4"><TbTruckDelivery size={25} className="mr-4"/> Order</li>
        <li className="flex text-xl items-center hover:bg-gray-200 cursor-pointer  font-semibold  p-4"><MdOutlineFavorite size={25} className="mr-4"/> Favorite</li>
        <li className="flex text-xl items-center hover:bg-gray-200 cursor-pointer  font-semibold  p-4"><FaWallet size={25} className="mr-4"/> Wallet</li>
        <li className="flex text-xl items-center hover:bg-gray-200 cursor-pointer  font-semibold  p-4"><MdOutlineHelp size={25} className="mr-4"/> Help</li>
        <li className="flex text-xl items-center hover:bg-gray-200 cursor-pointer  font-semibold  p-4"><AiFillTag size={25} className="mr-4"/> Promotion</li>
        <li className="flex text-xl items-center hover:bg-gray-200 cursor-pointer  font-semibold  p-4"><BsFillSaveFill size={25} className="mr-4"/> Best ones</li>
        <li className="flex text-xl items-center hover:bg-gray-200 cursor-pointer  font-semibold  p-4"><FaUserFriends size={25} className="mr-4"/> Invite</li>
    </ul>
</nav>

</div>
    </div>
  );
};
