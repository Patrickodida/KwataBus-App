import React from "react";

function Footer() {
    return (
        <div className="flex justify-around bg-blue-800 text-white">
            <section id="companyLogoMedia" className="p-8">
                <h1 className="text-xl" >Kwata<span id="h1">Bus</span></h1>

                <ul className="flex justify-around">
                    <li><i className='bx bxl-facebook-circle'></i></li>
                    <li><i className='bx bxl-twitter'></i></li>
                    <li><i className='bx bxl-linkedin-square'></i></li>
                </ul>
            </section>
            <section id="usefulLinks" className="p-8">
                <h1 id="h1" className="text-xl ">Useful Links</h1>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>

                <p>© KwataBus { new Date().getFullYear()}</p>
            </section>
            <section id="contact" className="p-8">
                <h1 id="h1" className="text-xl ">Contact Info</h1>
                <p>Plot 155, Dembe Towers</p>
                <p>+256393280823</p>
                <p>info@kwatabus.com</p>
            </section>
        </div>
  
        
    )
}

export default Footer;
