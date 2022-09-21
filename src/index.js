import ReactDOM from "react-dom/client"
// import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TwitDetails } from "./Components/TwitDetails/Index"
import { AuthContextProvider } from "./Contexts/AuthContext"
import { Home } from "./Pages/Home/Index"
import { Messages } from "./Pages/Messages/Index"
import { Notifications } from "./Pages/Notifications/Index"
import { Profile } from "./Pages/Profile/Index"
// import { WithReplies } from "./Pages/Profile/WithReplies/Index"
import { Search } from "./Pages/Search/Index"
import { Signup } from "./Pages/Signup/Index"
// import { store } from "./redux"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import { GlobalStyle } from "./Styled"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <AuthContextProvider>
    {/* <Provider store={store}> */}
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path=":user_id" element={<Profile />} />
        <Route path=":user_id/with_replies" element={<Profile />} />
        <Route path=":user_id/medias" element={<Profile />} />
        <Route path=":user_id/likes" element={<Profile />} />
        <Route path=":user_id/:twit" element={<TwitDetails />} />
      </Routes>
    </BrowserRouter>
    {/* </Provider> */}
  </AuthContextProvider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()
