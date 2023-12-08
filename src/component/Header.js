import React from "react";
import logo from "../photos/logo.png";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-32 px-2 md:px-4 z-50">
        {/* desktop */}

        <div className="flex items-center h-full justify-between">
            <Link to={""}>
                <div className="h-16"> 
                    <img src={logo} className="h-full" />
                </div>
            </Link>

            <div className="flex items-center gap-4 md:gap-7">
              <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
                  <Link to={""}>Home</Link>
                  <Link to={"shop"}>Shop</Link>
                  <Link to={"breaks"}>Breaks</Link>
                  <Link to={"contact"}>Contact</Link>
                  <Link to={"artists"}>Artists</Link>
              </nav>
              <div className="text-2xl text-slate-600" >
                  <TiShoppingCart />
                  
              </div>
              <div className="text-2xl text-slate-600">
              <FaCircleUser />
              </div>
            </div>
            
        </div>


       {/* mobile */ }
  </header>
  );
};

export default Header