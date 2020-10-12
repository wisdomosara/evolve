
import './App.scss';
import BigScreenHeader from './components/BigScreenHeader';
import SmallScreenHeader from "./components/SmallScreenHeader"
import Sidebar from './components/Sidebar'
import BigScreenHero from './components/BigScreenHero'
import SmallScreenHero from './components/SmallScreenHero'
import ShopSpace from './components/ShopSpace'
import FeaturedCategories from './components/FeaturedCategories'
import PopularProducts from './components/PopularProducts'
import ProductsOnSale from './components/ProductsOnSale'
import Mailing from './components/Mailing'
import Footer from './components/Footer'

import React, { Component } from 'react'

class App extends Component {
  state ={
    mobileClick : false
  }

  handleMobile = () => {
    this.setState( (prevState) => {
     return {
      mobileClick: !prevState.mobileClick
     } 
    })
  }
  handleMobileClose = () => {
    this.setState({
      mobileClick: false
    })
  }
  

  render() {
    return (
      <React.Fragment>
        <div className="d-none d-md-block">
          <BigScreenHeader />
          <BigScreenHero />
          <ShopSpace />
          <FeaturedCategories />
          <PopularProducts />
          <ProductsOnSale />
          <Mailing />
          <Footer />
        </div>
        <div className="d-block d-md-none">
          
          <SmallScreenHeader handleMobile={this.handleMobile} handleMobileClose={this.handleMobileClose} state={this.state.mobileClick}/>
          <Sidebar  handleMobileClose={this.handleMobileClose} state={this.state.mobileClick} />
          <SmallScreenHero />
          <ShopSpace />
          <PopularProducts />
          <FeaturedCategories />
          <ProductsOnSale />
          <Mailing />
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default App