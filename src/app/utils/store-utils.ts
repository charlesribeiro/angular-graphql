import { Posts } from '../models/posts.model';

export const postsInitialState: Posts = {
  entities: [],
  loading: false,
  error: false,
  page: 1,
  totalCount: -1,
  detailedPost: {
    id: '',
    title: '',
    body: '',
    user: {
      name: '',
      username: '',
    },
    comments: {
      data: [{ name: '', email: '', body: '' }],
    },
  },
};
