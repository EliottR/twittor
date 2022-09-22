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
  const [currentUser, setCurrentUser] = useState(false)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    setCurrentUser(false)
    return signOut(auth)
  }

  const signIn = (email, password) => {
    setCurrentUser(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  console.log("AuthContext")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        setCurrentUser(true)
      }
      setLoading(false)
    })

    return unsubscribe()
  }, [])

  return (
    <UserContext.Provider
      value={{ createUser, logout, signIn, user, currentUser }}
    >
      {!loading && children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
