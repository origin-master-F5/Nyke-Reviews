import React from 'react';
import moment from 'moment'
import photoFilled from './Images/PhotoFilled.png'
import photoUnfilled from './Images/PhotoUnfilled.png'
import videoFilled from './Images/VideoFilled.png'
import videoUnfilled from './Images/VideoUnfilled.png'
import axios from 'axios'
import faker from 'faker'
import AverageStar from './AverageStars.jsx'
import submitIcon from './Images/SubmitIcon.png'


export default class ModalWrite extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sizeSelectedOption: null,
      comfortSelectedOption: null,
      durabilitySelectedOption: null,
      header: null,
      comment: null,
      username: faker.internet.userName(),
      city: null,
      state: null,
      country: null,
      avgRunDistance: '3 miles or fewer',
      terrain: 'Treadmill / Indoors',
      video: videoUnfilled,
      photo: photoUnfilled,
      stars: '',
      starsSubmitted: '',
      submitted: false
    }
  }

  // onHover: sets the image to be filled if it isnt filled already
  photoHoverHandler() {
    this.setState({
      photo: photoFilled
    })
  }
  // onUnhover: sets the image to be unfilled if it isnt marked as an upvote
  photoUnhoverHandler() {
    this.setState({
      photo: photoUnfilled
    })
  }

  videoHoverHandler() {
    this.setState({
      video: videoFilled
    })
  }
  // onUnhover: sets the image to be unfilled if it isnt marked as an upvote
  videoUnhoverHandler() {
    this.setState({
      video: videoUnfilled
    })
  }

  // stacey
  handleStars(num) {
    this.setState({
      stars: num
    })
  }
  // stacey
  submitStars(num) {
    this.setState({
      starsSubmitted: num
    })
  }

  createReviewHandler() {
    this.setState({
      submitted: true
    })

    let sizeNumber = Number(this.state.sizeSelectedOption)
    let comfortNumber = Number(this.state.comfortSelectedOption)
    let durabilityNumber = Number(this.state.durabilitySelectedOption)
    let currentDate = moment(new Date()).format('LL')
    let location = `${this.state.city}, ${this.state.state}, ${this.state.country}`

    axios.post('/api/products/reviews', {
      parentId: this.props.currentProduct._id,
      aReview: {
        header: this.state.header,
        comment: this.state.comment,
        star: this.state.starsSubmitted,
        size: sizeNumber,
        comfort: comfortNumber,
        durability: durabilityNumber,
        dateWritten: currentDate,
        username: this.state.username,
        location: location,
        avgRunDistance: this.state.avgRunDistance,
        terrain: this.state.terrain,
        image: ''
      }
    })
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateReviewsHandler() {
    let answer = window.location.hash.split('#')
    this.props.updateReviews(Number(answer[1]))
  }

  viewHandlers() {
    this.props.modalViewHandler()
    this.props.modalWriteHandler()
    this.props.closingReviewHandler(false)
    this.updateReviewsHandler()
  }

  writeExitHandler() {
    this.props.closingReviewHandler(true)
    this.props.modalWriteHandler()
    this.updateReviewsHandler()
  }

  render() {
    if (this.state.submitted) {
      return (
        <div className={this.props.obscure ? "modal-view-obscure-jr" : ""}>
          <div className="modal-write-jr">

            <div className="modal-write-exit-container-jr"
              onClick={() => this.writeExitHandler()}>
              <div
                className="modal-write-exit-jr"
              ></div>
            </div>

            <div className="submit-icon-container-jr">
              <img className="submit-icon-jr" src={submitIcon}></img>
            </div>

            <div className="thank-for-review-jr" >THANKS FOR THE REVIEW.</div>
            <div className="good-to-go-jr" >Your review has been successfully submitted</div>
            <button
              onClick={() => this.viewHandlers()}
              className="buy-more-jr" >CONTINUE SHOPPING
            </button>
          </div>
        </div>
      )
    } else {

      return (
        <div className={this.props.obscure ? "modal-view-obscure-jr" : ""}>
          <div className="modal-write-jr">

            <div className="modal-write-exit-container-jr"
              onClick={() => this.writeExitHandler()}>
              <div
                className="modal-write-exit-jr"
              ></div>
            </div>

            <div className="write-header-jr">WRITE A REVIEW</div>
            <div className="write-sub-header-jr">Please share your experience.</div>

            <div className="write-rating-container-jr">
              <div>
                <span>Overall rating:</span>
                <span className="write-red-asterix-jr"> *</span>
              </div>
              <div className='write-stars-container'>
                <div className='write-star-jr' onClick={(() => this.submitStars(1))} onMouseEnter={(() => this.handleStars(1))} onMouseLeave={(() => this.handleStars(0))}>
                  {(this.state.stars || this.state.starsSubmitted) >= 1 ? <div className="star-black-filled-jr"> </div > : <div className="star-grey-filled-jr" />}
                </div>

                <div className='write-star-jr' onClick={(() => this.submitStars(2))} onMouseEnter={(() => this.handleStars(2))} onMouseLeave={(() => this.handleStars(0))}>
                  {(this.state.stars || this.state.starsSubmitted) >= 2 ? <div className="star-black-filled-jr"> </div > : <div className="star-grey-filled-jr" />}
                </div>

                <div className='write-star-jr' onClick={(() => this.submitStars(3))} onMouseEnter={(() => this.handleStars(3))} onMouseLeave={(() => this.handleStars(0))}>
                  {(this.state.stars || this.state.starsSubmitted) >= 3 ? <div className="star-black-filled-jr"> </div > : <div className="star-grey-filled-jr" />}
                </div>

                <div className='write-star-jr' onClick={(() => this.submitStars(4))} onMouseEnter={(() => this.handleStars(4))} onMouseLeave={(() => this.handleStars(0))}>
                  {(this.state.stars || this.state.starsSubmitted) >= 4 ? <div className="star-black-filled-jr"> </div > : <div className="star-grey-filled-jr" />}
                </div>

                <div className='write-star-jr' onClick={(() => this.submitStars(5))} onMouseEnter={(() => this.handleStars(5))} onMouseLeave={(() => this.handleStars(0))}>
                  {(this.state.stars || this.state.starsSubmitted) >= 5 ? <div className="star-black-filled-jr"> </div > : <div className="star-grey-filled-jr" />}
                </div>
              </div>
            </div>

            <div className="radio-form-container-jr">
              <div className="write-form-jr" >
                <div className="write-form-header-jr">Size:</div>
                <form>
                  <div className="radio">
                    <label className="radio-input-jr">
                      <input
                        type="radio"
                        value="0"
                        onChange={(event) => this.setState({
                          sizeSelectedOption: event.target.value
                        })}
                        checked={this.state.sizeSelectedOption === '0'}
                      />
                 Runs Small
                </label>
                  </div>
                  <div className="radio">
                    <label className="radio-input-jr">
                      <input
                        type="radio"
                        value="1"
                        onChange={(event) => this.setState({
                          sizeSelectedOption: event.target.value
                        })}
                        checked={this.state.sizeSelectedOption === '1'}
                      />
                 Just Right
                </label>
                  </div>
                  <div className="radio">
                    <label className="radio-input-jr">
                      <input
                        type="radio"
                        value="2"
                        onChange={(event) => this.setState({
                          sizeSelectedOption: event.target.value
                        })}
                        checked={this.state.sizeSelectedOption === '2'}
                      />
                  Runs Big
                 </label>
                  </div>
                </form>
              </div>

              <div className="write-form-jr" >
                <div className="write-form-header-jr">Comfort:</div>
                <form>
                  <div className="radio">
                    <label className="radio-input-jr">
                      <input
                        type="radio"
                        value="0"
                        onChange={(event) => this.setState({
                          comfortSelectedOption: event.target.value
                        })}
                        checked={this.state.comfortSelectedOption === '0'}
                      />
                  Uncomfortable
                </label>
                  </div>
                  <div className="radio">
                    <label className="radio-input-jr">
                      <input
                        type="radio"
                        value="1"
                        onChange={(event) => this.setState({
                          comfortSelectedOption: event.target.value
                        })}
                        checked={this.state.comfortSelectedOption === '1'}
                      />
                  Average
                </label>
                  </div>
                  <div className="radio">
                    <label className="radio-input-jr">
                      <input
                        type="radio"
                        value="2"
                        onChange={(event) => this.setState({
                          comfortSelectedOption: event.target.value
                        })}
                        checked={this.state.comfortSelectedOption === '2'}
                      />
                  Very Comfortable
               </label>
                  </div>
                </form>
              </div>

              <div className="write-form-jr" >
                <div className="write-form-header-jr">Durability:</div>
                <form>
                  <div className="radio">
                    <label className="radio-input-jr">
                      <input
                        type="radio"
                        value="0"
                        onChange={(event) => this.setState({
                          durabilitySelectedOption: event.target.value
                        })}
                        checked={this.state.durabilitySelectedOption === '0'}
                      />
                 Not Durable
               </label>
                  </div>
                  <div className="radio">
                    <label className="radio-input-jr">
                      <input
                        type="radio"
                        value="1"
                        onChange={(event) => this.setState({
                          durabilitySelectedOption: event.target.value
                        })}
                        checked={this.state.durabilitySelectedOption === '1'}
                      />
                  Average
                </label>
                  </div>
                  <div className="radio">
                    <label className="radio-input-jr">
                      <input
                        type="radio"
                        value="2"
                        onChange={(event) => this.setState({
                          durabilitySelectedOption: event.target.value
                        })}
                        checked={this.state.durabilitySelectedOption === '2'}
                      />
                 Very Durable
               </label>
                  </div>
                </form>
              </div>
            </div>

            <div className="review-title-container-jr" >
              <div>Review Title:</div>
              <form>
                <label>
                  <input
                    className="review-title-textarea-jr"
                    type="text"
                    placeholder="Headline or summary for your review"
                    onChange={(event) => this.setState({
                      header: event.target.value
                    })}
                  />
                </label>
              </form>
            </div>

            <div className="review-body-container-jr">
              <div>
                <span>Review</span>
                <span className="write-red-asterix-jr"> *</span>
              </div>
              <form>
                <label>
                  <textarea
                    className="review-body-textarea-jr"
                    type="textarea"
                    placeholder="Write your review here. It must be at least 5 characters long. Consider whether you would recommend this product and what you like or dislike about it."
                    onChange={(event) => this.setState({
                      comment: event.target.value
                    })}
                  />
                </label>
              </form>
            </div>

            <div className="post-image-container-jr">
              <div>
                <div className="post-image-text-jr" >Attach Media:</div>
                <div className="post-image-subtext-jr" >You can add up to five files.</div>
              </div>

              <div>
                <div
                  className="photo-container-jr" >
                  <img
                    onMouseOver={() => this.photoHoverHandler()}
                    onMouseLeave={() => this.photoUnhoverHandler()}
                    className="photo-jr"
                    src={this.state.photo}
                  ></img>
                </div>

                <div
                  className="video-container-jr" >
                  <img
                    onMouseOver={() => this.videoHoverHandler()}
                    onMouseLeave={() => this.videoUnhoverHandler()}
                    className="video-jr"
                    src={this.state.video}
                  ></img>
                </div>

              </div>
            </div>

            <div className="input-container-jr">
              <div>Country/Region:</div>
              <form>
                <label>
                  <input
                    className="input-area-jr"
                    type="text"
                    placeholder="Enter your country or region"
                    onChange={(event) => this.setState({
                      country: event.target.value
                    })}
                  />
                </label>
              </form>
            </div>

            <div className="input-container-jr">
              <div>City:</div>
              <form>
                <label>
                  <input
                    className="input-area-jr"
                    type="text"
                    placeholder="Enter your city"
                    onChange={(event) => this.setState({
                      city: event.target.value
                    })}
                  />
                </label>
              </form>
            </div>

            <div className="input-container-jr">
              <div>State:</div>
              <form>
                <label>
                  <input
                    className="input-area-jr"
                    type="text"
                    placeholder="Enter your state"
                    onChange={(event) => this.setState({
                      state: event.target.value
                    })}
                  />
                </label>
              </form>
            </div>

            <div className="input-container-jr" >
              <div>I run:</div>
              <form >
                <label>
                  <select
                    className="input-dropdown-jr"
                    value={this.state.avgRunDistance}
                    onChange={(event) => this.setState({
                      avgRunDistance: event.target.value
                    })}>
                    <option value="3 miles or fewer">3 miles or fewer</option>
                    <option value="3 - 10 miles">3 - 10 miles</option>
                    <option value="More than 10 miles">More than 10 miles</option>
                  </select>
                </label>
              </form>
            </div>

            <div className="input-container-jr">
              <div>I run on:</div>
              <form >
                <label>
                  <select
                    className="input-dropdown-jr"
                    value={this.state.terrain}
                    onChange={(event) => this.setState({
                      terrain: event.target.value
                    })}>
                    <option value="Treadmill / Indoors">Treadmill / Indoors</option>
                    <option value="Road">Road</option>
                    <option value="Track">Track</option>
                  </select>
                </label>
              </form>
            </div>

            <div className="agree-to-terms-jr" >
              By clicking Submit, I agree to <a href="https://agreementservice.svs.nike.com/rest/agreement/privacyPolicy/en/US/com.nike.commerce.nikedotcom.web/redirect/false" target="_blank" >
                <u>Privacy Policy</u>
              </a>, <a href="https://agreementservice.svs.nike.com/rest/agreement/termsOfUse/en/US/com.nike.commerce.nikedotcom.web/redirect/false" target="_blank" >
                <u>Terms of Use</u>
              </a>, and <a href="https://www.turntonetworks.com/privacy/" target="_blank">
                <u>Terms of Service</u>
              </a>.
             </div>
            <button className="form-submit-jr" onClick={() => this.createReviewHandler()}>Submit</button>
          </div >
        </div>
      )
    }
  }
}
