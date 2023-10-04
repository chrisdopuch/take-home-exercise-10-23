import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About | Developer Dashboard">
    <h1>About</h1>
    <p>This site is a developer dashboard for Company ABC.</p>
    <p>
      Github repo:{" "}
      <a href="https://github.com/chrisdopuch/take-home-exercise-10-23">
        Developer Dashboard
      </a>
    </p>
    <p>Contributions are welcome!</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export default AboutPage;
