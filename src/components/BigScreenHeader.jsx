import React, { Component } from 'react'

export default class BigScreenHeader extends Component {
    render() {
        return (
            <div className="container-fluid px-0 d-md-block d-none">
                <div className="container-fluid bg-dark">
                    <div className="container d-flex align-items-center py-3 flex-wrap">
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
                <div className="second-header">
                    <div className="d-flex align-items-center justify-content-between container">
                        <img src="images/Group 56 (1).png" width="97px"></img>
                        <div className="search-div ml-lg-5 px-3">
                            <img src="images/Vector (41).png" width="19px" className="mb-1"></img>
                            <input type="text" placeholder="Search for a product, category or space." className="ml-2"></input>
                        </div>
                        <div className="d-flex pt-3">
                            <div className="d-flex flex-column align-items-center mr-md-3 mr-lg-5">
                                <img src="images/Group (2).png" width="16px" height="13px" className="mb-1"></img>
                                <p>My Account</p>
                            </div>
                            <div className="d-flex flex-column align-items-center mr-md-3 mr-lg-5">
                                <img src="images/Vector (39).png" width="13px" height="13px" className="mb-1"></img>
                                <p>List</p>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <img src="images/Vector (42).png" width="13px" height="13px" className="mb-1"></img>
                                <p>CART</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center container third-header py-3">
                    <p className="orange-text">LIGHTING Explorer</p>
                    <p className="orange-text">OFFICE</p>
                    <p className="orange-text">HOTEL</p>
                    <p className="orange-text">Home</p>
                    <p className="header-black-text">All Products</p>
                    <p className="header-black-text">PENDANT LIGHT</p>
                    <p className="header-black-text">CHANDELIER</p>
                    <p className="header-black-text">SWITCHES & SOCKETS</p>
                    <p className="header-black-text">CEILING LAMP</p>
                    <p className="header-black-text">WALL LAMP</p>
                </div>
            </div>
        )
    }
}
