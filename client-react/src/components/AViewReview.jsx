import React from 'react'
import FullStar from './Images/FullStar.png'
import EmptyStar from './Images/EmptyStar.png'
import UpvoteFilled from './Images/UpvoteFilled.png'
import UpvoteUnfilled from './Images/UpvoteUnfilled.png'
import DownvoteFilled from './Images/DownvoteFilled.png'
import DownvoteUnfilled from './Images/DownvoteUnfilled.png'
import Flag from './Images/Flag.png'


export default class AViewReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vote: null,
      upvote: UpvoteUnfilled,
      downvote: DownvoteUnfilled,
      flag: <div className="view-flag-container-jr" ><img className="view-flag-jr" src={Flag} ></img></div>
    }
  }

  starCounter() {
    let counter = this.props.aReviewData.star
    let star1 = EmptyStar;
    let star2 = EmptyStar;
    let star3 = EmptyStar;
    let star4 = EmptyStar;
    let star5 = EmptyStar;

    for (let i = 1; i <= counter; i++) {
      if (i === 1) {
        star1 = FullStar
      }
      if (i === 2) {
        star2 = FullStar
      }
      if (i === 3) {
        star3 = FullStar
      }
      if (i === 4) {
        star4 = FullStar
      }
      if (i === 5) {
        star5 = FullStar
      }
    }

    return (
      <div className="a-star-div-jr" >
        <div className="all-stars-a-review-jr" > <img className="a-view-star-jr" src={star1} ></img> </div>
        <div className="all-stars-a-review-jr" > <img className="a-view-star-jr" src={star2} ></img> </div>
        <div className="all-stars-a-review-jr" > <img className="a-view-star-jr" src={star3} ></img> </div>
        <div className="all-stars-a-review-jr" > <img className="a-view-star-jr" src={star4} ></img> </div>
        <div className="all-stars-a-review-jr" > <img className="a-view-star-jr" src={star5} ></img> </div>
      </div>
    )
  }

  howFar() {
    if (this.props.aReviewData.avgRunDistance) {
      return (
        <div>I run: {this.props.aReviewData.avgRunDistance}</div>
      )
    }
  }

  terrainType() {
    if (this.props.aReviewData.terrain) {
      return (
        <div>I run on: {this.props.aReviewData.terrain}</div>
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
    if (this.state.vote !== true) {
      this.setState({
        vote: true,
        upvote: UpvoteFilled,
        downvote: DownvoteUnfilled
      })
    } else {
      this.setState({
        vote: null,
        upvote: UpvoteUnfilled
      })
    }
  }

  downVoteHandler() {
    if (this.state.vote !== false) {
      this.setState({
        vote: false,
        downvote: DownvoteFilled,
        upvote: UpvoteUnfilled
      })
    } else {
      this.setState({
        vote: null,
        downvote: DownvoteUnfilled
      })
    }
  }

  flagHandler() {
    this.setState({
      flag: 'This post has been flagged. Thank you.'
    })
  }



  render() {
    let data = this.props.aReviewData
    console.log('props on aViewReview', this.props)
    return (

      <div>
        <div>
          {this.starCounter()}
          {/* // size comfort durability */}
        </div>

        <div className="" >{data.header}</div>
        <div className="" >{data.comment}</div>
        <div className="" >{data.dateWritten} - </div>
        <div className="" >{data.username} - </div>
        <div className="" >{data.location}</div>

        {this.howFar()}
        -
        {this.terrainType()}

        <div>
          <div className="up-vote-div-jr">
            <img
              className="up-vote-img-jr"
              onClick={() => this.upVoteHandler()}
              onMouseOver={() => this.renderUpvoteHover()}
              onMouseLeave={() => this.renderUpvoteUnHover()}
              src={this.state.upvote}
            ></img>
          </div>
          {data.upvotes}
        </div>

        <div>
          <div className="down-vote-div-jr" >
            <img
              className="down-vote-img-jr"
              onClick={() => this.downVoteHandler()}
              onMouseOver={() => this.renderDownvoteHover()}
              onMouseLeave={() => this.renderDownvoteUnHover()}
              src={this.state.downvote}
            ></img>
          </div>
          {data.downvotes}
        </div>

        <div onClick={() => this.flagHandler()}>{this.state.flag}</div>

        <br />


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