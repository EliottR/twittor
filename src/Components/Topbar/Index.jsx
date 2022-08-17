import React, { useRef } from "react"
import { Container, UserContainer, LogoContainer } from "./Styled"
import logo from "../../Assets/twittor.svg"
import { BsStars } from "react-icons/bs"
import { useSelector } from "react-redux"
import { useModal } from "../Hooks/Modal/Index"
import { Leftbar } from "../Leftbar/Index"

export const Topbar = () => {
  const ref = useRef()

  const user = useSelector((state) => state.user)
  const { isShowing, toggle } = useModal()

  const scrollTop = () => {
    ref.current.nextSibling.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleClick = () => {
    toggle()
    console.log("oui")
  }

  return (
    <>
      <Container ref={ref}>
        <UserContainer src={user[0].img} alt="imgUser" onClick={handleClick} />
        <LogoContainer onClick={scrollTop} src={logo} alt="logo twittor" />
        <BsStars fontSize={"large"} />
      </Container>
      <Leftbar isShowing={isShowing} onClick={handleClick} />
    </>
  )
}
