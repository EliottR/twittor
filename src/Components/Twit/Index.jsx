import { useEffect, useRef, useState } from "react"
import {
  MainContainer,
  Container,
  InterContainer,
  ImgUser,
  UserContainer,
  RTContainer,
  FavContainer,
  DateTime,
  // HasRt,
} from "./Styled"
import {
  AiOutlineRetweet,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai"
import { Modal } from "../Modals/Index"
import { useModal } from "../Hooks/Modal/Index"
// import { useDispatch } from "react-redux"
// import { createFav, uncreateFav, createRt, uncreateRt } from "../../redux"
import { NavLink, useNavigate } from "react-router-dom"
import { getDownloadURL, getStorage, ref } from "firebase/storage"
import { BsThreeDots } from "react-icons/bs"
import {
  doc,
  getDoc,
  getFirestore,
  collection,
  Timestamp,
  addDoc,
} from "firebase/firestore"
import { UserAuth } from "../../Contexts/AuthContext"

export const Twit = ({
  id,
  username,
  user_id,
  userid,
  userImg,
  datetime,
  content,
  nbRsp,
  nbRt,
  nbFav,
  userRt,
}) => {
  console.log("Twit")

  const [isLoading, setLoading] = useState(true)

  const { isShowing, toggle } = useModal()
  // const dispatch = useDispatch()
  const navigate = useNavigate()
  const dbStorage = getStorage()
  const db = getFirestore()
  const { user } = UserAuth()
  //Retwits

  const handleRT = async () => {
    await addDoc(collection(db, "twits", id, "retwits"), {
      datetime: Timestamp.fromDate(new Date()),
      user: user.uid,
    })

    // userRt === false ? dispatch(createRt(id)) : dispatch(uncreateRt(id))
    toggle()
  }

  //Favorites
  const [isFav, setIsFav] = useState(false)

  const handleFav = (e) => {
    e.stopPropagation()

    // isFav === false ? dispatch(createFav(id)) : dispatch(uncreateFav(id))
    setIsFav(!isFav)
  }

  //Datetime
  const handleDatetime = (datetime) => {
    const dateNow = new Date()
    const date = new Date(datetime.seconds * 1000)

    //year
    if (dateNow.getFullYear() - date.getFullYear() === 0) {
      //month
      if (dateNow.getMonth() - date.getMonth() === 0) {
        //day
        if (dateNow.getDate() - date.getDate() <= 6) {
          //day 0
          if (dateNow.getDate() - date.getDate() === 0) {
            //hours
            if (dateNow.getHours() - date.getHours() >= 1) {
              return `${dateNow.getHours() - date.getHours()}h`
              //minutes
            } else if (dateNow.getMinutes() - date.getMinutes() >= 1) {
              return `${dateNow.getMinutes() - date.getMinutes()}min`
              //seconds
            } else if (dateNow.getSeconds() - date.getSeconds() >= 1) {
              return `${dateNow.getSeconds() - date.getSeconds()}s`
            }
          } else {
            return `${dateNow.getDate() - date.getDate()}j`
          }
        } else {
          return date.toLocaleDateString()
        }
      } else {
        return date.toLocaleDateString()
      }
    } else {
      return date.toLocaleDateString()
    }
  }

  //Profile image
  const pp = useRef()

  useEffect(() => {
    const displayPP = (img) => {
      const imgRef = ref(dbStorage, img)
      getDownloadURL(imgRef)
        .then((url) => {
          pp.current = url
          setLoading(false)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    displayPP(userImg)
  }, [dbStorage, userImg])

  //Click to show details
  const handleClick = () => {
    navigate(`/${user_id}/${id}`)
  }

  return isLoading ? (
    <div>loading tweet</div>
  ) : (
    <>
      <Modal
        isShowing={isShowing}
        nbRt={nbRt}
        onClick={toggle}
        onClickRT={handleRT}
        isRT={userRt}
      />

      {/* {userRt && isRt && (
        <HasRt>
          <AiOutlineRetweet />
          {currentUser === useParam
            ? "Vous avez"
            : `${user.find((el) => el.userid === useParam).username} a`}{" "}
          retweeté
        </HasRt>
      )} */}
      <MainContainer>
        <NavLink to={`/${user_id}`}>
          <ImgUser src={pp.current} alt="profile image" />
        </NavLink>

        <Container onClick={handleClick}>
          <UserContainer>
            <div>{username}</div>
            <div>@{user_id}</div>
            <DateTime>• {handleDatetime(datetime)}</DateTime>
            {/* {currentUser === user_id && <BsThreeDots />} */}
          </UserContainer>
          <div>{content}</div>
          <InterContainer>
            <div>
              <AiOutlineComment />
              {nbRsp}
            </div>
            <RTContainer
              onClick={(e) => {
                toggle()
                e.stopPropagation()
              }}
              rt={userRt}
            >
              <AiOutlineRetweet color={userRt ? "green" : "black"} />
              {nbRt}
            </RTContainer>
            <FavContainer onClick={handleFav} fav={isFav}>
              {isFav ? <AiFillHeart color="#f9197f" /> : <AiOutlineHeart />}
              {nbFav}
            </FavContainer>
            <div>
              <AiOutlineShareAlt />
            </div>
          </InterContainer>
        </Container>
      </MainContainer>
    </>
  )
}
