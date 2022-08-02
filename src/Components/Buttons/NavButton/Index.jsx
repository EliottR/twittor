import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { StyledLink } from "./Styled"

export const NavButton = (props) => {
  const [state, setstate] = useState(false)
  const location = useLocation()

  useEffect(() => {
    props.path === location.pathname ? setstate(true) : setstate(false)
  }, [location.pathname, props.path])

  return (
    <StyledLink to={props.path}>
      {state ? props.iconActive : props.icon}
    </StyledLink>
  )
}
