import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterIcon} from "flowbite-react";
import { BsTwitch, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
import logo from "../photos/logo.png";
import React from "react"

    Footer = () => {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <FooterBrand
                            href="#"
                            img src={logo}
                            alt="Ashton's Cardboard Circus logo"
                            name="Ashton's"
                        />
                    </div> 
                    <FooterDivider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <FooterCopyright href="#" by="ACS" year={2023} />
                        <div className="mt-4 flex space-x-6 sm:mt-) sm:justify-center">
                            <FooterIcon href="#" icon={BsFacebook} />
                            <FooterIcon href="#" icon={BsInstagram} />
                            <FooterIcon href="#" icon={BsYoutube} />
                            <FooterIcon href="#" icon={BsTwitch} />
                        </div> 
                    </div>  
                </div>
            </div>
        </Footer> 
    );
}

export default Footer