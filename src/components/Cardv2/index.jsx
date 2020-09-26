import React from "react"
import * as Styled from "./styled"
import Images from "../Images"

const Cardv2 = props => {
  return (
    <Styled.CardV2Wrapper
      className="card"
      background={props.backgroundCard}
      primary={props.styleDefault}
    >
      <Images name={props.nameImage} />
      <div className="card-body">
        <h5 className="card-title">{props.titleCard}</h5>
        <p className="card-text">{props.textCard}</p>
      </div>
    </Styled.CardV2Wrapper>
  )
}

export default Cardv2
