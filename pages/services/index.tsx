import { GetServerSideProps } from 'next'
import Link from 'next/link'

import { Service } from '../../interfaces'
import { sampleServiceData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: Service[]
}

const ServicesPage = ({ items }: Props) => (
  <Layout title="Services List | Developer Dashboard">
    <h1>Services List</h1>
    <p>
      Example fetching data from inside <code>getServerSideProps()</code>.
    </p>
    <p>You are currently on: /services</p>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const items: Service[] = sampleServiceData
  return { props: { items } }
}

export default ServicesPage
