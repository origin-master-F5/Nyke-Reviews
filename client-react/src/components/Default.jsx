import React from 'react';
import DefaultExtended from './DefaultExtended.jsx'
import downArrow from './Images/DownArrow.png'
import AverageStar from './AverageStars.jsx'



export default class Default extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      averageRating: null,
      extended: false
    }
    this.onClickHandler = this.onClickHandler.bind(this)
    // this.getAverageRating = this.getAverageRating.bind(this)
  }

  onClickHandler() {
    this.setState({
      extended: !this.state.extended
    })
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
      return (
        <div>
          <div
            onClick={() => this.onClickHandler()} className="default-main-jr">
            <div className="default-review-count-jr" >
              <span>Reviews ({this.props.currentProduct.reviews.length})</span>
            </div>

            <div>
              <span> <AverageStar averageRating={this.props.getAverageRating()} /></span>

            </div>

            <div className="default-arrow-container-jr" >
              {this.state.extended ? <img className="default-arrow-jr" src={downArrow} style={{ transform: "rotate(180deg)" }}></img> : <img className="default-arrow-jr" src={downArrow}></img>}
            </div>
          </div>

          {this.state.extended ? <DefaultExtended
            aProduct={this.props.currentProduct}
            averageRating={this.props.getAverageRating()}
            modalViewHandler={this.props.modalViewHandler}
            modalWriteHandler={this.props.modalWriteHandler}
            averageRating={this.props.getAverageRating()}
          /> : null}

        </div>
      )
    }
  }
}





// window.location.href = "http://localhost:1232/test";
// shoeName = window.location.href;

// change it