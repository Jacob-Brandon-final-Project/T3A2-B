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
                            alt="Ashtons Cardboard Circus logo"
                            name="Ashtons Cardboard Circus"
                        />
                    </div>
                    <Footer.Divider />

                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="ACS" year={2023} />
                            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                                <Footer.Icon href="https://www.facebook.com/people/Ashtons-Cardboard-Circus/100068864801280/" icon={BsFacebook} />
                                <Footer.Icon href="https://www.instagram.com/ashtons_cardboard_circus/" icon={BsInstagram} />
                                <Footer.Icon href="https://www.youtube.com/channel/UC7LvPHK0hkhF4bgOAOqMMBQ" icon={BsYoutube} />
                                <Footer.Icon href="#" icon={BsTwitch} />
                            </div> 
                    </div>  
                </div>
            </div>
        </Footer> 
    );
}

export default FooterComponent;
