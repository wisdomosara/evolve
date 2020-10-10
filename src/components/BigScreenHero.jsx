import React, { Component } from 'react'

export default class BigScreenHero extends Component {
    render() {
        return (
            <div className="hero d-none d-md-block">
                <div className="container">
                    <div className="hero-text">
                        <h1 className="mb-5">Explore our Showroom</h1>
                        <p className="mb-5">Not sure of what you’re looking for? 
                        No worries, use <span>Lighting Xplorer</span> to see what you can get.</p>
                        <button className="d-flex align-items-center justify-content-center">
                            <p className="mb-0 mr-3">Proceed to Lighting Xplorer</p>
                            <img src="images/Vector (38).png" width="22px"></img>
                        </button>
                    </div>
                </div>
                <div id="carouselId" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators container">
                        <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselId" data-slide-to="1"></li>
                        <li data-target="#carouselId" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img src="images/Rectangle 7.png" alt="First slide" width="100%" height="auto"></img>
                        </div>
                        <div class="carousel-item">
                            <img src="images/Rectangle 12.png" alt="First slide" width="100%" height="auto"></img>
                        </div>
                        <div class="carousel-item">
                            <img src="images/Rectangle 13.png" alt="First slide" width="100%" height="auto"></img>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
