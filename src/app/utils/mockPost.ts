import { PostData } from '../models/posts.model';

export const mockPost: PostData = {
  id: '1',
  title: 'mockTitle',
  body: 'mockBody',
  user: {
    username: 'userName',
    name: 'mock name',
  },
};
