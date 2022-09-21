import { Twit } from "../Twit/Index"

export const TwitsList = ({ twits, users }) => {
  console.log("TwitList")

  return (
    <>
      {twits.map((el, key) => {
        const twit = el.data()
        console.log(el)
        return (
          <Twit
            twit={el.data()}
            user_id={users[key].userid}
            username={users[key].pseudo}
            datetime={twit.datetime}
            userImg={users[key].img}
            content={twit.content}
            nbRsp={0}
            nbRt={0}
            // userRt={handleUserRt(el.whoRt)}
            nbFav={0}
            id={el.id}
            // isRt={el.isRt}
            key={key}
            // userid={}
          />
        )
      })}
    </>
  )
}
