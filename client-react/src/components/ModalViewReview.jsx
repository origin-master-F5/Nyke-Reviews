import React from "react";

export default class ModalView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  getAverageSize() {
    let totalSize = 0
    for (let i = 0; i < this.props.currentProduct.reviews.length; i++) {
      totalSize += this.props.currentProduct.reviews[i].size
    }
    let avgSize = (totalSize / this.props.currentProduct.reviews.length)
    return avgSize
  }

  getAverageComfort() {
    let totalComfort = 0
    for (let i = 0; i < this.props.currentProduct.reviews.length; i++) {
      totalComfort += this.props.currentProduct.reviews[i].comfort
    }
    let avgComfort = (totalComfort / this.props.currentProduct.reviews.length)
    return avgComfort
  }

  getAverageDurability() {
    let totalDurability = 0
    for (let i = 0; i < this.props.currentProduct.reviews.length; i++) {
      totalDurability += this.props.currentProduct.reviews[i].durability
    }
    let avgDurability = (totalDurability / this.props.currentProduct.reviews.length)
    return avgDurability
  }



  render() {
    console.log('logging props on modal view', this.props)
    let reviewsData = this.props.currentProduct.reviews
    return (
      <div className="modal-view-jr">
        <div className="modal-view-exit-jr">
          <i className="fa fa-remove" onClick={() => this.props.modalViewHandler()}></i>
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

        {/*


        // sort by


        // star reviews
        // header
        // comment
        // date
        // username
        // verified
        // I run: - I run on:
        // upvotes
        // downvotes
        //flagged */}


        <div>
          Load More
      </div>

      </div>
    )
  }
}

// getAverageRating = { this.getAverageRating }
