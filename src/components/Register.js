import React from 'react'
import '../css/Register.css'

const Register = () => {
    return (
        <div className='register'>
            <div className='row justify-content-center'>
                <div class="col-12 text-center mb-4">
                    <div class="secTitle">
                        <h3 class="text-white">Register your domain name</h3>
                    </div>

                    <div class="subTitle">
                        <h4 class="text-white">"Cheap Domain Registration & Web Hosting in Nepal"</h4>
                    </div>
                </div>

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-primary" type="button" id="button-addon2">Check</button>
                </div>

                <div className='addons mb-4'>
                    <div className='row justify-content-center'>
                        <div class="col-12 text-center mb-4">
                            <div class="subTitle">
                                <h4 class="text-white">FREE Add-Ons with every Domain Name Registration in Nepal!</h4>
                            </div>
                        </div>

                        <ul>
                            <li>2 Free Email Account </li>
                            <li>Bulk Tools </li>
                            <li>DNS Management </li>
                            <li>Easy to use Control </li>
                            <li>PanelDomain </li>
                            <li>Theft Protection </li>
                            <li>Domain Forwarding </li>
                            <li>Unlimited Mail Forwards </li>
                            <li>Spam Protection </li>
                        </ul>

                    </div>
                </div>


                <div className='pricerange mb-5'>
                    <div className='domainprice domaintitle'>
                        <h6>Lowest</h6>
                        <h6>Price Guarenteet</h6>
                    </div>

                    <div className='domainprice'>
                        <h4>.tv</h4>
                        <h6><em>5,000</em></h6>
                    </div>

                    <div className='domainprice'>
                        <h4>.org</h4>
                        <h6><em>1,900.00</em></h6>
                    </div>

                    <div className='domainprice'>
                        <h4>.net</h4>
                        <h6><em>1,900.00</em></h6>
                    </div>

                    <div className='domainprice'>
                        <h4>.com</h4>
                        <h6><em>2,000</em></h6>
                    </div>

                    <div className='domainprice'>
                        <h6 className='mt-4'>View More</h6>
                    </div>
                </div>



                <div className='col-lg-3 col-md-6'>
                    <div className='hosting'>
                        <div className='hostingmain'>
                            <div className='hostingmainicon'>
                                <img src="https://ivazz.com/wp-content/uploads/2021/05/dedicated-server.webp" />
                            </div>

                            <h5>Web Hosting</h5>
                        </div>

                        <div className='hostingdetail'>
                            <p> Perfect for hosting small and medium websites, get lightening-fast and secure SSD hosting </p>
                            <h6 className='text-secondary'>Starting From $1/Month</h6>
                            <h5>
                                See More &nbsp;
                                <i className='fas fa-caret-right'></i>
                            </h5>
                        </div>
                    </div>
                </div>


                <div className='col-lg-3 col-md-6'>
                    <div className='hosting'>
                        <div className='hostingmain'>
                            <div className='hostingmainicon'>
                                <img src="https://ivazz.com/wp-content/uploads/2021/05/windows-vps.webp" />
                            </div>

                            <h5>Reseller Hosting</h5>
                        </div>

                        <div className='hostingdetail'>
                            <p>  Fully managed WHM/cPanel™ reseller hosting designed to grow your web hosting business </p>
                            <h6 className='text-secondary'>Starting From $6.99/Month</h6>
                            <h5>
                                See More &nbsp;
                                <i className='fas fa-caret-right'></i>
                            </h5>
                        </div>
                    </div>
                </div>


                <div className='col-lg-3 col-md-6'>
                    <div className='hosting'>
                        <div className='hostingmain'>
                            <div className='hostingmainicon'>
                                <img src="https://ivazz.com/wp-content/uploads/2021/05/cloudvps.webp" />
                            </div>

                            <h5>Cloud VPS</h5>
                        </div>

                        <div className='hostingdetail'>
                            <p> Cloud VPS with root access, 100% NVMe SSD, Super-fast and secured. For big website and application hosting </p>
                            <h6 className='text-secondary'>Starting From $8.99/Month</h6>
                            <h5>
                                See More &nbsp;
                                <i className='fas fa-caret-right'></i>
                            </h5>
                        </div>
                    </div>
                </div>


                <div className='col-lg-3 col-md-6'>
                    <div className='hosting'>
                        <div className='hostingmain'>
                            <div className='hostingmainicon'>
                                <img src="https://ivazz.com/wp-content/uploads/2021/06/website-2.png" />
                            </div>

                            <h5>Nesportal Hosting</h5>
                        </div>

                        <div className='hostingdetail'>
                            <p>  Best For News portal Sites with maximum bandwidth and storage capacity...  </p>
                            <h6 className='text-secondary'>Starting From $3/Month</h6>
                            <h5>
                                See More &nbsp;
                                <i className='fas fa-caret-right'></i>
                            </h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register