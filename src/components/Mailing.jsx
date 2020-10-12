import React, { Component } from 'react'

export default class Mailing extends Component {
  render() {
    return (
      <>
        <div className="container mailing mb-4 px-md-0">
            <div className="row align-items-center">
                <div className="col-12 order-md-12 col-md-6">
                    <img src="images/Rectangle 23 (1).png" width="100%" alt=""/>
                </div>
                <div className="col-12 order-md-1 col-md-6 px-md-5 py-3">
                    <div className="d-flex align-items-center mb-4 mt-4 mt-md-0">
                        <img src="images/Vector (37).png" width="42px" alt=""/>
                        <h4 className="mb-0 ml-3">Join our mailing list</h4>
                    </div>
                    <p className="mb-4">Subscribe to our newsletter to get updates on our latest offers!</p>
                    <input type="text" placeholder="Enter email address here" className="mb-4 input"></input>
                    <button className="d-flex justify-content-center align-items-center py-2 MailingButton">
                        <p className="mb-0">Subscribe</p>
                    </button>
                </div>
                
            </div>
        </div>
      </>
    )
  }
}
