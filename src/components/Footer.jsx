import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
    <React.Fragment>
        <div className="py-3 Footer">
            <div className="container d-flex justify-content-between flex-wrap">
                <div className="FooterItem mb-3">
                    <img src="images/Group 271.png" width="98px" className="mb-4" alt=""/>
                    <p className="FooterDetails">//Talk about the company here//
                    Brighten your nights with modern designer lighting from Thelightinghaus.com Our range features top brands and all the latest contemporary lighting styles to illuminate your home and garden.
                    </p>
                </div>
                <div className="FooterItem mb-3">
                    <h5 className="FooterHeader d-flex align-items-center" >Quick Links</h5>
                    <div className="mt-4">
                        <p className="FooterHover">LIGHTING Explorer</p>
                        <p className="FooterHover">OFFICE</p>
                        <p className="FooterHover">HOTEL</p>
                        <p className="FooterHover">HOME</p>
                        <p className="FooterHover">MY ACCOUNT</p>
                        <p className="FooterHover">CART</p>
                    </div>
                </div>
                <div className="FooterItem mb-5">
                    <h5 className="FooterHeader d-flex align-items-center" >Connect</h5>
                    <div className="mt-4">
                        <p>Connect with us on social media</p>
                        <img src="images/new1.png" width="15px" height="14px" alt="" className="mr-2" />
                        <img src="images/new2.png" width="15px" height="14px" alt="" className="mr-2" />
                        <img src="images/Group (4).png" width="15px" height="14px" alt="" className="mr-2" />
                        <img src="images/new3.png" width="15px" height="14px" alt="" className="mr-2" />
                        <img src="images/Group (5).png" width="15px" height="14px" alt="" className="mr-2" />
                        <img src="images/Group (6).png" width="15px" height="14px" alt="" className="mr-2" />
                        <img src="images/Group (7).png" width="15px" height="14px" alt="" className="mr-2" />
                    </div>
                </div>
                <div className="FooterItem mb-3">
                    <div className="FooterHeader d-flex  align-items-center" >
                        <div className="d-flex">
                            <img src="images/yellow.png" width="32px" height="32px" className= "mr-3" alt=""/>
                            <div className="d-flex flex-column">
                                <p className="mb-0">Download our mobile app.</p>
                                <p className="mb-0">Get access to exclusive offers</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <img src="images/Group 272.png" className="mr-2 mb-2" height="37px" alt=""/>
                        <img src="images/Group 269.png" alt="" className="mb-2"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid contacts">
            <div className="container d-flex align-items-center py-1 flex-wrap MobileContacts">
                <div className="d-flex align-items-baseline mr-3 header-item">
                    <img src="images/Vector (36).png" width="15px" className="mr-3"></img>
                    <p className="text-white mb-0">+234 802 501 8557</p>
                </div>
                <div className="d-flex align-items-center mr-3 header-item">
                    <img src="images/Group (1).png" width="15px" className="mr-3"></img>
                    <p className="text-white mb-0">35 Freedom Way, Lekki Phase 1, Lagos, Nigeria</p>
                </div>
                <div className="d-flex align-items-baseline mr-3 header-item">
                    <img src="images/Vector (34).png" width="15px" className="mr-3"></img>
                    <p className="text-white mb-0">sales@thelightinghaus.com</p>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
  }
}
