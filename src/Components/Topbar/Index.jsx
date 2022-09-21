import { useEffect, useRef, useState } from "react"
import { Container, UserContainer, LogoContainer } from "./Styled"
import logo from "../../Assets/twittor.svg"
import { BsStars } from "react-icons/bs"
import { useModal } from "../Hooks/Modal/Index"
import { Leftbar } from "../Leftbar/Index"
import { getDownloadURL, getStorage, ref } from "firebase/storage"
import { UserAuth } from "../../Contexts/AuthContext"

export const Topbar = () => {
  console.log("Topbar")
  const firstRef = useRef()
  const { isShowing, toggle } = useModal()
  const dbStorage = getStorage()
  const [isLoading, setLoading] = useState(true)

  const scrollTop = () => {
    firstRef.current.nextSibling.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleClick = () => {
    toggle()
  }

  const [pp, setPp] = useState("")
  const { user } = UserAuth()

  useEffect(() => {
    const imgRef = ref(dbStorage, `profilePictures/${user.uid}`)
    getDownloadURL(imgRef)
      .then((url) => {
        setPp(url)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [dbStorage, user.uid])

  return isLoading ? (
    <></>
  ) : (
    <>
      <Container ref={firstRef}>
        <UserContainer src={pp} alt="imgUser" onClick={handleClick} />
        <LogoContainer onClick={scrollTop} src={logo} alt="logo twittor" />
        <BsStars fontSize={"large"} />
      </Container>
      <Leftbar isShowing={isShowing} onClick={handleClick} />
    </>
  )
}
