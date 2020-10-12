import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        const enter = {
            left: 0
        }
        return (
            <div className="sidebar container py-3 mt-3" style={this.props.state ? enter: null}>
                <p className="orange-text mt-2 mb-0" onClick={this.props.handleMobileClose}>LIGHTING Explorer</p>
                <p className="orange-text mt-2 mb-0" onClick={this.props.handleMobileClose}>OFFICE</p>
                <p className="orange-text mt-2 mb-0" onClick={this.props.handleMobileClose}>HOTEL</p>
                <p className="orange-text mt-2 mb-0" onClick={this.props.handleMobileClose}>Home</p>
                <p className="text-white mt-2 mb-0" onClick={this.props.handleMobileClose}>All Products</p>
                <p className="text-white mt-2 mb-0" onClick={this.props.handleMobileClose}>PENDANT LIGHT</p>
                <p className="text-white mt-2 mb-0" onClick={this.props.handleMobileClose}>CHANDELIER</p>
                <p className="text-white mt-2 mb-0" onClick={this.props.handleMobileClose}>SWITCHES & SOCKETS</p>
                <p className="text-white mt-2 mb-0" onClick={this.props.handleMobileClose}>CEILING LAMP</p>
                <p className="text-white mt-2 mb-0" onClick={this.props.handleMobileClose}>WALL LAMP</p>
            </div>
        )
    }
}
