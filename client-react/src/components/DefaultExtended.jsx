import React from 'react'
import ReviewPreview from './DefaultExtReviews.jsx'

export default class DefaultExtended extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    let arraySlice = this.props.aProduct.reviews.slice(0, 3);

    return (
      <div className="default-extended-sub-jr">

        <div className="default-extended-sub-stars-jr" >{this.props.averageRating}(turn into stars) {this.props.averageRating} Stars
        </div>

        <div className="default-extended-sub-write-review-jr" >Write a Review</div>

        <div>
          {arraySlice.map((aReview) =>
            (<ReviewPreview aReview={aReview} key={aReview._id} />)
          )}
        </div>

        <div className="default-extended-sub-more-reviews-jr" >
          More Reviews
        </div>

      </div>
    )
  }
}

// write a review will need an onclick that pops up two modals
// more reviews will need an onclick to pop up one modal