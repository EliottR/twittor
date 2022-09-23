import { useRef } from "react"
import { BottomContainer, Continue, Input, Intro } from "./Styled"

export const UserLogin = ({ user, onChange, onClick }) => {
  console.log("useLogin")

  const inputRef = useRef()

  const checkMail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      if (checkMail(user)) {
        onClick()
      }
      e.preventDefault()
    }
  }

  return (
    <form onKeyDown={handleEnter}>
      <Intro>
        Pour commencer, entrez votre numéro de téléphone, votre adresse email ou
        votre @nomdutilisateur
      </Intro>
      <Input
        ref={inputRef}
        type="email"
        name="userinfo"
        id="userinfo"
        placeholder="Numéro de téléphone, adresse email ou nom..."
        value={user}
        onChange={onChange}
      />
      <BottomContainer>
        <div>Mot de passe oublié ?</div>
        <Continue type="button" onClick={onClick}>
          Suivant
        </Continue>
      </BottomContainer>
    </form>
  )
}
