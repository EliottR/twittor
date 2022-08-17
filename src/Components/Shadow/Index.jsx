import { motion } from "framer-motion"
import { Container } from "./Styled"

export const Shadow = ({ onClick }) => {
  return (
    <Container
      key="shadow"
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    />
  )
}
