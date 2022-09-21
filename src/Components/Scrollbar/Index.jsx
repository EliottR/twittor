import { useParams } from "react-router-dom"
import { ScrollButton } from "../Buttons/ScrollButton/Index"
import { MainContainer } from "./Styled"

export const Scrollbar = () => {
  const { user_id } = useParams()

  const data = [
    { word: "Tweets", path: `/${user_id}` },
    { word: "Tweets et réponses", path: `/${user_id}/with_replies` },
    { word: "Médias", path: `/${user_id}/medias` },
    { word: "J'aime", path: `/${user_id}/likes` },
  ]

  return (
    <MainContainer>
      {data.map((el, key) => {
        return <ScrollButton key={key} word={el.word} path={el.path} />
      })}
    </MainContainer>
  )
}
