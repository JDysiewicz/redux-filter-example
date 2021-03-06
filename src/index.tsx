import { configureStore } from "@reduxjs/toolkit"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import { rootReducer } from "./reducer"

const store = configureStore({
    reducer: rootReducer
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"))
