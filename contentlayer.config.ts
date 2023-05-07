import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Article = defineDocumentType(() => ({
    name: "Article",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of the post",
            required: true,
        },
        author: {
            type: "string",
            description: "The author of the post",
            required: true,
        },
        summary: {
            type: "string",
            description: "The summary of the post",
            required: true,
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (article) => `/${article._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Article],
});
