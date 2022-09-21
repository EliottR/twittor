import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { ButtonContainer } from "./Styled"

export const ScrollButton = ({ word, path }) => {
  const [isActive, setIsActive] = useState(false)
  const location = useLocation()

  useEffect(() => {
    path === location.pathname ? setIsActive(true) : setIsActive(false)
  }, [location.pathname, path])

  return (
    <ButtonContainer to={path} state={isActive ? 1 : 0}>
      {word}
    </ButtonContainer>
  )
}
