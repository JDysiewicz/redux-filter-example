import { combineReducers } from "@reduxjs/toolkit"
import { programReducer, ProgramState } from "./state/reducer"

export interface RootState {
  programReducer: ProgramState
}

export const rootReducer = combineReducers<RootState>({
  programReducer: programReducer
})


