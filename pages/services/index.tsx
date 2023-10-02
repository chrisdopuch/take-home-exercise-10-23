import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Service } from '../../interfaces'
import { sampleServiceData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: Service[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Services List | Developer Dashboard">
    <h1>Services List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /services</p>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Service[] = sampleServiceData
  return { props: { items } }
}

export default WithStaticProps
