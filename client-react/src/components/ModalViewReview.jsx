import React from 'react';
import AViewReview from './AViewReview.jsx'
import AverageStar from './AverageStars.jsx'
import Bar from './Bar.jsx'


export default class ModalView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleReviewsCount: 10,
      reviewsRendering: [],
      allLoaded: false,
      sortBy: 'newest',
    }

  }

  getAverageSize() {
    let totalSize = 0
    for (let i = 0; i < this.props.currentProduct.reviews.length; i++) {
      totalSize += this.props.currentProduct.reviews[i].size
    }
    let avgSize = (totalSize / this.props.currentProduct.reviews.length)
    return Math.round((avgSize + Number.EPSILON) * 100) / 100
  }

  getAverageComfort() {
    let totalComfort = 0
    for (let i = 0; i < this.props.currentProduct.reviews.length; i++) {
      totalComfort += this.props.currentProduct.reviews[i].comfort
    }
    let avgComfort = (totalComfort / this.props.currentProduct.reviews.length)
    return Math.round((avgComfort + Number.EPSILON) * 100) / 100
  }

  getAverageDurability() {
    let totalDurability = 0
    for (let i = 0; i < this.props.currentProduct.reviews.length; i++) {
      totalDurability += this.props.currentProduct.reviews[i].durability
    }
    let avgDurability = (totalDurability / this.props.currentProduct.reviews.length)
    return Math.round((avgDurability + Number.EPSILON) * 100) / 100
  }

  // increments the state of visibleReviewCount by 10 when load more is clicked
  loadMoreHandler() {
    let renderThisMany = this.state.visibleReviewsCount + 10
    this.setState({
      visibleReviewsCount: renderThisMany
    })
    this.reviewsToBeRendered(this.state.sortBy, renderThisMany)
  }

  // takes props and places reviews into an array in state. number determined by visibleReviewsCount state
  // also sorts by value passed in or current value of state
  reviewsToBeRendered(view = this.state.sortBy, renderThisMany = 10) {
    // set sortBy state for loadmore handler to use
    this.setState({
      sortBy: view
    })

    let unsortedArray = this.props.currentProduct.reviews
    let sortedArray = []

    // sort arrays
    // most helpful
    if (view === 'helpful') {
      sortedArray = unsortedArray.sort((a, b) => {
        return b.upvotes - a.upvotes
      })
    }
    // newest
    if (view === 'newest') {
      sortedArray = unsortedArray.sort((a, b) => {
        return new Date(b.dateWritten) - new Date(a.dateWritten)
      })
    }
    // hightest
    if (view === 'highest') {
      sortedArray = unsortedArray.sort((a, b) => {
        return b.star - a.star
      })
    }
    // lowest
    if (view === 'lowest') {
      sortedArray = unsortedArray.sort((a, b) => {
        return a.star - b.star
      })
    }

    let arrayOfReviews = []
    // sets how many review objects of the sorted array should be rendered
    for (let i = 0; i < renderThisMany; i++) {
      if (sortedArray[i]) {
        arrayOfReviews.push(sortedArray[i])
      } else {
        this.setState({
          allLoaded: true
        })
      }
    }
    this.setState({
      reviewsRendering: arrayOfReviews
    })
  }

  componentDidMount() {
    this.reviewsToBeRendered()
    // this.loadMoreHandler()
  }

  sortHandleChange(e) {
    this.reviewsToBeRendered(e.target.value)
  }

  // this is used to change the closing review state when exiting views. this makes it so pop up animations work properly with create review popup
  exitHandler() {
    this.props.modalViewHandler()
    this.props.closingReviewHandler(false)
  }

  render() {
    return (
      <div className={this.props.closingReview ? "modal-view-jr" : "modal-view-animated-jr"} >

        <div className="modal-view-top-bar-container-jr">
          <div className="product-preview-container-jr" onClick={() => this.exitHandler()} >
            <div className="modal-view-top-image-container-jr" ><img className="top-image-jr" src={this.props.currentProduct.productImage} ></img></div>
            <div>
              <div className="top-bar-name-jr" >{this.props.currentProduct.productName}</div>
              <div className="top-bar-discount-price-jr">${this.props.currentProduct.discountPrice}</div>
              <div className="top-bar-price-jr" >${this.props.currentProduct.price}</div>
            </div>
          </div>

          <div className="make-click-space-bigger-jr"
            onClick={() => this.exitHandler()}>
            <div
              className="modal-view-exit-jr"
            ></div>
          </div>
        </div>

        <div className="modal-view-stars-jr" >
          <AverageStar averageRating={this.props.getAverageRating()} />
        </div>

        <div className="modal-view-count-jr" >
          <span>{this.props.currentProduct.reviews.length} REVIEWS</span>
        </div>

        <div className="modal-view-triple-avg-container-jr">
          <Bar title="Size" value={this.getAverageSize()} leftBound="Runs Small" rightBound="Runs Big" />

          <Bar title="Comfort" value={this.getAverageComfort()} leftBound="Uncomfortable" rightBound="Very Comfortable" />

          <Bar title="Durability" value={this.getAverageDurability()} leftBound="Not Durable" rightBound="Very Durable" />
        </div>

        {/* // chooses how to render array */}
        <div className="modal-view-sorter-jr" >
          <form onSubmit={this.handleSubmit}>
            <label>
              <select className="modal-view-dropdown-jr" value={this.state.sortBy} onChange={(e) => this.sortHandleChange(e)}>
                <option value="helpful">Sort By: Most Helpful</option>
                <option value="newest">Sort By: Newest</option>
                <option value="highest">Sort By: Highest To Lowest</option>
                <option value="lowest">Sort By: Lowest To Highest</option>
              </select>
            </label>
          </form>
        </div>


        {this.state.reviewsRendering.map((aReview) => <AViewReview aReviewData={aReview} parentId={this.props.currentProduct._id} key={aReview._id} />)}



        <div
          className="view-load-more-jr"
          onClick={() => this.loadMoreHandler()}>{this.state.allLoaded ? '' : 'Load More'}
        </div>
      </div >
    )
  }
}

