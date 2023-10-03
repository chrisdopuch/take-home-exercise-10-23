import React from 'react'
import Link from 'next/link'
import { OnCallEmployee, Service } from '../interfaces'

export type ListItem = OnCallEmployee | Service

type Props = {
  data: ListItem
  objectType: string
}

const ListItem = ({ data, objectType }: Props) => (
  <Link href={`/${objectType}/[id]`} as={`/${objectType}/${data.id}`}>
    {data.id}: {data.name}
  </Link>
)

export default ListItem
