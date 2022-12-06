import Link from "next/link";
import Layout from "../components/Layout";
import { useScroll } from "../hooks/useScroll";

const IndexPage = () => {
  const { ref } = useScroll<HTMLDivElement>("sec2");
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <div id="sec1" style={{ height: "600px" }}>
        <h2>SECTION 1</h2>
      </div>
      <div ref={ref} id="sec2" style={{ height: "600px" }}>
        <h2>SECTION 2</h2>
      </div>
      <div id="sec3" style={{ height: "600px" }}>
        <h2>SECTION 3</h2>
      </div>
      <p>
        <Link href="/about">About</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
