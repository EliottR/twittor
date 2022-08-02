import { configureStore, createSlice } from "@reduxjs/toolkit"
import imgEliott from "./Assets/user1.jpeg"

const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      userid: "elixttr",
      username: "e.",
      img: imgEliott,
      bio: "La vie est belle",
      birthdate: "07/06/1998",
      dateJoinTwitter: "15/02/2016",
      link: "instagram.com/elioottr",
      location: "Antananarivo, Madagascar",
      nbFollowers: 360,
      nbFollowments: 211,
      privateAccount: true,
    },
  ],
})

/****/
const twitSlice = createSlice({
  name: "twit",
  initialState: [
    {
      id: 1,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "je veux manger de la glace",
      nbAnswers: 1,
      nbRt: 3,
      nbFav: 18,
    },
    {
      id: 2,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "j'ai bien mangé",
      nbAnswers: 0,
      nbRt: 1,
      nbFav: 3,
    },
    {
      id: 3,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "je veux manger de la glace",
      nbAnswers: 1,
      nbRt: 3,
      nbFav: 18,
    },
    {
      id: 4,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "j'ai bien mangé",
      nbAnswers: 0,
      nbRt: 1,
      nbFav: 3,
    },
    {
      id: 5,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "je veux manger de la glace",
      nbAnswers: 1,
      nbRt: 3,
      nbFav: 18,
    },
    {
      id: 6,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "j'ai bien mangé",
      nbAnswers: 0,
      nbRt: 1,
      nbFav: 3,
    },
    {
      id: 7,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "je veux manger de la glace",
      nbAnswers: 1,
      nbRt: 3,
      nbFav: 18,
    },
    {
      id: 8,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "j'ai bien mangé",
      nbAnswers: 0,
      nbRt: 1,
      nbFav: 3,
    },
    {
      id: 9,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "je veux manger de la glace",
      nbAnswers: 1,
      nbRt: 3,
      nbFav: 18,
    },
    {
      id: 10,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "j'ai bien mangé",
      nbAnswers: 0,
      nbRt: 1,
      nbFav: 3,
    },
    {
      id: 11,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "je veux manger de la glace",
      nbAnswers: 1,
      nbRt: 3,
      nbFav: 18,
    },
    {
      id: 12,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "j'ai bien mangé",
      nbAnswers: 0,
      nbRt: 1,
      nbFav: 3,
    },
    {
      id: 13,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "je veux manger de la glace",
      nbAnswers: 1,
      nbRt: 3,
      nbFav: 18,
    },
    {
      id: 14,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "j'ai bien mangé",
      nbAnswers: 0,
      nbRt: 1,
      nbFav: 3,
    },
    {
      id: 15,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "je veux manger de la glace",
      nbAnswers: 1,
      nbRt: 3,
      nbFav: 18,
    },
    {
      id: 16,
      user: { userid: "elixttr", username: "e.", img: imgEliott },
      content: "j'ai bien mangé",
      nbAnswers: 0,
      nbRt: 1,
      nbFav: 3,
    },
  ],
  reducers: {
    rtTwit: (state, action) => {
      const task = state.find((t) => t.id === action.payload)
      task.nbRt = task.nbRt + 1
    },
    unrtTwit: (state, action) => {
      const task = state.find((t) => t.id === action.payload)
      task.nbRt = task.nbRt - 1
    },

    favTwit: (state, action) => {
      const task = state.find((t) => t.id === action.payload)
      task.nbFav = task.nbFav + 1
    },
    unfavTwit: (state, action) => {
      const task = state.find((t) => t.id === action.payload)
      task.nbFav = task.nbFav - 1
    },

    addTwit: (state, action) => {
      const newTwit = {
        id: Date.now(),
        text: action.payload,
      }

      state.push(newTwit)
    },
    deleteTwit: () => {},
  },
})

export const createFav = (id) => {
  return {
    type: "twit/favTwit",
    payload: id,
  }
}

export const uncreateFav = (id) => {
  return {
    type: "twit/unfavTwit",
    payload: id,
  }
}

export const createRt = (id) => {
  return {
    type: "twit/rtTwit",
    payload: id,
  }
}

export const uncreateRt = (id) => {
  return {
    type: "twit/unrtTwit",
    payload: id,
  }
}

/*-----*/

const hooksSlice = createSlice({
  name: "hooks",
  initialState: [
    {
      leftbar: false,
    },
  ],
  reducers: {
    openLeftBar: (state) => {
      const status = state.find((t) => t.leftbar === false)
      status.leftbar = true
    },
    closeLeftBar: (state) => {
      const status = state.find((t) => t.leftbar === true)
      status.leftbar = false
    },
  },
})

export const openLeftBar = () => {
  return {
    type: "hooks/openLeftBar",
  }
}

export const closeLeftBar = () => {
  return {
    type: "hooks/closeLeftBar",
  }
}

// STORE
export const store = configureStore({
  reducer: {
    twit: twitSlice.reducer,
    user: userSlice.reducer,
    hooks: hooksSlice.reducer,
  },
})
