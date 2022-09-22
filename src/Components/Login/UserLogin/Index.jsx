import { useEffect } from "react"
import { useRef } from "react"
import { BottomContainer, Continue, Input, Intro } from "./Styled"

export const UserLogin = ({ onSubmit, user, onChange, onClick }) => {
  const inputRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      inputRef.focus()
    }, 200)
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <Intro>
        Pour commencer, entrez votre numéro de téléphone, votre adresse email ou
        votre @nomdutilisateur
      </Intro>
      <Input
        ref={inputRef}
        type="text"
        name="userinfo"
        id="userinfo"
        placeholder="Numéro de téléphone, adresse email ou nom..."
        value={user}
        onChange={onChange}
      />
      <BottomContainer>
        <div>Mot de passe oublié ?</div>
        <Continue type="submit" onClick={onClick}>
          Suivant
        </Continue>
      </BottomContainer>
    </form>
  )
}
