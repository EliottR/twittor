import { useLocation, useParams } from "react-router-dom"
import {
  Banner,
  SubContainer1,
  ImgUser,
  MainContainer,
  EditButton,
  Username,
  TextContainer,
  UserId,
  Location,
  Details1,
  // Details2,
  Link,
  FollowContainer,
  Follow,
  NoBanner,
} from "./Styled"
import { Navbar } from "../../Components/Navbar/Index"
import { Scrollbar } from "../../Components/Scrollbar/Index"
import { WithReplies } from "./WithReplies/Index"
import { useEffect, useRef, useState } from "react"
import { Tl } from "./Tl/Index"
import { Medias } from "./Medias/Index"
import { Likes } from "./Likes/Index"
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore"

export const Profile = () => {
  console.log("Profile")
  const { user_id } = useParams()
  const location = useLocation()
  const [pathProfile, setPathProfile] = useState(user_id)
  const navRef = useRef()
  const mainRef = useRef()
  const [isLoading, setLoading] = useState(true)
  const db = getFirestore()
  const currentUser = useRef()

  useEffect(() => {
    setPathProfile(location.pathname.split("/").pop())
    ;(async () => {
      const q = query(collection(db, "users"), where("userid", "==", user_id))

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        currentUser.current = doc.data()
      })

      setLoading(false)
      // setHeight(navRef.current.clientHeight)
      // setHeightMain(mainRef.current.clientHeight)
    })()
  }, [location.pathname, db, user_id])

  const renderMenu = () => {
    switch (true) {
      case pathProfile === user_id:
        return <Tl />

      case pathProfile === "with_replies":
        return <WithReplies />

      case pathProfile === "medias":
        return <Medias />

      case pathProfile === "likes":
        return <Likes />

      default:
        return <Tl />
    }
  }

  return isLoading ? (
    <div>loading...</div>
  ) : (
    <>
      <MainContainer ref={mainRef}>
        <div>
          {currentUser.current.banner ? (
            <Banner src={currentUser.current.banner} alt="banner" />
          ) : (
            <NoBanner></NoBanner>
          )}
          <TextContainer>
            <SubContainer1>
              <ImgUser src={currentUser.current.img} alt="profile" />
              <EditButton>Éditer le profil</EditButton>
            </SubContainer1>
            <Username>
              {currentUser.current.pseudo}{" "}
              {currentUser.current.privateAccount && "🔒"}
            </Username>
            <UserId>@{currentUser.current.userid}</UserId>
            <Details1>
              {currentUser.current.location && (
                <Location>📍 {currentUser.current.location}</Location>
              )}
              {currentUser.current.link && (
                <Link href={currentUser.current.link}>
                  🔗 {currentUser.current.link}
                </Link>
              )}
            </Details1>
            {/* <Details2>
              {currentUser.current.birthdate && (
                <div>🎈 Né le {currentUser.current.birthdate}</div>
              )}
              {currentUser.current.dateJoinTwitter && (
                <div>
                  📅 A rejoint Twittor le {currentUser.current.dateJoinTwitter}
                </div>
              )}
            </Details2> */}
            <FollowContainer>
              <Follow>
                <span>{currentUser.current.nbFollowments} </span>Abonnements
              </Follow>
              <Follow>
                <span>{currentUser.current.nbFollowers} </span>Abonnés
              </Follow>
            </FollowContainer>
          </TextContainer>
        </div>

        <Scrollbar />
      </MainContainer>
      {renderMenu()}
      <Navbar ref={navRef} />
    </>
  )
}
