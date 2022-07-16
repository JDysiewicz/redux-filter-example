export interface Program {
  id: string
  name: string
  isHiring: boolean
}

export enum FilterTypes {
  BY_HIRING = "by-hiring",
  BY_NAME = "by-name"
}

export interface Filter {
  type: FilterTypes
  values: any
}



