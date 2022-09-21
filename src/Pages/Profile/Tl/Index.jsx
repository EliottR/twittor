import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { TwitsList } from "../../../Components/TwitsList/Index"
import { Container } from "./Styled"

export const Tl = ({ height, heightMain }) => {
  // const twits = useSelector((state) => state.twit)
  // const user = useParams()

  // const data = [...twits]
  //   .filter((el) => el.user.userid === user.user_id)
  //   .map((el) => {
  //     return { ...el, isRt: true }
  //   })
  // // .sort((a, b) => {
  // //   return Date.parse(b.datetime) - Date.parse(a.datetime)
  // // })

  // const dataRt = [...twits]
  //   .filter((el) => {
  //     return el.whoRt.some((element) => element.userid === user.user_id)
  //   })
  //   .map((el) => {
  //     return { ...el, isRt: false }
  //   })
  // // .sort((a, b) => {
  // //   return (
  // //     Date.parse(b.whoRt.find((el) => el.userid === user.user_id).timeRt) -
  // //     Date.parse(a.whoRt.find((el) => el.userid === user.user_id).timeRt)
  // //   )
  // // })

  // const finalData = data.concat(dataRt).sort((a, b) => {
  //   return Date.parse(b.datetime) - Date.parse(a.datetime)
  // })

  // // .sort((a, b) => {
  // //   return (
  // //     Date.parse(b.whoRt.find((el) => el.userid === user.user_id).timeRt) -
  // //     Date.parse(a.whoRt.find((el) => el.userid === user.user_id).timeRt)
  // //   )
  // // })

  return (
    <Container height={height} heightMain={heightMain}>
      {/* {<TwitsList twits={finalData} />} */}
    </Container>
  )
}
