export interface Posts {
  entities: PostData[];
  loading: boolean;
  error: boolean;
  page: number;
  totalCount: number;
}

export interface PostData {
  id: string;
  title: string;
  body: string;
  user: {
    name: string;
    username: string;
  };
}
