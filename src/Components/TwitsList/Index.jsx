import { Twit } from "../Twit/Index"

export const TwitsList = ({ twits, users, retwits }) => {
  console.log("TwitList")

  return (
    <>
      {twits.map((el, key) => {
        const twit = el.data()
        return (
          <Twit
            twit={el.data()}
            user_id={users[key].userid}
            username={users[key].pseudo}
            datetime={twit.datetime}
            userImg={users[key].img}
            content={twit.content}
            nbRsp={0}
            nbRt={retwits[key].length}
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
