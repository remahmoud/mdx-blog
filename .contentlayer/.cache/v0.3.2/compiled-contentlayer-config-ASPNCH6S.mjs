// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    author: {
      type: "string",
      description: "The author of the post",
      required: true
    },
    summary: {
      type: "string",
      description: "The summary of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (article) => `/${article._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Article]
});
export {
  Article,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ASPNCH6S.mjs.map
