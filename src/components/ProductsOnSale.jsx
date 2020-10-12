import React, { Component } from 'react'
import PopularProductsData from './PopularProductsData'
import MobileCategory from './MobileCategoriesData'

function PopularProductsItem(props) {
    return (
        <>
            <div className="PopularProductsItem mb-4 mr-3 mr-md-0 d-none d-md-block">
                <img src={props.data.image}></img>
                <div className="PopularProductsTag d-flex align-items-center px-2 py-2">
                    {props.data.off ? <h4 className="mb-0">{props.data.offPercent}% OFF</h4> : null}
                </div>
                <h5 className="mt-3 mb-2">{props.data.name}</h5>
                <p className="mb-0">{props.data.price}</p>
            </div>
            
        </>
    )
}

function PopularProductsItemsMobile(props) {
    return (
        <div className="d-block d-md-none SpaceItem mb-3">
                <img src={props.data.image}></img>
                <div className="SpaceTag d-md-flex align-items-center pl-3 d-none">
                <h4 className="mb-0">HOME</h4>
                </div>
                <h5 className="mt-2 d-block d-md-none space-small">{props.data.name}</h5>
        </div>
    )
}

export default class ProductsOnSale extends Component {
  render() {
    const PopularProductItems = PopularProductsData.map(item=> <PopularProductsItem key={item.id} data={item} />)
    const MobileCategoryItems = MobileCategory.map(item => <PopularProductsItemsMobile key={item.id} data={item} />)
    return (
      <div className="container px-md-4 PopularProductsDiv mt-2 mt-md-5 pt-2 mb-5">
        <div className="mt-3 mb-3 d-none d-md-flex align-items-baseline">
            <h4 className="mr-3">Products On Sale</h4>
            <p className="mb-0 view-all">View All</p>
        </div>
        <div className="mt-3 mb-3 d-md-none d-flex justify-content-between">
            <h4>Popular Categories</h4>
        </div>
        <div className="d-md-flex flex-wrap justify-content-between d-none">
            {PopularProductItems}
        </div>
        <div className="d-flex d-md-none flex-wrap justify-content-between mb-4">
            {MobileCategoryItems}
        </div>
        <button className="d-flex justify-content-center align-items-center d-md-none MobileViewAll mb-3">
            <p className="text-center mb-0">View All Products</p>
        </button>
      </div>
    )
  }
}
