import React from "react"
import { Twit } from "../Twit/Index"

export const TwitsList = (props) => {
  return (
    <>
      {props.twits.map((el, key) => (
        <Twit
          id={el.id}
          user_id={el.user.userid}
          username={el.user.username}
          userImg={el.user.img}
          content={el.content}
          nbRsp={el.responses}
          nbRt={el.nbRt}
          nbFav={el.nbFav}
          key={key}
        />
      ))}
    </>
  )
}
