// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Service } from 'path/to/interfaces';

export type Service = {
  id: number
  name: string
  deployment: {
    id: number
    name: string
    status: string
    version: string
    createdAt: string
    updatedAt: string
  }
  pods: {
    id: number
    name: string
    status: string
    createdAt: string
    updatedAt: string
  }[]
}

export type OnCallPerson  = {
  id: number
  name: string
  email: string
  phone: string
  slack: string
  isOnCall: boolean
}