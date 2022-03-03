import Head from "next/head";
import { PostCard, Categories } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title> Trivial Tech </title>
        <meta
          name="description"
          content="A Blog app created using Next JS, Graph CMS, Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:flex 2xl:ml-16">
        <div className="col-span-1 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:pr-8">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="col-span-1">
          <div className="top-8 relative lg:sticky">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
