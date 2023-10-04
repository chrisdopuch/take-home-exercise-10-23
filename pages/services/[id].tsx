import { GetServerSideProps } from "next";
import Link from "next/link";

import { OnCallEmployee, Service } from "../../interfaces";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";

type Props = {
  item?: Service;
  errors?: string;
  onCallEmployee: OnCallEmployee;
};

const ServiceDetailPage = ({ item, errors, onCallEmployee }: Props) => {
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
      title={`${item ? item.name : "Service Detail"} | Developer Dashboard`}
    >
      <p>
        ⚠️ Current on-call:{" "}
        <Link
          href="/onCallEmployees/[id]"
          as={`/onCallEmployees/${onCallEmployee.id}`}
        >
          {onCallEmployee.name}
        </Link>
      </p>
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default ServiceDetailPage;

// This function gets called at run time on server-side.
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    // fetch list of services and on-call employees from API
    const url = `http://${process.env.VERCEL_URL ? process.env.VERCEL_URL : "localhost:3000"}`;
    const [sampleServiceData, sampleOnCallEmployeeData] = await Promise.all([
      fetch(`${url}/api/services`).then((res) => res.json()),
      fetch(`${url}/api/onCallEmployees`).then((res) =>
        res.json(),
      ),
    ]);
    const id = params?.id;
    const item = sampleServiceData.find((data) => data.id === Number(id));
    const onCallEmployee: OnCallEmployee = sampleOnCallEmployeeData.filter(
      (employee) => employee.isOnCall === true,
    )[0];
    // By returning { props: item }, the ServiceDetailPage component
    // will receive `item` as a prop at build time
    return { props: { item, onCallEmployee } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
