import { allArticles, Article } from "contentlayer/generated";
import Head from "next/head";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Layout from "@/components/Layout";

type HomeProps = {
    articles: Article[];
};

export async function getStaticProps() {
    return { props: { articles: allArticles } };
}

const Home: NextPage<HomeProps> = ({ articles }) => {
    const router = useRouter();
    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <div className="grid grid-cols-2 gap-4 hover:cursor-pointer">
                {articles.map((article, idx) => (
                    <div
                        className="p-4 shadow rounded-md border border-gray-100 flex flex-col gap-2"
                        key={idx}
                        onClick={() => router.push(article.url)}
                    >
                        <h2 className="text-3xl font-semibold">
                            {article.title}
                        </h2>
                        <p>{article.summary}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
};
export default Home;
