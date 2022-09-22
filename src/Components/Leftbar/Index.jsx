import ReactDOM from "react-dom"
import { AnimatePresence, motion } from "framer-motion"

import {
  Container,
  FollowContainer,
  MainContainer,
  NavContainer,
  TopContainer,
  TopUserContainer,
  UserContainer,
  UserIdContainer,
  UsernameContainer,
} from "./Styled"
import {
  RiAccountCircleLine,
  RiFileList3Line,
  RiMessageLine,
  RiBookmarkLine,
  RiHeadphoneLine,
  RiMoneyDollarBoxLine,
  RiUserFollowLine,
  RiLightbulbLine,
  RiQrCodeLine,
  RiLogoutBoxLine,
} from "react-icons/ri"
import { MdSwitchAccount } from "react-icons/md"
// import { IoRocketOutline } from "react-icons/io"
import { forwardRef } from "react"
import { Shadow } from "../Shadow/Index"
import { UserAuth } from "../../Contexts/AuthContext"

//MAIN COMPONENT
export const Leftbar = forwardRef(({ isShowing, onClick }, ref) => {
  const { logout } = UserAuth()
  const handleLogout = async () => {
    try {
      await logout()
    } catch (e) {
      console.log(e.message)
    }
  }

  const buttonsData = [
    { icon: <RiAccountCircleLine />, text: "Profil" },
    { icon: <RiFileList3Line />, text: "Listes" },
    { icon: <RiMessageLine />, text: "Sujets" },
    { icon: <RiBookmarkLine />, text: "Signets" },
    { icon: <RiHeadphoneLine />, text: "Spaces" },
    { icon: <RiMoneyDollarBoxLine />, text: "Monétisation" },
    { icon: <RiUserFollowLine />, text: "Demandes d'abonnement" },
    { icon: <RiLogoutBoxLine />, text: "Déconnexion", fct: handleLogout },
  ]

  const LeftComponent = () => {
    return (
      <>
        <Shadow onClick={onClick} />
        <MainContainer
          ref={ref}
          key="leftBar"
          as={motion.div}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.2 }}
        >
          <TopContainer>
            <TopUserContainer>
              {/* <UserContainer>
                <img src={user[0].img} alt="" />
                <UsernameContainer>{user[0].username}</UsernameContainer>
                <UserIdContainer>@{user[0].userid}</UserIdContainer>
                <FollowContainer>
                  <div>
                    <span>{user[0].nbFollowments}</span> abonnements
                  </div>
                  <div>
                    <span>{user[0].nbFollowers}</span> abonnés
                  </div>
                </FollowContainer>
              </UserContainer> */}
              <MdSwitchAccount fontSize={"1.5rem"} />
            </TopUserContainer>

            {buttonsData.map((el, key) => {
              return (
                <Container key={key} onClick={el.fct}>
                  {el.icon}
                  {el.text}
                </Container>
              )
            })}
          </TopContainer>
          <NavContainer>
            <RiLightbulbLine />
            <RiQrCodeLine />
          </NavContainer>
        </MainContainer>
      </>
    )
  }

  return ReactDOM.createPortal(
    <AnimatePresence>{isShowing && <LeftComponent />}</AnimatePresence>,
    document.body
  )
})
