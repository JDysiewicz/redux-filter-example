import { FilterTypes, Program } from "./types";

export type FilterFn = (arr: Program[]) => Program[]

const createFilterByHiring = (value: boolean): FilterFn => {
  return (arr) => arr.filter(program => program.isHiring === value);
}

const createFilterByName = (values: string[]): FilterFn => {
  return (arr) => arr.filter(program => values.includes(program.name))
}

export const availableFilters = [
  {type: FilterTypes.BY_HIRING, fn: createFilterByHiring},
  {type: FilterTypes.BY_NAME, fn: createFilterByName},
]
