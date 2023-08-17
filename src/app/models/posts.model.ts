export interface Posts {
  entities: PostData[];
  loading: boolean;
  error: boolean;
  page: number;
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
