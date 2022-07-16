import { AnyAction } from "@reduxjs/toolkit"
import { Program, Filter } from "../types"
import { ADD_FILTER, ADD_PROGRAM } from "./actions"

export interface ProgramState {
  programs: Program[]
  activeFilters: Filter[]
}


const initialState: ProgramState = {
  programs: [],
  activeFilters: []
}

export const programReducer = (state: ProgramState = initialState, action: AnyAction) => {
  switch(action.type) {
    case ADD_PROGRAM:
      return {...state, programs: [...state.programs, action.payload]}
    case ADD_FILTER:
      return {...state, activeFilters: [...state.activeFilters, action.payload]}
    default:
      return state
  }
}
