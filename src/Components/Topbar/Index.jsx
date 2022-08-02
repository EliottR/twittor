import React, { useRef } from "react"
import { Container, UserContainer, LogoContainer } from "./Styled"
import logo from "../../Assets/twittor.svg"
import { BsStars } from "react-icons/bs"
import { useSelector } from "react-redux"
import { useState } from "react"

export const Topbar = () => {
  const ref = useRef()

  const user = useSelector((state) => state.user)

  const [state, setstate] = useState(false)

  const scrollTop = () => {
    ref.current.nextSibling.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleClick = () => {
    setstate(!state)
  }

  return (
    <>
      <Container ref={ref}>
        <UserContainer src={user[0].img} alt="imgUser" onClick={handleClick} />
        <LogoContainer onClick={scrollTop} src={logo} alt="logo twittor" />
        <BsStars fontSize={"large"} />
      </Container>
    </>
  )
}
