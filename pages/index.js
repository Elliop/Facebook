import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";

export default function Home({ session }) {
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main></main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user props
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
