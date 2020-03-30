import React from 'react'
import axios from 'axios'
import Default from './Default.jsx'
import ModalView from './ModalViewReview.jsx'
import ModalWrite from './ModalWriteReview.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'default',
      loading: true,
      currentProduct: {},
      showModalView: false,
      showModalWrite: false,
      closingReview: false,
      productId: false
    };

    this.getOne = this.getOne.bind(this)
    this.modalViewHandler = this.modalViewHandler.bind(this)
    this.modalWriteHandler = this.modalWriteHandler.bind(this)
    this.getAverageRating = this.getAverageRating.bind(this)
    this.closingReviewHandler = this.closingReviewHandler.bind(this)
    this.urlListner = this.urlListner.bind(this)
  }

  getOne(id = 100) {
    axios.get(`/api/products/reviews/${id}`)
      .then((response) => {
        this.setState({
          loading: false,
          currentProduct: response.data[0]
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  closingReviewHandler(bool) {
    this.setState({
      closingReview: bool
    })
  }

  // determines which modals will be rendered based off their state value
  whichModal() {
    if (this.state.showModalView && this.state.showModalWrite) {
      return (
        <div>
          <ModalView
            modalViewHandler={this.modalViewHandler}
            currentProduct={this.state.currentProduct}
            getAverageRating={this.getAverageRating}
            closingReview={this.state.closingReview}
          // className="modal-view-jr"
          />
          <ModalWrite
            modalWriteHandler={this.modalWriteHandler}
            modalViewHandler={this.modalViewHandler}
            currentProduct={this.state.currentProduct}
            obscure={this.state.showModalWrite}
            closingReviewHandler={this.closingReviewHandler}
            getOne={this.getOne}
            updateReviews={this.getOne}
          />
        </div>
      )
    } else if (this.state.showModalView) {
      return (
        <ModalView
          modalViewHandler={this.modalViewHandler}
          currentProduct={this.state.currentProduct}
          getAverageRating={this.getAverageRating}
          closingReview={this.state.closingReview}
          closingReviewHandler={this.closingReviewHandler}
        // className="modal-view-jr"
        />
      )
    } else {
      return null;
    }
  }

  // gets the average rating of all reviews for given product
  getAverageRating() {
    let totalReviewValue = 0
    for (let i = 0; i < this.state.currentProduct.reviews.length; i++) {
      totalReviewValue += this.state.currentProduct.reviews[i].star
    }
    let avgRate = (totalReviewValue / this.state.currentProduct.reviews.length)
    return Math.round((avgRate + Number.EPSILON) * 100) / 100
  }

  // toggles the state of modalView. triggers 1 popup
  modalViewHandler() {
    this.setState({
      showModalView: !this.state.showModalView
    })
  }

  //toggles the state of modalWrite and modalView. This triggers both popups.
  modalWriteHandler() {
    // this conditional allows us to make both modals pop up when we click write review, but only close one on exit press
    if (this.state.showModalWrite) {
      this.setState({
        showModalWrite: !this.state.showModalWrite
      })
    } else {
      this.setState({
        showModalWrite: !this.state.showModalWrite,
        showModalView: !this.state.showModalView
      })
    }
  }


  urlListner() {
    window.addEventListener("hashchange", () => {
      let answer = window.location.hash.split('#')
      this.getOne(Number(answer[1]))
    });
  }

  componentDidMount() {
    this.getOne()
    this.urlListner()
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          Loading...
        </div>
      )
    } else {
      return (
        <div>
          <Default
            currentProduct={this.state.currentProduct}
            isLoading={this.state.loading}
            modalViewHandler={this.modalViewHandler}
            modalWriteHandler={this.modalWriteHandler}
            getAverageRating={this.getAverageRating}
          />
          {this.whichModal()}
        </div >
      )
    }
  }
}

export default App;
