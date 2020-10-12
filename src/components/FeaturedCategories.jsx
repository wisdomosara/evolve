import React, { Component } from 'react'

import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  
import PopularProperties from './PopularCategoriesData'


function FeaturedCategoryItem(props) {
  return (
    <div>
        <div className="featuredCategoryItem item d-none d-md-block">
            <img src={props.data.image}></img>
            <div className="FeaturedCategoryTag d-md-flex align-items-center pl-3 d-none">
                <h4 className="mb-0 mr-5">{props.data.name}</h4>
            </div>
        </div>


        <div className="featuredCategoryItem d-md-none item">
            <img src={props.data.image}></img>
            <div className="FeaturedCategoryTag d-flex align-items-center pl-3 ">
                <h4 className="mb-0 mr-3">{props.data.name}</h4>
            </div>
        </div>
    </div>
  );
}




export default class FeaturedCategories extends Component {
 state= {
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
 }
    componentDidMount() {
        document.querySelector(".owl-nav > button.owl-prev > span").innerHTML = '<i class="fas fa-arrow-left"></i>';
        document.querySelector(".owl-nav > button.owl-next > span").innerHTML = '<i class="fas fa-arrow-right"></i>';
    }
  render() {
    const FeaturedCategoryItems = PopularProperties.map(item => <FeaturedCategoryItem key={item.id} data={item} />)
    return (
      <div className="container FeaturedCategories mt-5">
        <div className="mt-3 mb-3 d-none d-md-flex align-items-baseline">
            <h4 className="mr-3">Popular Products</h4>
            <p className="mb-1 view-all">View All</p>
        </div>
        <div className="mt-3 mb-3 d-md-none d-flex justify-content-between">
            <h4>Featured Products</h4>
            
        </div>
        <OwlCarousel 
          nav
          margin={10}
          className="owl-theme" 
          responsive = {this.state.responsive}
          >   
            {FeaturedCategoryItems}
      </OwlCarousel>  
      </div>
    )
  }
}
