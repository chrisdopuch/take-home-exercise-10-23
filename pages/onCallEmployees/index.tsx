import { GetServerSideProps } from 'next'
import Link from 'next/link'

import { OnCallEmployee } from '../../interfaces'
import { sampleOnCallEmployeeData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: OnCallEmployee[]
}

const OnCallEmployeesPage = ({ items }: Props) => (
  <Layout title="On Call Employees List | Developer Dashboard">
    <h1>Employees List</h1>
    <p>You are currently on: /onCallEmployees</p>
    <List items={items} objectType='onCallEmployees' />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const items: OnCallEmployee[] = sampleOnCallEmployeeData
  return { props: { items } }
}

export default OnCallEmployeesPage
