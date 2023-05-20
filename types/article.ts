export type articlePreviewType = {
  slug: string;
  title: string;
  cover: string;
  description: string;
};

export type articleCommentType = {};

export type articleType = {
  id?: number;
  rate: number;
  time: string;
  slug: string;
  cover: string;
  title: string;
  content: string;
  readTime: string;
  likesCount: number;
  description: string;
  comments: articleCommentType[];
};

export type articlesFilterHandlerType = {
  time: string;
  basis: string;
};
