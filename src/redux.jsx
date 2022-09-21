// import { configureStore, createSlice } from "@reduxjs/toolkit"

// // /****/
// const currentUserSlice = createSlice({
//   name: "currentUser",
//   initialState: {},
//   reducers: {
//     addUser: (state, action) => {
//       console.log(state)
//       // const task = state.find((t) => t.id === action.payload)
//       // task.whoRt.push({
//       // userid: currentUserSlice.getInitialState().userid,
//       // timeRt: new Date().toString(),
//       // })
//     },
//     //     unrtTwit: (state, action) => {
//     //       const task = state.find((t) => t.id === action.payload)
//     //       const index = task.whoRt.map((el) => el.userid)
//     //       // .indexOf(currentUserSlice.getInitialState().userid)
//     //       task.whoRt.splice(index, 1)
//     //     },
//     //     favTwit: (state, action) => {
//     //       // const task = state.find((t) => t.id === action.payload)
//     //       // task.whoLikes.push(currentUserSlice.getInitialState().userid)
//     //     },
//     //     unfavTwit: (state, action) => {
//     //       const task = state.find((t) => t.id === action.payload)
//     //       task.whoLikes.pop()
//     //     },
//     //     addTwit: (state, action) => {
//     //       const newTwit = {
//     //         id: Date.now(),
//     //         text: action.payload,
//     //       }
//     //       state.push(newTwit)
//     //     },
//     //     deleteTwit: () => {},
//   },
// })

// export const addCurrentUser = (id) => {
//   return {
//     type: "twit/addUser",
//     payload: id,
//   }
// }

// // export const uncreateFav = (id) => {
// //   return {
// //     type: "twit/unfavTwit",
// //     payload: id,
// //   }
// // }

// // export const createRt = (id) => {
// //   return {
// //     type: "twit/rtTwit",
// //     payload: id,
// //   }
// // }

// // export const uncreateRt = (id) => {
// //   return {
// //     type: "twit/unrtTwit",
// //     payload: id,
// //   }
// // }

// // // export const signUp = (userid) => {
// // //   return {
// // //     type: "currentUser/signup",
// // //     payload: userid,
// // //   }
// // // }
// // // export const logIn = (user) => {
// // //   return {
// // //     type: "currentUser/login",
// // //     payload: user,
// // //   }
// // // }

// // // export const signout = (user) => {
// // //   return {
// // //     type: "currentUser/signout",
// // //     payload: user,
// // //   }
// // // }
// // // STORE
// export const store = configureStore({
//   reducer: {
//     currentUser: currentUserSlice.reducer,
//   },
// })
