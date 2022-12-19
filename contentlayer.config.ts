import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-prism-plus";
import remarkGfm from "remark-gfm";

const Post = defineDocumentType(() => ({
  name: "DocContent",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: { rehypePlugins: [highlight], remarkPlugins: [remarkGfm] },
});
