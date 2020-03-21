import React from 'react';
import DefaultExtended from './DefaultExtended.jsx'

export default class Default extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      averageRating: null,
      extended: false
    }
    this.onClickHandler = this.onClickHandler.bind(this)
    this.getAverageRating = this.getAverageRating.bind(this)
  }

  onClickHandler() {
    this.setState({
      extended: !this.state.extended
    })
  }

  getAverageRating() {
    let totalReviewValue = 0
    for (let i = 0; i < this.props.currentProduct.reviews.length; i++) {
      totalReviewValue += this.props.currentProduct.reviews[i].star
    }
    let avgRate = (totalReviewValue / this.props.currentProduct.reviews.length)
    return avgRate
  }

  render() {
    // if we havent pulled data from our server this will render loading
    if (this.props.isLoading) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      // if data has been pulled, this will render

      // if toggled, show full reviews, else show untoggled reviews
      if (this.state.extended) {
        return (
          <div>

            <div onClick={() => this.onClickHandler()} className="default-extended-main-jr">

              <div className="default-extended-review-count-jr" >
                <span>Reviews ({this.props.currentProduct.reviews.length})</span>
              </div>

              <div className="default-extended-stars-jr" >
                <span>{this.getAverageRating()} (turn into stars)</span>
              </div>

              <div className="default-extended-arrow-jr">
                <i className="fa fa-angle-up"></i>
              </div>

            </div>

            <DefaultExtended aProduct={this.props.currentProduct} averageRating={this.getAverageRating()} />

          </div>
        )
      } else {
        return (
          <div onClick={() => this.onClickHandler()} className="default-main-jr" >

            <div className="default-review-count-jr" >
              <span>Reviews ({this.props.currentProduct.reviews.length})</span>
            </div>

            <div className="default-stars-jr" >
              <span>{this.getAverageRating()} (turn into stars)</span>
            </div>

            <div className="default-arrow-jr" >
              <i className="fa fa-angle-down"></i>
            </div>

          </div>
        )
      }
    }
  }
}





// window.location.href = "http://localhost:1232/test";
// shoeName = window.location.href;

// change it