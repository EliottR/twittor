import React, { useState } from "react"
import {
  MainContainer,
  Container,
  InterContainer,
  ImgUser,
  UserContainer,
  RTContainer,
  FavContainer,
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
import { useDispatch } from "react-redux"
import { createFav, uncreateFav, createRt, uncreateRt } from "../../redux"

export const Twit = (props) => {
  const { id, username, user_id, userImg, content, nbRsp, nbRt, nbFav } = props
  const { isShowing, toggle } = useModal()

  const dispatch = useDispatch()
  // State RTs
  const [isRt, setIsRt] = useState(false)

  const handleRT = () => {
    isRt === false ? dispatch(createRt(id)) : dispatch(uncreateRt(id))
    setIsRt(!isRt)
    toggle()
  }

  //State Favorites
  const [isFav, setIsFav] = useState(false)

  const handleFav = () => {
    isFav === false ? dispatch(createFav(id)) : dispatch(uncreateFav(id))
    setIsFav(!isFav)
  }

  return (
    <>
      <Modal
        isShowing={isShowing}
        nbRt={nbRt}
        onClick={toggle}
        onClickRT={handleRT}
        isRT={isRt}
      />

      <MainContainer>
        <ImgUser src={userImg} alt="" />
        <Container>
          <UserContainer>
            <div>{username}</div>
            <div>@{user_id}</div>
          </UserContainer>
          <div>{content}</div>
          <InterContainer>
            <div>
              <AiOutlineComment />
              {nbRsp}
            </div>
            <RTContainer onClick={toggle} rt={isRt}>
              <AiOutlineRetweet color={isRt ? "green" : "black"} />
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
