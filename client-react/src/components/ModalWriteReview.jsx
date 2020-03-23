import React from "react";
import exit from './Images/Exit.png'

export default class ModalWrite extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div className="modal-write-jr">
        <div className="modal-write-exit-container-jr">
          <img className="modal-write-exit-jr" src={exit} onClick={() => this.props.modalWriteHandler()}></img>
        </div>


        Write Modal


      </div>
    )
  }
}