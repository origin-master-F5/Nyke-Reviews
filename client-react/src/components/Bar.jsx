import React from 'react'
import styled from "styled-components"

const BarWrapper = styled.div`
.modal-view-avg-jr {
  padding: 10px 0px;
  position: relative;
}
.bar {
  width: 100%;
  position: absolute;
  top: calc(50% - 2px);
  border: solid 2px lightgrey;
  border-radius: 10px;
}
.ball {
  width: 8px;
  height: 8px;
  position: absolute;
  top: calc(50% - 4px);
  left: calc(${props => props.percentage}% - 4px);
  border-radius: 100%;
  background: black;
}
.modal-view-avg-subhead-jr {
  color: #6D6D6D;

  .left-jr {
    float: left;
  }

  .right-jr {
    float: right;
  }
  span {
    font-size: 12px;
  }

}
`;

const Bar = (props) => {
  const percentage = (props.value / 2) * 100;
  return (
    <BarWrapper percentage={percentage}>
      <div>
        {props.title}
      </div>
      <div className="modal-view-avg-jr">
        {/* {this.getAverageSize()}(turn to bar) */}
        <div className="bar"></div>
        <div className="ball"></div>
      </div>
      <div className="modal-view-avg-subhead-jr">
        <span className="left-jr" >{props.leftBound}</span>
        <span className="right-jr" >{props.rightBound}</span>
      </div>
    </BarWrapper>
  )
}

export default Bar;

// { this.getAverageSize() } (turn to bar)