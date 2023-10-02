import { GetServerSideProps } from 'next'

import { Service } from '../../interfaces'
import { sampleServiceData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import ListDetail from '../../components/ListDetail'

type Props = {
  item?: Service
  errors?: string
}

const ServiceDetailPage = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Developer Dashboard">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${
        item ? item.name : 'Service Detail'
      } | Developer Dashboard`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default ServiceDetailPage

// This function gets called at run time on server-side.
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const id = params?.id
    const item = sampleServiceData.find((data) => data.id === Number(id))
    // By returning { props: item }, the ServiceDetailPage component
    // will receive `item` as a prop at build time
    return { props: { item } }
  } catch (err: any) {
    return { props: { errors: err.message } }
  }
}
