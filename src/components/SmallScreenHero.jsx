import React, { Component } from 'react'

export default class SmallScreenHero extends Component {
  render() {
    return (
      <div className="d-block d-md-none container hero-smallscreen py-3">
            <h1 className="mb-3">Explore our Showroom</h1>
            <p className="mb-3">Not sure of what you’re looking for? 
            No worries, use <span>Lighting Xplorer</span> to see what you can get.</p>
            <button className="d-flex align-items-center justify-content-center px-4">
                <p className="mb-0 mr-3">Proceed to Lighting Xplorer</p>
                <img src="images/Vector (38).png" width="22px"></img>
            </button>
      </div>
    )
  }
}
