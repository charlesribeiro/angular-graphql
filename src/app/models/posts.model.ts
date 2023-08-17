export interface Posts {
  entities: PostData[];
  loading: boolean;
  error: false;
}

interface PostData {
  id: string;
  title: string;
}
