import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home/Index"
import { Messages } from "./Pages/Messages/Index"
import { Notifications } from "./Pages/Notifications/Index"
import { Search } from "./Pages/Search/Index"
import { store } from "./redux"
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
import { GlobalStyle } from "./Styled"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()
