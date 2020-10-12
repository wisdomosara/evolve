import React, { Component } from 'react'
import PopularProductsData from './PopularProductsData'

function PopularProductsItem(props) {
    return (
        <div className="PopularProductsItem mb-4 mr-3 mr-md-0">
           <img src={props.data.image}></img>
            <div className="PopularProductsTag d-flex align-items-center px-2 py-2">
                {props.data.off ? <h4 className="mb-0">{props.data.offPercent}% OFF</h4> : null}
            </div>
            <h5 className="mt-3 mb-2">{props.data.name}</h5>
            <div className="d-flex justify-content-between">
                <p className="mb-0">{props.data.price}</p>
                {props.data.oldd ? <p className="mb-0 old-price">{props.data.old}</p> : null}
            </div>
        </div>
    )
}

export default class PopularProducts extends Component {
  render() {
      const PopularProductItems = PopularProductsData.map(item=> <PopularProductsItem key={item.id} data={item} />)
    return (
      <div className="container px-md-4 PopularProductsDiv mt-1 mb-3 pt-2">
        <div className="mt-1 mb-3 d-none d-md-flex align-items-baseline">
            <h4 className="mr-3">Popular Products</h4>
            <p className="mb-0 view-all">View All</p>
        </div>
        <div className="mt-1 mb-3 d-md-none d-flex justify-content-between">
            <h4>Featured Products</h4>
            <p className="mb-0 view-all">View All</p>
        </div>
        <div className="d-md-flex flex-wrap justify-content-between d-none">
            {PopularProductItems}
        </div>
        <div className="d-flex d-md-none PopularScroll">
            {[PopularProductItems[0], PopularProductItems[1], PopularProductItems[2]]}
        </div>
      </div>
    )
  }
}
