import React from "react";
import exit from './Images/Exit.png'

export default class ModalWrite extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeSelectedOption: null,
      comfortSelectedOption: null,
      durabilitySelectedOption: null
    }
  }

  sizeSelectHandler(event) {
    this.setState({
      sizeSelectedOption: event.target.value
    })
  }

  comfortSelectHandler(event) {
    this.setState({
      comfortSelectedOption: event.target.value
    })
  }

  durabilitySelectHandler(event) {
    this.setState({
      durabilitySelectedOption: event.target.value
    })
  }

  render() {

    return (
      <div className="modal-write-jr">
        <div className="modal-write-exit-container-jr">
          <img className="modal-write-exit-jr" src={exit} onClick={() => this.props.modalWriteHandler()}></img>
        </div>

        <div className="write-header-jr">WRITE A REVIEW</div>
        <div className="write-sub-header-jr">Please share your experience.</div>

        <div className="write-rating-container-jr">
          <span className="write-rating-sub-header-jr" >Overall rating:</span>
          <span className="write-red-asterix-jr">*</span>
          <div>Insert star clicker here</div>
        </div>

        <div className="write-size-form-jr" >
          <div className="write-size-form-header-jr">Size:</div>
          <form>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="0"
                  onChange={(e) => this.sizeSelectHandler(e)}
                  checked={this.state.sizeSelectedOption === '0'}
                />
        Runs Small
      </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="1"
                  onChange={(e) => this.sizeSelectHandler(e)}
                  checked={this.state.sizeSelectedOption === '1'}
                />
        Just Right
      </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="2"
                  onChange={(e) => this.sizeSelectHandler(e)}
                  checked={this.state.sizeSelectedOption === '2'}
                />
        Runs Big
      </label>
            </div>
          </form>
        </div>

        <div className="write-comfort-form-jr" >
          <div className="write-comfort-form-header-jr">Comfort:</div>
          <form>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="0"
                  onChange={(e) => this.comfortSelectHandler(e)}
                  checked={this.state.comfortSelectedOption === '0'}
                />
        Uncomfortable
      </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="1"
                  onChange={(e) => this.comfortSelectHandler(e)}
                  checked={this.state.comfortSelectedOption === '1'}
                />
        Average
      </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="2"
                  onChange={(e) => this.comfortSelectHandler(e)}
                  checked={this.state.comfortSelectedOption === '2'}
                />
        Very Comfortable
      </label>
            </div>
          </form>
        </div>

        <div className="write-durability-form-jr" >
          <div className="write-durability-form-header-jr">Durability:</div>
          <form>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="0"
                  onChange={(e) => this.durabilitySelectHandler(e)}
                  checked={this.state.durabilitySelectedOption === '0'}
                />
        Not Durable
      </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="1"
                  onChange={(e) => this.durabilitySelectHandler(e)}
                  checked={this.state.durabilitySelectedOption === '1'}
                />
        Average
      </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="2"
                  onChange={(e) => this.durabilitySelectHandler(e)}
                  checked={this.state.durabilitySelectedOption === '2'}
                />
        Very Durable
      </label>
            </div>
          </form>
        </div>

        <div>Review Title:</div>

        <div>Review:</div>

        <div>Attach Media</div>
        <div>You can add up to five files.</div>

        <div>Country/Region</div>
        <div>City</div>
        <div>State:</div>
        <div>I run:</div>
        <div>I run on:</div>
        <div>By clicking Submit, I agree to Privacy Policy, Terms of Use, and Terms of Service.</div>
        <button>Submit</button>


      </div>
    )
  }
}

// needs submit button