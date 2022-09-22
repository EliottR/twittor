import { useEffect, useRef } from "react"
import { BottomContainer, Continue, Input, Intro } from "./Styled"

export const UserLogin = ({ onSubmit, user, onChange, onClick }) => {
  const focusRef = useRef()
  useEffect(() => {
    focusRef.current.focus()
  }, [])
  return (
    <form onSubmit={onSubmit}>
      <Intro>
        Pour commencer, entrez votre numéro de téléphone, votre adresse email ou
        votre @nomdutilisateur
      </Intro>
      <Input
        ref={focusRef}
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
