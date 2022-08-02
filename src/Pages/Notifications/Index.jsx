import React, { useEffect, useRef, useState } from "react"
import { Navbar } from "../../Components/Navbar/Index"
import { Container } from "./Styled"

export const Notifications = () => {
  const [height, setHeight] = useState("")
  const navRef = useRef()

  useEffect(() => {
    setHeight(navRef.current.clientHeight)
  }, [])

  return (
    <>
      <Navbar ref={navRef} />

      <Container height={height}></Container>
    </>
  )
}
