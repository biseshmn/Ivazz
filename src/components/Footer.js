import React from 'react'
import '../css/Footer.css'

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='widget-footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <div className='widget mapbg'>
                                        <div class="textwidget">
                                            <p><strong>Nepal Office:</strong></p>
                                            <p>P. B. No. 7750, Lazimpat-3, Kathmandu<br />
                                                Phone: +977-014522993<br />
                                                Phone: +977-014513223</p>
                                            <p>Mobile/Whatsapp: +977-9851090241</p>
                                            <p>Mobile/Whatsapp: +977-9817111971</p>
                                            <p>Email: ivazztech@gmail.com</p>
                                            <p>&nbsp;</p>
                                            <p><strong>UK Office:</strong></p>
                                            <p>TW13 4HJ, Parkfield, Feltham, London</p>
                                            <p>Phone: +44-2030156691</p>
                                            <div>
                                                <div>
                                                    <div tabindex="0" role="gridcell" data-scope="messages_table">
                                                        <div tabindex="-1" role="button" aria-expanded="false" aria-haspopup="menu" aria-label="Message actions">
                                                            <div data-visualcompletion="ignore"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Mobile: +44-7598479347</p>
                                            <p>Email: londonoffice@ivazz.com</p>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-4'>
                                    <div className='widget'>
                                        <div className='textwidget'>
                                            <p><strong>Bangladesh Office:</strong></p>
                                            <p>275/D, Suite # C11, Lift Level-11 Rangs Nasim Tower, Road No # 27, Dhanmondi, Dhaka – 1207, Bangladesh.</p>
                                            <p>Tel: +880 2 48112544</p>
                                            <p>Fax: +880 2 8100748</p>
                                            <p>Mobile: +88 01841 345 600</p>
                                        </div>
                                    </div>
                                </div>


                                <div className='col-lg-4'>
                                    <div className='widget'>
                                        <div className='textwidget'>
                                            <h3 class="widget-title">Important Info</h3>

                                            <div class="menu-footer-menu-2-container">
                                                <ul class="menu">
                                                    <li>Graphics Design</li>
                                                    <li>Internet Marketing</li>
                                                    <li>Content Writing</li>
                                                    <li>Software Developement</li>
                                                    <li>Web Hosting</li>
                                                    <li>Web Development</li>
                                                    <li>Domain Registration</li>
                                                    <li>Cloud Hosting</li>
                                                    <li>Bulk SMS</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='col-lg-4'>
                            <div className='widget'>
                                <div className='subscribeform'>
                                    <div className='suscribepara'>
                                        <p>IvaZz Technology is a front ranking web hosting and web designing company. We feel immense pleasure to introduce our company as one of the pioneer web designing and web development companies in Nepal. We are successful to establish the most trusted brand image of Web Hosting and Web Designing Company in Nepal. IvaZz Technology possesses the valuable assets of 25+ highly professional and experienced staffs (both in-house and outsourced).&nbsp;</p>
                                        <p>&nbsp;</p>
                                        <p>Subscribe to Our Newsletter to get Important News, Amazing Offers &amp; Inside Scoops:</p>
                                    </div>

                                    <form className="mb-0" novalidate="novalidate">
                                        <div className="input-group mx-auto">
                                            <div className="input-group-text"><i className="fas fa-location-arrow"></i></div>
                                            <input type="email" name="widget-subscribe-form-email" className="form-control required email" placeholder="Enter your Email" />
                                            <button className="btn btn-primary" type="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>

                                <div class="social-media">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/IvaZzTechnology/" class="fb">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.twitter.com/" class="twitter">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="https://www.linkedin.com/" class="linked">
                                                <i class="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="belowFooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <p> Copyrights © 2020 All Rights Reserved by IvaZz Technology</p>
                        </div>
                        <div className="termsofuse col-md-6 col-sm-12 text-start">
                            <div className="copyright-links"><a href="https://ivazz.com/privacy-policy">Terms of Use</a> / <a target="_blank" href="https://ivazz.com/privacy-policy" rel="noreferrer">Privacy Policy</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer