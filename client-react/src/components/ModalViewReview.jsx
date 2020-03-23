import React from 'react';
import exit from './Images/Exit.png'
import AViewReview from './AViewReview.jsx'

export default class ModalView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibleReviewsCount: 10,
      reviewsRendering: [],
      allLoaded: false
      // sortedReviews: []
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

  // function to sort by highest rating
  // lowest rating
  // most helpful (upvotes)
  // dateWritten (most recent)

  // increments the state of visibleReviewCount by 10 when load more is clicked
  loadMoreHandler() {
    this.setState({
      visibleReviewsCount: this.state.visibleReviewsCount + 10
    })
    this.reviewsToBeRendered()
  }

  // takes props and places reviews into an array in state. number determined by visibleReviewsCount state
  reviewsToBeRendered() {
    let arrayOfReviews = []
    for (let i = 0; i < this.state.visibleReviewsCount; i++) {
      if (this.props.currentProduct.reviews[i]) {
        arrayOfReviews.push(this.props.currentProduct.reviews[i])
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
    this.loadMoreHandler()
  }


  render() {
    let reviewsData = this.props.currentProduct.reviews

    return (
      <div className="modal-view-jr">
        <div className="modal-view-exit-container-jr">
          <img className="modal-view-exit-jr" src={exit} onClick={() => this.props.modalViewHandler()}></img>
        </div>

        <div className="modal-view-stars-jr" >
          <span>{this.props.getAverageRating()} (turn into stars)</span>
        </div>

        <div className="modal-view-count-jr" >
          <span>{this.props.currentProduct.reviews.length} Reviews</span>
        </div>

        <br />

        {/* AVG SIZE COMPONENT */}
        <div className="modal-view-size-main-jr">
          <div>
            Size
          </div>
          <div className="modal-view-size-avg-jr">
            {this.getAverageSize()}(turn to bar)
          </div>
          <div>
            Runs Small
          </div>
          <div>
            Runs Big
          </div>
        </div>

        {/* AVG COMFORT COMPONENT */}
        <div className="modal-view-comfort-main-jr">
          <div>
            Comfort
          </div>
          <div className="modal-view-comfort-avg-jr">
            {this.getAverageComfort()}(turn to bar)
          </div>
          <div>
            Uncomfortable
          </div>
          <div>
            Very Comfortable
          </div>
        </div>

        {/* AVG DURABILITY COMPONENT */}
        <div className="modal-view-durability-main-jr">
          <div>
            Durability
          </div>
          <div className="modal-view-durability-avg-jr">
            {this.getAverageDurability()}(turn to bar)
          </div>
          <div>
            Not Durable
          </div>
          <div>
            Very Durable
          </div>
        </div>

        {/* // chooses how to render array
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form> */}

        {this.state.reviewsRendering.map((aReview) => <AViewReview aReviewData={aReview} key={aReview._id} />)}
        {/*
        // sort by */}


        <div className="view-load-more-jr" onClick={() => this.loadMoreHandler()}>{this.state.allLoaded ? '' : 'Load More'}</div>

      </div>
    )
  }
}

// getAverageRating = { this.getAverageRating }
