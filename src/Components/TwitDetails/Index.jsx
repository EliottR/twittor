import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore"
import { getDownloadURL, getStorage, ref } from "firebase/storage"
import React, { useEffect, useState } from "react"
import {
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineRetweet,
  AiOutlineShareAlt,
} from "react-icons/ai"
import { NavLink, useParams } from "react-router-dom"
import {
  Content,
  DateApp,
  Interactions,
  MainContainer,
  TopContent,
  TwitInfos,
} from "./Styled"

export const TwitDetails = ({ id, content, datetime, appareil }) => {
  console.log("TwitDetails")

  const dbStorage = getStorage()
  const db = getFirestore()
  const [user, setUser] = useState()
  const [twit, setTwit] = useState()
  const [loading, setLoading] = useState(true)

  const params = useParams()

  //Profile image
  const [pp, setPp] = useState()
  const displayPP = () => {
    const imgRef = ref(dbStorage, user.img)

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

  useEffect(() => {
    ;(async () => {
      const usersRef = collection(db, "users")

      const q = query(usersRef, where("userid", "==", params.user_id))

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUser(doc.data())
      })

      const docRef = doc(db, "twits", params.twit)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setTwit(docSnap.data())
      }
      // const querySnapshot = await getDocs(
      //   collection(db, "twits", nbRt, "retwits")
      // )

      // setRt(querySnapshot.docs.length)
      setLoading(false)
    })()
  }, [db, params.twit, params.user_id])

  return loading ? (
    <div>loading...</div>
  ) : (
    <MainContainer>
      {/* <div>qui a retweeté</div> */}
      <TopContent>
        <NavLink to={`/${user.userid}`}>
          <img src={displayPP()} alt="profile user" />
        </NavLink>
        <div>
          <div>{user.pseudo}</div>
          <div>{user.userid}</div>
        </div>
      </TopContent>
      <Content>{twit.content}</Content>
      <DateApp>
        <div>hour and {datetime}</div>
        <div>twitter for {appareil}</div>
      </DateApp>
      <TwitInfos>
        <div>nbRt</div>
        <div>nb cités</div>
        <div>nb j'aime</div>
      </TwitInfos>
      <Interactions>
        {<AiOutlineMessage />} {<AiOutlineRetweet />} {<AiOutlineHeart />}
        {<AiOutlineShareAlt />}
      </Interactions>
    </MainContainer>
  )
}
