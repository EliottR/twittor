import ReactDOM from "react-dom"

import { AnimatePresence, motion } from "framer-motion"
import { MainContainer } from "./Styled"
import { UserLogin } from "../../Components/Login/UserLogin/Index"
import { useState } from "react"
import { UserPwd } from "../../Components/Login/UserPwd/Index"
import { LogoAbort } from "../../Components/LogoAbort/Index"
import { UserAuth } from "../../Contexts/AuthContext"
import { useEffect } from "react"

export const Login = ({ isShowing, onClick }) => {
  const { signIn } = UserAuth()

  const Log = () => {
    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const [pwdPage, setPwdPage] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await signIn(user, pwd)
      } catch (e) {
        console.log(e.message)
      }
    }

    return (
      <MainContainer
        as={motion.div}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.2 }}
      >
        <LogoAbort onClick={onClick} text="Annuler" />
        {pwdPage ? (
          <UserPwd
            user={user}
            pwd={pwd}
            onChange={(e) => setUser(e.target.value)}
            onChangePwd={(e) => setPwd(e.target.value)}
            onSubmit={handleSubmit}
          />
        ) : (
          <UserLogin
            user={user}
            onChange={(e) => setUser(e.target.value)}
            onClick={() => setPwdPage(true)}
            onSubmit={(e) => e.preventDefault()}
          />
        )}
      </MainContainer>
    )
  }

  return ReactDOM.createPortal(
    <AnimatePresence>{isShowing && <Log />}</AnimatePresence>,
    document.body
  )
}
