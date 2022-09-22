import { BottomContainer, Continue, Input, Intro } from "./Styled"

export const UserLogin = ({ onSubmit, user, onChange, onClick }) => {
  return (
    <form onSubmit={onSubmit}>
      <Intro>
        Pour commencer, entrez votre numéro de téléphone, votre adresse email ou
        votre @nomdutilisateur
      </Intro>
      <Input
        autoFocus
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
