import { Container, MainContainer } from "./Styled"
import { TwitsList } from "../../Components/TwitsList/Index"
import { useSelector } from "react-redux"
import { Navbar } from "../../Components/Navbar/Index"
import { motion } from "framer-motion"
import { Topbar } from "../../Components/Topbar/Index"
import { useEffect, useRef, useState } from "react"

export const Home = () => {
  const twits = useSelector((state) => state.twit)

  const [height, setHeight] = useState("")

  const navRef = useRef()

  useEffect(() => {
    setHeight(navRef.current.clientHeight)
  }, [])

  return (
    <>
      <MainContainer as={motion.div}>
        <Topbar />
        <Container height={height}>
          <TwitsList twits={twits} />
        </Container>
        <Navbar ref={navRef} />
      </MainContainer>
    </>
  )
}
