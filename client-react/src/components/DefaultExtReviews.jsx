import React from 'react'

export default class ReviewPreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewingMore: false
    }
    this.handleViewMore = this.handleViewMore.bind(this)
  }

  handleViewMore() {
    this.setState({
      viewingMore: !this.state.viewingMore
    })
  }

  renderComment() {
    if (this.state.viewingMore) {
      return (
        this.props.aReview.comment
      )
    } else {
      let commentPreview = `${this.props.aReview.comment.slice(0, 121)}...`
      return (
        commentPreview
      )
    }
  }

  render() {
    console.log()
    let data = this.props.aReview
    return (
      <div className="default-extended-preview-main-jr" >

        <div className="default-extended-preview-header-jr" >
          {data.header}
        </div>

        <div className="default-extended-preview-stars-jr" >
          {data.star} (turn into stars)
        </div>

        <div className="default-extended-preview-username-jr" >
          {data.username}
        </div>
        -
        <div className="default-extended-preview-dateWritten-jr" >
          {data.dateWritten}
        </div>

        <div className="default-extended-preview-comment-jr" >
          {this.renderComment()}
          <div onClick={() => this.handleViewMore()} className="default-extended-preview-moreOrLess-jr">{(!this.state.viewingMore) ? 'More' : 'Less'}</div>
        </div>

        <br />

      </div>
    )
  }
}

// we want handleViewMore to be able to return partial or all comment body
// on click, handleView more will return either data.comment and Less
// or DefaultComment component from other page which will render partial info