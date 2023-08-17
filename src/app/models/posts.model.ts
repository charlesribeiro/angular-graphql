export interface Posts {
  entities: PostData[];
  loading: boolean;
  error: boolean;
  page: number;
  totalCount: number;
  detailedPost: DetailedPost;
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

export interface DetailedPost {
  id: string;
  title: string;
  body: string;
  user: {
    name: string;
    username: string;
  };
  comments: {
    data: [
      {
        name: string;
        email: string;
        body: string;
      },
    ];
  };
}
