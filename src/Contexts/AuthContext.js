import { createContext, useContext, useEffect, useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"
import { auth } from "../firebase"

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then((e) =>
      setUser(e.user)
    )
  }

  const logout = async () => {
    return signOut(auth).then((e) => setUser(e))
  }

  const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then((e) =>
      setUser(e.user)
    )
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }
      setLoading(false)
    })

    return unsubscribe()
  }, [])

  console.log("AuthContext")

  return (
    <UserContext.Provider value={{ createUser, logout, signIn, user }}>
      {!loading && children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
