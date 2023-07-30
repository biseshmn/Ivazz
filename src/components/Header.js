import React, { useState, useEffect } from 'react'
import '../css/Header.css'

const Header = () => {
    const [backgroundColor, setHeaderColor] = useState("transparent")
    const [textColor, setTextColor] = useState("white")
    const [logoHeight, setLogoHeight] = useState("80px")


    const listenScrollEvent = () => {
        window.scrollY > 10 ? setHeaderColor("white") : setHeaderColor("transparent")
    }

    const listenScroll = () => {
        window.scrollY > 10 ? setTextColor("black") : setTextColor("white")
    }

    const listenScrollImg = () => {
        window.scrollY > 10 ? setLogoHeight("60px") : setLogoHeight("80px")
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
        window.addEventListener("scroll", listenScroll)
        window.addEventListener("scroll", listenScrollImg)
    }, [])

    return (
        <div className='main-header' style={{ backgroundColor: backgroundColor, color: textColor }}>
            <div className='logo'>
                <img src="https://ivazz.com/wp-content/uploads/2021/05/logo.webp" class="custom-logo entered lazyloaded" alt="Ivazz Technology" decoding="async" data-lazy-src="https://ivazz.com/wp-content/uploads/2021/05/logo.webp" data-ll-status="loaded" style={{ height: logoHeight }} />
            </div>

            <div className='headertabs'>
                <div className='tabs'>
                    HOME
                </div>

                <div className='tabs'>
                    ABOUT US
                </div>


                <div class="dropdown">
                    <div className='tabs dropdown-toggle' id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        SERVICES
                    </div>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                        <li><a class="dropdown-item" href="#">Web Hosting</a></li>
                        <li><a class="dropdown-item" href="#">Content Writing</a></li>
                        <li><a class="dropdown-item" href="#">Graphics Designing</a></li>
                        <li><a class="dropdown-item" href="#">Social Network Management</a></li>
                        <li><a class="dropdown-item" href="#">Software Development</a></li>
                        <li><a class="dropdown-item" href="#">Application Development</a></li>
                        <li><a class="dropdown-item" href="#">SEO</a></li>
                    </ul>
                </div>

                <div className='tabs'>
                    PORTFOLIO
                </div>

                <div className='tabs'>
                    CONTACT US
                </div>

                <div className='tabs'>
                    BLOG
                </div>



                <div class="dropdown">
                    <div className='dropbtn d-none dropdown-toggle' id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-list"></i>
                    </div>
                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton3">
                        <li><a class="dropdown-item" href="#">HOME</a></li>
                        <li><a class="dropdown-item" href="#">ABOUT US</a></li>
                        <li><a class="dropdown-item" href="#">SERVICES</a></li>
                        <li><a class="dropdown-item" href="#">PORTFOLIO</a></li>
                        <li><a class="dropdown-item" href="#">CONTACT US</a></li>
                        <li><a class="dropdown-item" href="#">BLOG</a></li>
                    </ul>
                </div>
            </div>


            <div className='phonedetail'>
                <button className='btn'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Nepal.png' />
                </button>

                <div className='phno text-end'>
                    <p className='m-0'>Expert Help</p>
                    <p className='m-0'>+977-9851090241</p>
                </div>
            </div>


            <div className='searchtab'>
                <i className='fas fa-search'></i>
            </div>
        </div>
    )
}

export default Header