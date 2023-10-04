import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Developer Dashboard">
    <h1>Company ABC Developer Dashboard Site</h1>
    <ul>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/services">Services</Link>
      </li>
      <li>
        <Link href="/onCallEmployees">Employees</Link>
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
