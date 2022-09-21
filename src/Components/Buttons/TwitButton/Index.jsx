import React from "react"
import { BsPencilSquare } from "react-icons/bs"
import { useModal } from "../../Hooks/Modal/Index"
import { NewTwit } from "../../NewTwit/Index"
import { Container } from "./Styled"

export const TwitButton = () => {
  console.log("TwitButton")
  const { isShowing, toggle } = useModal()
  return isShowing ? (
    <NewTwit onClickAbort={() => toggle()} />
  ) : (
    <Container onClick={() => toggle()}>
      <BsPencilSquare size={"1.25rem"} />
    </Container>
  )
}
