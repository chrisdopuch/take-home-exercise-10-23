import { GetServerSideProps } from "next";
import Link from "next/link";

import { OnCallEmployee, Service } from "../../interfaces";
import {
  sampleServiceData,
  sampleOnCallEmployeeData,
} from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: Service[];
  onCallEmployee: OnCallEmployee;
};

const ServicesPage = ({ items, onCallEmployee }: Props) => (
  <Layout title="Services List | Developer Dashboard">
    <p>
      ⚠️ Current on-call:{" "}
      <Link
        href="/onCallEmployees/[id]"
        as={`/onCallEmployees/${onCallEmployee.id}`}
      >
        {onCallEmployee.name}
      </Link>
    </p>
    <h1>Services List</h1>
    <p>You are currently on: /services</p>
    <List items={items} objectType="services" />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const items: Service[] = sampleServiceData;
  const onCallEmployee: OnCallEmployee = sampleOnCallEmployeeData.filter(
    (employee) => employee.isOnCall === true,
  )[0];
  return { props: { items, onCallEmployee } };
};

export default ServicesPage;
