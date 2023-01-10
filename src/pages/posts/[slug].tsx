import Head from "next/head";
import { type GetStaticProps } from "next";

import { allDocContents, type DocContent } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import { BiArrowBack, BiEditAlt } from "react-icons/bi";
import CustomContainer from "@/ui/container";
import { CustomLink, ExternalLink } from "@/ui/link";
import Button from "@/ui/button";

const DocLayout = ({ doc }: { doc: DocContent }) => {
  const MDXContent = useMDXComponent(doc.body.code);
  return (
    <>
      <Head>
        <title>{doc.title} - Pablo Hdez</title>
      </Head>
      <CustomContainer>
        <div className="flex items-center justify-between">
          <CustomLink href="/blog" className="dark:text-gray-300 text-gray-900">
            <div className="flex items-center space-x-2">
              <BiArrowBack size={18} />
              <span>Blog</span>
            </div>
          </CustomLink>
          <div className="flex items-center space-x-5">
            <ExternalLink
              href={`https://github.com/pheralb/website/blob/main/posts/${doc.url
                .split("/")
                .slice(2)
                .join("/")}.mdx`}
              className="text-gray-400"
            >
              <BiEditAlt size={18} />
            </ExternalLink>
          </div>
        </div>
      </CustomContainer>
      <div className="max-w-4xl px-4 py-5 mx-auto md:py-14 md:px-0">
        <div className="pb-4 border-b dark:border-neutral-800 border-neutral-300">
          <h1 className="mb-2 text-4xl font-bold">{doc.title}</h1>
          <p className="text-xl dark:text-gray-400 text-gray-700">{doc.description}</p>
        </div>
        <article className="mt-8 prose max-w-none dark:prose-invert prose-h3:mb-0">
          <MDXContent components={{}} />
        </article>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const doc: DocContent = allDocContents.find(
    (post) => post._raw.flattenedPath === params?.slug
  ) as DocContent;
  return {
    props: {
      doc,
    },
  };
};

export async function getStaticPaths() {
  const paths: string[] = allDocContents.map((doc) => doc.url);
  return {
    paths,
    fallback: false,
  };
}

export default DocLayout;
