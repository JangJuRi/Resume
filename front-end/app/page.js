import Layout from "@/pages/common/Layout";
import Main from "@/pages/Main";
import "../assets/css/template.css"

export default function Home() {
  return (
      <div className="container-fluid p-0">
        <Layout>
          <Main/>
        </Layout>
      </div>
  );
}
