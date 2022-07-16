import { Filter, Program } from "../types";

export const ADD_PROGRAM = "add-program"
export const ADD_FILTER = "add-filter";

export const addProgram = (program: Program) => ({
  type: ADD_PROGRAM,
  payload: program
})

export const addFilter = (filter: Filter) => ({
  type: ADD_FILTER,
  payload: filter
})
