import { Container, MainContainer } from "./Styled"
import { TwitsList } from "../../Components/TwitsList/Index"
import { Navbar } from "../../Components/Navbar/Index"
import { TwitButton } from "../../Components/Buttons/TwitButton/Index"
import { motion } from "framer-motion"
import { Topbar } from "../../Components/Topbar/Index"
import { NotConnected } from "../NotConnected/Index"
import { UserAuth } from "../../Contexts/AuthContext"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore"
import { useEffect, useRef, useState } from "react"

export const Home = () => {
  console.log("Home")
  const { user } = UserAuth()
  const db = getFirestore()
  const [isLoading, setLoading] = useState(true)
  const twits = useRef()
  const users = useRef([])
  const navRef = useRef()

  useEffect(() => {
    //all twits
    ;(async () => {
      const querySnapshot = await getDocs(collection(db, "twits"))
      twits.current = querySnapshot.docs

      //all users
      for (const user of querySnapshot.docs) {
        const docSnap = await getDoc(doc(db, "users", user.data().user))

        users.current.push(docSnap.data())
      }

      setLoading(false)
    })()
  }, [db])

  return user ? (
    isLoading ? (
      <div>loading...</div>
    ) : (
      <MainContainer as={motion.div}>
        <Topbar />
        <Container>
          <TwitsList twits={twits.current} users={users.current} />
        </Container>
        <Navbar ref={navRef} />
        <TwitButton />
      </MainContainer>
    )
  ) : (
    <NotConnected />
  )
}
