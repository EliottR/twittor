import ReactDOM from "react-dom"
import {
  Container,
  MainContainer,
  ButtonContainer,
  InterContainer,
  Line,
} from "./Styled"
import { AiOutlineRetweet } from "react-icons/ai"
import { RiPencilLine } from "react-icons/ri"
import { AnimatePresence, motion } from "framer-motion"
import { Shadow } from "../Shadow/Index"

export const Modal = ({ isShowing, onClickRT, onClick, isRT }) => {
  const ModalRT = () => {
    return (
      <>
        <MainContainer key="modal" as={motion.div}>
          <Shadow onClick={onClick} />
          <Container
            key="containerModal"
            as={motion.div}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.2 }}
          >
            <Line></Line>
            <InterContainer onClick={onClickRT}>
              <AiOutlineRetweet />
              {isRT ? "Annuler le retwit" : "Retwit"}
            </InterContainer>
            <InterContainer>
              <RiPencilLine />
              Citer le Twit
            </InterContainer>
            <ButtonContainer type="button" onClick={onClick}>
              Annuler
            </ButtonContainer>
          </Container>
        </MainContainer>
      </>
    )
  }

  return ReactDOM.createPortal(
    <AnimatePresence>{isShowing && <ModalRT />}</AnimatePresence>,
    document.body
  )
}
