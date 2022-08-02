import { Container, MainContainer } from "./Styled"
import { TwitsList } from "../../Components/TwitsList/Index"
import { useSelector } from "react-redux"
import { Navbar } from "../../Components/Navbar/Index"
import { motion, useMotionValue, useVelocity } from "framer-motion"
import { Leftbar } from "../../Components/Leftbar/Index"
import { Topbar } from "../../Components/Topbar/Index"
import { useEffect, useRef, useState } from "react"
import { createRef } from "react"

export const Home = () => {
  const twits = useSelector((state) => state.twit)

  const [height, setHeight] = useState("")
  const [width, setWidth] = useState("")
  const [dragAnimate, setDragAnimate] = useState({ x: null })

  const navRef = useRef()
  const leftBarRef = createRef()

  const x = useMotionValue(0)
  const xVelocity = useVelocity(x)

  useEffect(() => {
    setHeight(navRef.current.clientHeight)
    setWidth(leftBarRef.current.clientWidth)
  }, [leftBarRef])

  const dragEnd = (e, i) => {
    switch (true) {
      case xVelocity.current >= 1000 ||
        i.offset.x >= 100 ||
        (i.offset.x > -100 && i.offset.x < 0):
        setDragAnimate({ x: width })
        break

      case xVelocity.current <= -1000 ||
        i.offset.x <= -100 ||
        (i.offset.x < 100 && i.offset.x > 0):
        setDragAnimate({ x: 0 })
        break

      default:
        setDragAnimate({ x: null })
        break
    }

    setTimeout(() => {
      setDragAnimate({ x: null })
    }, 200)
  }

  return (
    <>
      <MainContainer
        as={motion.div}
        drag={"x"}
        dragConstraints={{ left: 0, right: width }}
        dragElastic={false}
        dragMomentum={false}
        onDragEnd={dragEnd}
        style={{ x }}
        animate={dragAnimate}
      >
        <Topbar />
        <Container height={height}>
          <TwitsList twits={twits} />
        </Container>
        <Navbar ref={navRef} />
      </MainContainer>
      <Leftbar ref={leftBarRef} />
    </>
  )
}
