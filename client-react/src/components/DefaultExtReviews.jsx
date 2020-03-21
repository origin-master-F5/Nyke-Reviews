import React from 'react'

export default class ReviewPreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log()
    let data = this.props.aReview
    return (
      <div className="default-extended-preview-main" >

        <div className="default-extended-preview-header" >
          {data.header}
        </div>

        <div className="default-extended-preview-stars" >
          {data.star} (turn into stars)
        </div>

        <div className="default-extended-preview-username" >
          {data.username}
        </div>
        -
        <div className="default-extended-preview-dateWritten" >
          {data.dateWritten}
        </div>

        <div className="default-extended-preview-comment" >
          {data.comment}
        </div>

        <br />

      </div>
    )
  }
}