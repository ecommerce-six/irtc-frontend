export type articlePreviewType = {
  slug: string;
  title: string;
  cover: string;
  description: string;
};

export type articleCommentType = {};

export type articleType = {
  rate: number;
  time: string;
  slug: string;
  cover: string;
  title: string;
  readTime: string;
  likesCount: number;
  description: string;
  content: string | undefined;
  comments: articleCommentType[];
};

export type articlesFilterHandlerType = {
  time: string;
  basis: string;
};
