import React from "react"
import { Input, Intro } from "./Styled"

export const UserPwd = ({ user, onChange, pwd, onChangePwd, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Intro>Entrez votre mot de passe.</Intro>
      <Input
        type="text"
        name="userinfo"
        id="userinfo"
        placeholder="Numéro de téléphone, adresse email ou nom..."
        value={user}
        onChange={onChange}
      />
      <Input
        autoFocus
        type="password"
        name="userPwd"
        id="userPwd"
        placeholder="..."
        value={pwd}
        onChange={onChangePwd}
      />
      <button type="submit">connecter</button>
    </form>
  )
}
