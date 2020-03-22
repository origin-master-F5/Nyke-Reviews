import React from "react";

export default class ModalWrite extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div className="modal-write-jr">
        <div className="modal-write-exit-jr">
          <i className="fa fa-remove" onClick={() => this.props.modalWriteHandler()}></i>
        </div>


        Write Modal


      </div>
    )
  }
}