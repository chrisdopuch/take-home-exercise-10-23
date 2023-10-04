import { GetServerSideProps } from "next";

import { OnCallEmployee } from "../../interfaces";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";

type Props = {
  item?: OnCallEmployee;
  errors?: string;
};

const OnCallEmployeeDetailPage = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Developer Dashboard">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${item ? item.name : "On Call Employee Detail"
        } | Developer Dashboard`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default OnCallEmployeeDetailPage;

// This function gets called at run time on server-side.
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const url = `http://${process.env.VERCEL_URL ? process.env.VERCEL_URL : "localhost:3000"}/api/onCallEmployees`;
    const sampleOnCallEmployeeData = await fetch(
      url,
    ).then((res) => res.json());

    const id = context.query?.id;
    const item = sampleOnCallEmployeeData.find(
      (data) => data.id === Number(id),
    );
    // By returning { props: item }, the OnCallEmployeeDetailPage component
    // will receive `item` as a prop at run time
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
