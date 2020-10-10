import React, { Component } from 'react'

export default class SmallScreenHeader extends Component {
  render() {
    return (
      <div className="d-block d-md-none container">
        <div className="d-flex justify-content-between align-items-center py-2">
            <img src="images/Group (3).png" width="25px" height="15px"></img>
            <img src="images/Group 56 (1).png" width="62px" height="35px"></img>
            <img src="images/Vector (42).png" width="18px" height="19px"></img>
        </div>
        <div className="search-div ml-lg-5 px-3">
            <img src="images/Vector (41).png" width="19px" className="mb-1"></img>
            <input type="text" placeholder="Search for a product, category or space." className="ml-2"></input>
        </div>
      </div>
    )
  }
}
