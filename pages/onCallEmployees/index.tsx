import { GetStaticProps } from 'next'
import Link from 'next/link'

import { OnCallEmployee } from '../../interfaces'
import { sampleOnCallEmployeeData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: OnCallEmployee[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="On Call Employees List | Developer Dashboard">
    <h1>Employees List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /onCallEmployees</p>
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
  const items: OnCallEmployee[] = sampleOnCallEmployeeData
  return { props: { items } }
}

export default WithStaticProps
