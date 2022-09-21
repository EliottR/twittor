import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import ReactDOM from "react-dom"
// import { useDispatch } from "react-redux"
import { LogoAbort } from "../../Components/LogoAbort/Index"
// import { signUp } from "../../redux"
import {
  BottomContainer,
  Continue,
  Input,
  Intro,
  MainContainer,
} from "./Styled"
import { UserAuth } from "../../Contexts/AuthContext"
import { doc, setDoc, Timestamp } from "firebase/firestore"
import { getFirestore } from "firebase/firestore"
import { getStorage, ref, uploadBytes } from "firebase/storage"
import { useNavigate } from "react-router-dom"

export const Signup = ({ isShowing, onClick }) => {
  const [userid, setUserId] = useState("")
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [confirmPwd, setConfirmPwd] = useState("")
  const [pseudo, setPseudo] = useState("")

  // const [banner, setBanner] = useState("")
  const [bio, setBio] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [img, setImg] = useState({ file: null, name: "" })
  const [link, setLink] = useState("")
  const [location, setLocation] = useState("")
  // const [privateAccount, setPrivateAccount] = useState("")

  const [details, setDetails] = useState(false)

  const navigate = useNavigate()

  const { createUser } = UserAuth()
  const db = getFirestore()
  const storage = getStorage()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (pwd === confirmPwd) {
        await createUser(email, pwd)
          .then((e) => {
            setDoc(doc(db, "users", e.user.uid), {
              // banner: banner,
              bio: bio ?? null,
              birthdate: birthdate
                ? Timestamp.fromDate(new Date(birthdate))
                : null,
              dateJoinTwitter: Timestamp.now(),
              firstName: firstname ?? null,
              lastName: lastname ?? null,
              img: `profilePictures/${e.user.uid}` ?? null,
              link: link ?? null,
              location: location ?? null,
              pseudo: pseudo ?? null,
              userid: userid ?? null,
            })
            const imgRef = ref(storage, `profilePictures/${e.user.uid}`)

            uploadBytes(imgRef, img.file)
          })
          .catch((e) => {
            console.log(e.error)
          })
      }
    } catch (e) {
      console.log(e.message)
    }

    navigate("/")
  }

  const handleDetails = async (e) => {
    e.preventDefault()
    if (pwd === confirmPwd) setDetails(true)
  }

  return (
    <AnimatePresence>
      <MainContainer
        key={"signup"}
        as={motion.div}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.2 }}
      >
        <LogoAbort
          onClick={details ? () => setDetails(false) : () => navigate("/")}
          text={details ? "Retour" : "Annuler"}
        />

        {details ? (
          <form onSubmit={handleSubmit}>
            <Intro>Complétez votre profil</Intro>
            <Input
              type="file"
              name="profilepicture"
              id="profilepicture"
              accept="image/png, image/jpeg, image/jpg, image/gif, image/heic, image/DNG"
              value={img.name ? img.name : ""}
              onChange={(e) =>
                setImg({ file: e.target.files[0], name: e.target.value })
              }
            />
            <Input
              type="text"
              name="bio"
              id="bio"
              placeholder="Ajouter une bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <Input
              type="date"
              name="birthdate"
              id="birthdate"
              placeholder="Ajouter votre date de naissance"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
            <Input
              type="text"
              name="link"
              id="url"
              placeholder="Ajouter votre lien"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <Input
              type="text"
              name="location"
              id="location"
              placeholder="Ajouter votre lieu"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <BottomContainer>
              <div>Mot de passe oublié ?</div>
              <Continue type="submit" onClick={handleSubmit}>
                Suivant
              </Continue>
            </BottomContainer>
          </form>
        ) : (
          <form onSubmit={handleDetails}>
            <Intro>Créer votre compte</Intro>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Prénom"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Nom"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Votre adresse mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              name="userid"
              id="userid"
              placeholder="@NomUtilisateur"
              value={userid}
              onChange={(e) => setUserId(e.target.value)}
            />
            <Input
              type="text"
              name="pseudo"
              id="pseudo"
              placeholder="Pseudonyme"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="6 caractères minimum"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <Input
              type="password"
              name="password2"
              id="password2"
              placeholder="Confirmez votre mot de passe"
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
            />
            <BottomContainer>
              <div>Mot de passe oublié ?</div>
              <Continue type="submit" onClick={handleDetails}>
                Suivant
              </Continue>
            </BottomContainer>
          </form>
        )}
      </MainContainer>
    </AnimatePresence>
  )
}
