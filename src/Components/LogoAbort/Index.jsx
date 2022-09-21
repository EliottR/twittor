import React from "react"
import { Abort, Logo, TopContainer } from "./Styled"
import logo from "../../Assets/twittor.svg"

export const LogoAbort = ({ onClick, text }) => {
  return (
    <TopContainer>
      <Logo src={logo} alt="logo twittor" />
      <Abort onClick={onClick}>{text}</Abort>
    </TopContainer>
  )
}
