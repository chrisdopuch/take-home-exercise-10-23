import { GetServerSideProps } from "next";
import Link from "next/link";

import { OnCallEmployee } from "../../interfaces";
import Layout from "../../components/Layout";
import List from "../../components/List";

type Props = {
  items: OnCallEmployee[];
};

const OnCallEmployeesPage = ({ items }: Props) => (
  <Layout title="On Call Employees List | Developer Dashboard">
    <h1>Employees List</h1>
    <p>You are currently on: /onCallEmployees</p>
    <List items={items} objectType="onCallEmployees" />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const url = `http://${process.env.VERCEL_URL ? process.env.VERCEL_URL : "localhost:3000"}/api/onCallEmployees`;
    const sampleOnCallEmployeeData = await fetch(
      url,
    ).then((res) => res.json());
    const items: OnCallEmployee[] = sampleOnCallEmployeeData;
    return { props: { items } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};

export default OnCallEmployeesPage;
