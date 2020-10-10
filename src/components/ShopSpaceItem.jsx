import React, { Component } from 'react'

export default class ShopSpaceItem extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between">
            <div className="SpaceItem">
                <img src="images/Rectangle 12.png"></img>
                <div className="SpaceTag d-md-flex align-items-center pl-3 d-none">
                   <h4 className="mb-0">HOME</h4>
                </div>
                <h5 className="mt-3 d-block d-md-none">Home</h5>
            </div>
            <div className="SpaceItem">
                <img src="images/Rectangle 13.png"></img>
                <div className="SpaceTag d-md-flex align-items-center pl-3 d-none">
                   <h4 className="mb-0">OFFICE</h4>
                </div>
                <h5 className="mt-3 d-block d-md-none">Office</h5>
            </div>
            <div className="SpaceItem">
                <img src="images/Rectangle 14.png"></img>
                <div className="SpaceTag d-md-flex align-items-center pl-3 d-none">
                   <h4 className="mb-0">HOTEL</h4>
                </div>
                <h5 className="mt-3 d-block d-md-none">Hotel</h5>
            </div>
        </div>
      </div>
    )
  }
}

