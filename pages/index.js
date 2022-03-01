import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Trivial Tech</title>
        <meta
          name="description"
          content="A Blog app created using Next JS, Graph CMS, Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
