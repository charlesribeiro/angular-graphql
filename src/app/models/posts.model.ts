export interface Posts {
  entities: PostData[];
  loading: boolean;
  error: boolean;
}

export interface PostData {
  id: string;
  title: string;
  body: string;
}
