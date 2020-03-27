import React from 'react'

const AverageStar = (props) => {
  let fullStars = true

  let renderStar = () => {
    let starArray = []
    for (let i = 1; i <= 5; i++) {
      if (fullStars) {
        if (props.averageRating >= i) {
          starArray.push(<div
            className={`star-black-filled-jr`}
            id={props.smallStar ? "smallstar" : null}
            key={i}
          />)
        } else {
          fullStars = false
          let percentage = (1 - (i - props.averageRating)) * 100
          starArray.push(
            <div
              className="partial-star-container-jr"
              key={i}
              style={{
                background: `linear-gradient(90deg, black ${percentage}%, lightGrey ${percentage}%)`,
                clipPath: `polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)`
              }}
              id={props.smallStar ? "smallstar" : null}
            > </div >)
        }
      } else {
        starArray.push(<div
          key={i}
          className="star-grey-filled-jr"
          id={props.smallStar ? "smallstar" : null}
        />)
      }
    }
    return starArray
  }

  return (
    <div>
      {renderStar()}
    </div>
  )
}

export default AverageStar

// className = {`${props.smallStar ? "smallstar-" : ""}star-black-filled-jr`}