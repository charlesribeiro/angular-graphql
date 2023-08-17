import { Posts } from '../models/posts.model';

export const postsInitialState: Posts = {
  entities: [],
  loading: false,
  error: false,
  page: 0,
  totalCount: -1,
};
