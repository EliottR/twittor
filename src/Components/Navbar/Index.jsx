import React, { forwardRef } from "react"
import { NavButton } from "../Buttons/NavButton/Index"
import { Container } from "./Styled"

import {
  RiHome7Line,
  RiHome7Fill,
  RiSearchLine,
  RiSearchFill,
  RiNotification3Line,
  RiNotification3Fill,
  RiMessage3Line,
  RiMessage3Fill,
} from "react-icons/ri"

export const Navbar = forwardRef((props, ref) => {
  const data = [
    { icon: <RiHome7Line />, iconActive: <RiHome7Fill />, path: "/" },
    { icon: <RiSearchLine />, iconActive: <RiSearchFill />, path: "/search" },
    {
      icon: <RiNotification3Line />,
      iconActive: <RiNotification3Fill />,
      path: "/notifications",
    },
    {
      icon: <RiMessage3Line />,
      iconActive: <RiMessage3Fill />,
      path: "/messages",
    },
  ]

  const renderData = () => {
    return data.map((el, key) => {
      return (
        <NavButton
          icon={el.icon}
          iconActive={el.iconActive}
          path={el.path}
          key={key}
        />
      )
    })
  }

  return <Container ref={ref}>{renderData()}</Container>
})
