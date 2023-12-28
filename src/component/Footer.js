import { Footer } from "flowbite-react";
import { BsTwitch, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";
import logo from "../photos/logo.png";
import React from "react"

function FooterComponent() {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="#"
                            img src={logo}
                            alt="Ashton's Cardboard Circus logo"
                            name="Ashton's"
                        />
                    </div> 
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="ACS" year={2023} />
                        <div className="mt-4 flex space-x-6 sm:mt-) sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsYoutube} />
                            <Footer.Icon href="#" icon={BsTwitch} />
                        </div> 
                    </div>  
                </div>
            </div>
        </Footer> 
    );
}

export default FooterComponent;
