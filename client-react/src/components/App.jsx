import React from 'react'
import axios from 'axios'
import Default from './Default.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'default',
      loading: true,
      currentProduct: {}
    };

    this.getAll = this.getAll.bind(this)
    this.changeView = this.changeView.bind(this);
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

  changeView(option) {
    this.setState({
      view: option
    });
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
          <Default currentProduct={this.state.currentProduct} isLoading={this.state.loading} />
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


