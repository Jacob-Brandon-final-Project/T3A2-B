import React from "react";
import logo from "../photos/logo.png";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import SearchBarComponent from "./SearchBar";

const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 flex items-center justify-between ">
        {/* desktop */}

            <Link to={""}>
                <div className="h-16"> 
                    <img src={logo} className="h-full" alt="Logo" />
                </div>
            </Link>
            <div className="flex items-center justify-center flex-1">
               <SearchBarComponent />
            </div>
            <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
                <Link to={""}>Home</Link>
                <Link to={"shop"}>Shop</Link>
                <Link to={"breaks"}>Breaks</Link>
                <Link to={"contact"}>Contact</Link>
                <Link to={"artists"}>Artists</Link>
            </nav>

              
              <div className="flex items-center gap-4 md:gap-7">
                <div className="text-2xl text-slate-600 relative" >
                  <TiShoppingCart/>
                  <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">0</div>
              </div>
              <div className="text-2xl text-slate-600 cursor-pointer">
               <FaCircleUser/>
              </div>
            </div>
            
        


       {/* mobile */ }
    </header>
  );
};

export default Header