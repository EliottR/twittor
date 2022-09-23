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
  const retwits = useRef([])
  const navRef = useRef([])

  useEffect(() => {
    //all twits
    if (user) {
      ;(async () => {
        const querySnapshot = await getDocs(collection(db, "twits"))
        twits.current = querySnapshot.docs

        //all users & retwits
        for (const user of querySnapshot.docs) {
          const docUsers = await getDoc(doc(db, "users", user.data().user))
          const docRetwits = await getDocs(
            collection(db, "twits", user.id, "retwits")
          )
          retwits.current.push(docRetwits.docs)

          users.current.push(docUsers.data())
        }

        setLoading(false)
      })()
    }
  }, [db, user])

  return user ? (
    isLoading ? (
      <div>loading...</div>
    ) : (
      <MainContainer as={motion.div}>
        <Topbar />
        <Container>
          <TwitsList
            twits={twits.current}
            users={users.current}
            retwits={retwits.current}
          />
        </Container>
        <Navbar ref={navRef} />
        <TwitButton />
      </MainContainer>
    )
  ) : (
    <NotConnected />
  )
}
