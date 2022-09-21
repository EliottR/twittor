import { getDownloadURL, getStorage, ref } from "firebase/storage"
import React, { useState } from "react"
import { UserAuth } from "../../Contexts/AuthContext"
import {
  Container,
  ContainerTop,
  ImageProfile,
  Input,
  MainContainer,
  Twit,
} from "./Styled"
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore"

export const NewTwit = ({ onClickAbort }) => {
  const auth = UserAuth()
  const [pp, setPp] = useState("")
  const [content, setContent] = useState("")

  const dbStorage = getStorage()
  const db = getFirestore()
  const displayPP = (img) => {
    const imgRef = ref(dbStorage, `profilePictures/${img}`)

    getDownloadURL(imgRef)
      .then((url) => {
        setPp(url)
        // return url
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/object-not-found":
            // File doesn't exist
            break
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break
          case "storage/canceled":
            // User canceled the upload
            break
          // ...
          case "storage/unknown":
            // Unknown error occurred, inspect the server response
            break
          default:
        }
      })
    return pp
  }

  displayPP(auth.user.uid)

  const handleTwit = async () => {
    // Add a new document with a generated id.
    await addDoc(collection(db, "twits"), {
      content: content,
      datetime: Timestamp.fromDate(new Date()),
      user: auth.user.uid,
    })
  }

  return (
    <MainContainer>
      <ContainerTop>
        <div onClick={onClickAbort}>Annuler</div>
        <Twit
          onClick={() => {
            content && handleTwit()
            content && onClickAbort()
          }}
        >
          Twiter
        </Twit>
      </ContainerTop>
      <Container>
        <ImageProfile src={pp} alt="" />
        <Input
          autoFocus
          type="text"
          placeholder="Quoi de neuf ?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Container>
    </MainContainer>
  )
}
