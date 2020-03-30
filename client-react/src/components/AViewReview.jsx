import React from 'react'
import UpvoteFilled from './Images/UpvoteFilled.png'
import UpvoteUnfilled from './Images/UpvoteUnfilled.png'
import DownvoteFilled from './Images/DownvoteFilled.png'
import DownvoteUnfilled from './Images/DownvoteUnfilled.png'
import Flag from './Images/Flag.png'
import axios from 'axios'
import AverageStar from './AverageStars.jsx'
import Bar from './Bar.jsx'


export default class AViewReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vote: null,
      upvote: UpvoteUnfilled,
      downvote: DownvoteUnfilled,
      flag: true,
      upvoteCount: null,
      downvoteCount: null
    }
  }

  howFar() {
    if (this.props.aReviewData.avgRunDistance) {
      return (
        <span className="a-view-review-subtext-jr" id="a-view-after-jr">I run: {this.props.aReviewData.avgRunDistance}</span>
      )
    }
  }

  terrainType() {
    if (this.props.aReviewData.terrain) {
      return (
        <span className="a-view-review-subtext-jr" >I run on: {this.props.aReviewData.terrain}</span>
      )
    }
  }

  // onHover: sets the image to be filled if it isnt filled already
  renderUpvoteHover() {
    if (this.state.vote !== true) {
      this.setState({
        upvote: UpvoteFilled
      })
    }
  }
  // onUnhover: sets the image to be unfilled if it isnt marked as an upvote
  renderUpvoteUnHover() {
    if (this.state.vote !== true) {
      this.setState({
        upvote: UpvoteUnfilled
      })
    }
  }

  // onHover: sets the image to be filled if it isnt filled already
  renderDownvoteHover() {
    if (this.state.vote !== false) {
      this.setState({
        downvote: DownvoteFilled
      })
    }
  }

  // onUnhover: sets the image to be unfilled if it isnt marked as a downvote
  renderDownvoteUnHover() {
    if (this.state.vote !== false) {
      this.setState({
        downvote: DownvoteUnfilled
      })
    }
  }

  // sets vote state to true if null or false, sets to null if true when clicked
  // also determines which image should render
  upVoteHandler() {
    let upvoteValue;
    let downvoteValue;

    if (this.state.vote === false) {
      this.setState({
        vote: true,
        upvote: UpvoteFilled,
        downvote: DownvoteUnfilled,
        upvoteCount: this.props.aReviewData.upvotes + 1,
        downvoteCount: this.downvoteCount - 1
      })
      upvoteValue = this.props.aReviewData.upvotes + 1
      downvoteValue = this.props.aReviewData.downvotes

    } else if (this.state.vote === null) {
      this.setState({
        vote: true,
        upvote: UpvoteFilled,
        downvote: DownvoteUnfilled,
        upvoteCount: this.props.aReviewData.upvotes + 1
      })
      upvoteValue = this.props.aReviewData.upvotes + 1
      downvoteValue = this.props.aReviewData.downvotes

    } else {
      this.setState({
        vote: null,
        upvote: UpvoteUnfilled,
        upvoteCount: this.state.upvoteCount - 1
      })
      upvoteValue = this.props.aReviewData.upvotes
      downvoteValue = this.props.aReviewData.downvotes

    }

    axios.put('/api/products/reviews', {
      parentId: `${this.props.parentId}`,
      childId: `${this.props.aReviewData._id}`,
      upvoteValue: upvoteValue,
      downvoteValue: downvoteValue
    })
      .then((response) => {
        // console.log(response)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  downVoteHandler() {
    let upvoteValue;
    let downvoteValue;

    if (this.state.vote === true) {
      this.setState({
        vote: false,
        downvote: DownvoteFilled,
        upvote: UpvoteUnfilled,
        downvoteCount: this.props.aReviewData.downvotes + 1,
        upvoteCount: this.upvoteCount - 1
      })
      upvoteValue = this.props.aReviewData.upvotes
      downvoteValue = this.props.aReviewData.downvotes + 1

    } else if (this.state.vote === null) {
      this.setState({
        vote: false,
        downvote: DownvoteFilled,
        upvote: UpvoteUnfilled,
        downvoteCount: this.props.aReviewData.downvotes + 1
      })
      upvoteValue = this.props.aReviewData.upvotes
      downvoteValue = this.props.aReviewData.downvotes + 1

    } else {
      this.setState({
        vote: null,
        downvote: DownvoteUnfilled,
        downvoteCount: this.state.downvoteCount - 1
      })
      upvoteValue = this.props.aReviewData.upvotes
      downvoteValue = this.props.aReviewData.downvotes

    }

    axios.put('/api/products/reviews', {
      parentId: `${this.props.parentId}`,
      childId: `${this.props.aReviewData._id}`,
      upvoteValue: upvoteValue,
      downvoteValue: downvoteValue
    })
      .then((response) => {
        // console.log(response)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  flagHandler() {
    this.setState({
      flag: false
    })
    axios.put('/api/products/reviews/flag', {
      parentId: `${this.props.parentId}`,
      childId: `${this.props.aReviewData._id}`,
      flagValue: this.props.aReviewData.flagged + 1
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  upvoteCounter() {
    // returns vote prop data depending if its the first render and sets state
    if (this.state.upvoteCount) {
      return this.state.upvoteCount
    } else {
      return this.props.aReviewData.upvotes
    }
  }

  downvoteCounter() {
    // returns vote prop data depending if its the first render and sets state
    if (this.state.downvoteCount) {
      return this.state.downvoteCount
    } else {
      return this.props.aReviewData.downvotes
    }
  }

  render() {
    let data = this.props.aReviewData
    return (

      <div className="a-view-review-main-jr">
        <div className="a-view-stars-and-feels-jr">
          <div className="a-view-stars-jr">
            <AverageStar averageRating={this.props.aReviewData.star} />
          </div>

          <div className="a-view-container-jr" id="a-view-size-no-top-jr">
            <Bar title="Size" value={data.size} leftBound="Runs Small" rightBound="Runs Big" />
          </div>

          <div className="a-view-container-jr" >
            <Bar title="Comfort" value={data.comfort} leftBound="Uncomfortable" rightBound="Very Comfortable" />
          </div>

          <div className="a-view-container-jr" >
            <Bar title="Durability" value={data.durability} leftBound="Not Durable" rightBound="Very Durable" />
          </div>

        </div>

        <div>
          <div className="view-header-jr" >{data.header}</div>
          <div className="view-comment-jr" >{data.comment}</div>
          <div className="a-view-image-container-jr">{data.image ? <img className="a-view-image-jr" src={data.image}></img> : null}</div>
          <div className="a-view-review-subtext-container-jr">
            <span className="a-view-review-subtext-jr" id="a-view-after-jr" >{data.dateWritten}</span>
            <span className="view-username-jr" id="a-view-after-jr" > {data.username}</span>
            <span className="a-view-review-subtext-jr" >{data.location}</span>
          </div>

          {this.props.aReviewData.verified ?
            <div className="verified-user-review-jr">
              Verified Purchaser
            </div>
            :
            <div className="smoosh-to-nothing-jr"></div>
          }


          <div>
            {this.howFar()}
            {this.terrainType()}
          </div>

          <div className="a-view-review-toggle-containers-jr" >
            <span>
              <div className="up-vote-div-jr">
                <img
                  className="up-vote-img-jr"
                  onClick={() => this.upVoteHandler()}
                  onMouseOver={() => this.renderUpvoteHover()}
                  onMouseLeave={() => this.renderUpvoteUnHover()}
                  src={this.state.upvote}
                ></img>
              </div>
              <span className="a-view-rightpadding-jr">{this.upvoteCounter()}</span>
            </span>

            <span>
              <div className="down-vote-div-jr" >
                <img
                  className="down-vote-img-jr"
                  onClick={() => this.downVoteHandler()}
                  onMouseOver={() => this.renderDownvoteHover()}
                  onMouseLeave={() => this.renderDownvoteUnHover()}
                  src={this.state.downvote}
                ></img>
              </div>
              <span className="a-view-rightpadding-jr">{this.downvoteCounter()}</span>
            </span>

            <span className="a-view-flag-or-text-jr"
              onClick={() => this.flagHandler()}>
              {this.state.flag ? <div className="view-flag-container-jr" ><img className="view-flag-jr" src={Flag} ></img></div> : 'This post has been flagged. Thank you.'}
            </span>
          </div>
        </div>
      </div >
    )
  }
}



// increment upvote up
// increment upvote down
// increment downvote up
// increment downvote down

// increment flag up

// sort data array