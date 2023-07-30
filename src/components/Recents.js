import React from 'react'
import '../css/Recents.css'

const Recents = () => {
    return (
        <div className='recents'>
            <div className='row'>
                <div class="col-12 text-center mb-4">
                    <div class="secTitle">
                        <h3>Recent Blogs</h3>
                    </div>

                    <div class="subTitle">
                        <h4> Your partnership can help us the grow more</h4>
                    </div>
                </div>


                <div className='col-lg-4 col-md-1'>
                    <div className='recentblog'>
                        <h4 className='mb-2'>Mi Air Charging – Insane Revolution...</h4>
                        <h6>
                            <em>
                                <span>May, 16</span>&nbsp; / &nbsp; <span>Blog</span>
                            </em>
                        </h6>

                        <div className='blogimg mb-3'>
                            <img src='https://ivazz.com/wp-content/uploads/2021/05/xiaomi-mi-air-charge-technology-5w-wireless.jpg' />
                        </div>

                        <p>Xiaomi has announced Mi Air Charging just weeks after Samsung’s new Galaxy S21 Series.  It is a revolution of wireless charging within the...</p>
                    </div>
                </div>

                <div className='col-lg-4 col-md-1'>
                    <div className='recentblog'>
                        <h4 className='mb-2'>Nagarik App is out of beta, introdu...</h4>
                        <h6>
                            <em>
                                <span>May, 16</span>&nbsp; / &nbsp; <span>Blog</span>
                            </em>
                        </h6>

                        <div className='blogimg mb-3'>
                            <img src='https://ivazz.com/wp-content/uploads/2021/05/Nagarik-App-new-features.png' />
                        </div>

                        <p>As you already know that the Nepal government’s (GoN) official service delivery mobile app “Nagarik App” has been published with...</p>
                    </div>
                </div>

                <div className='col-lg-4 col-md-1'>
                    <div className='recentblog'>
                        <h4 className='mb-2'>Behind Jeff Bezos and Bernard Ar...</h4>
                        <h6>
                            <em>
                                <span>June, 2</span>&nbsp; / &nbsp; <span>Blog</span>
                            </em>
                        </h6>

                        <div className='blogimg mb-3'>
                            <img src='https://ivazz.com/wp-content/uploads/2021/06/Bernard-Arnault-becomes-the-richest-man-in-the-world-After-1024x576-2-696x379-1.jpg' />
                        </div>

                        <p>The crown of the world’s richest man has been snatched from Jeff Bezos. He now has the most assets in...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recents