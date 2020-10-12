import React, { Component } from 'react'
import ShopSpaceItem from './ShopSpaceItem'

export default class ShopSpace extends Component {
  render() {
    return (
      <div className="container py-3 mt-2">
        <div className="d-flex justify-content-md-start justify-content-between align-items-baseline mb-3 ShowSpaceHeading">
            <h5 className="mb-0">Shop By Space</h5>
            <p className="ml-3 mb-0 view-all">View all</p>
        </div>
        <p>Select the type of apartment you want to light up.</p>
        <div>
            <ShopSpaceItem />
        </div>
      </div>
    )
  }
}
