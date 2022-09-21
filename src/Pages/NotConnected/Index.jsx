import React from "react"
import logo from "../../Assets/twittor.svg"
import {
  LogoContainer,
  Logo,
  Intro,
  Container,
  Button,
  SpaceContainer,
  Line,
  Or,
  Conditions,
  Connect,
} from "./Styled"
import { FcGoogle } from "react-icons/fc"
import { AiFillApple } from "react-icons/ai"
import { useState } from "react"
import { Login } from "../Login/Index"
import { useNavigate } from "react-router-dom"

export const NotConnected = () => {
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <LogoContainer>
        <Logo src={logo} alt="logo twittor" />
      </LogoContainer>
      <Container>
        <Intro>Découvrez ce qui se passe dans le monde en temps réel.</Intro>
      </Container>
      <Container>
        <Button>
          <FcGoogle />
          Continuer avec Google
        </Button>
        <Button>
          <AiFillApple />
          Continuer avec Apple
        </Button>
        <SpaceContainer>
          <Line></Line>
          <Or>ou</Or>
          <Line></Line>
        </SpaceContainer>
        <Button
          black
          onClick={() => {
            navigate("/signup")
          }}
        >
          Créez un compte
        </Button>
        <Conditions>
          En vous inscrivant, vous acceptez nos{" "}
          <a href="/">Conditions d'utilisation</a>, notre{" "}
          <a href="/">Politique de confidentialité</a> et notre{" "}
          <a href="/">Utilisation des cookies</a>.
        </Conditions>
        <Connect>
          Vous avez déjà un compte ?{" "}
          <div
            onClick={() => {
              setLogin(true)
            }}
          >
            Connectez vous
          </div>
        </Connect>
      </Container>
      <Login isShowing={login} onClick={() => setLogin(false)} />
    </>
  )
}
