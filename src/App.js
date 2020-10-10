
import './App.scss';
import BigScreenHeader from './components/BigScreenHeader';
import SmallScreenHeader from "./components/SmallScreenHeader"
import BigScreenHero from './components/BigScreenHero'
import SmallScreenHero from './components/SmallScreenHero'
import ShopSpace from './components/ShopSpace'

import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
        <BigScreenHeader />
        <SmallScreenHeader />

        <BigScreenHero />
        <SmallScreenHero />
        <ShopSpace />
      </>
    )
  }
}

export default App