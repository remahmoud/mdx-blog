import Head from "next/head";
import Layout from "@/components/Layout";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allArticles, Article } from "contentlayer/generated";
import type { NextPage, GetStaticProps, GetStaticPropsContext } from "next";

type ArticlePageProps = {
    article: Article;
};

const ArticlePage: NextPage<ArticlePageProps> = ({ article }) => {
    const Component = useMDXComponent(article.body.code);
    return (
        <Layout>
            <Head>
                <title>{article.title}</title>
            </Head>
            <article className="prose max-w-full p-4 shadow rounded-md border border-gray-100">
                <h1 className="text-center">{article.title}</h1>
                <Component />
            </article>
        </Layout>
    );
};

export async function getStaticPaths() {
    // get all paths
    const paths = allArticles.map((article) => article.url);
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = (
    context: GetStaticPropsContext
) => {
    // get article by slug
    const article = allArticles.find(
        (article) => article._raw.flattenedPath === context?.params?.slug
    );
    return { props: { article } };
};

export default ArticlePage;
