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
      showModalWrite: false
    };

    this.getAll = this.getAll.bind(this)
    // this.whichModal = this.whichModal.bind(this);
    this.modalViewHandler = this.modalViewHandler.bind(this)
    this.modalWriteHandler = this.modalWriteHandler.bind(this)
    this.getAverageRating = this.getAverageRating.bind(this)
  }

  getAll() {
    axios.get('/api/products/reviews')
      .then((response) => {
        this.setState({
          loading: false,
          currentProduct: response.data[0]
        })
        console.log('change me to a get by name', response.data[0])
      })
      .catch((error) => {
        console.log(error);
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
          />
          <ModalWrite
            modalWriteHandler={this.modalWriteHandler}
            currentProduct={this.state.currentProduct}
          />
        </div>
      )
    } else if (this.state.showModalView) {
      return (
        <ModalView
          modalViewHandler={this.modalViewHandler}
          currentProduct={this.state.currentProduct}
          getAverageRating={this.getAverageRating}
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
    return avgRate
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

  componentDidMount() {
    this.getAll()
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

// disregard....

// renderView() {
//   // if (this.state.view === 'default') {
//   //   return <Default changeView={this.changeView} isLoading={this.state.loading} currentProduct={this.state.currentProduct} />
//   //   // } else if (this.state.view === 'create') {
//   //   //   return <Create viewPost={this.changeView} />
//   //   // } else {
//   //   //   return <Post postId={this.state.view} />
//   //   // }
//   // }
// }

  // <span className={this.state.view === 'default'
  // ? 'review-unselected'
  // : 'review-selected'}
  // onClick={() => {
  //   this.setState({ loading: true })
  //   this.getAll()
  //   this.changeView('posts')
  // }}>



  // {/* <div className="main">
//   {this.renderView()}
// </div> */}

// {/* <div className="">

//   <span className={this.state.view === 'create'
//     ? 'nav-selected'
//     : 'nav-unselected'}
//     onClick={() => this.changeView('create')}>
//     Write a Post
//           </span>
// </div> */}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// class ButtonParent extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       condition: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState({
//       condition: !this.state.condition
//     })
//   }
//   render() {
//     return (
//       <ButtonChild
//         className={this.state.condition ? "button toggled" : "button"}
//         toggleClassName={this.handleClick}
//       >
//         Toggle me!
//       </ ButtonChild>
//     )
//   }
// }

// class ButtonChild extends React.Component {
//   render() {
//     return (
//       <div
//         className={this.props.className}
//         onClick={this.props.toggleClassName}
//       >
//         {this.props.children}
//       </ div>
//     )
//   }
// }


