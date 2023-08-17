import { gql } from 'apollo-angular';

export const GET_POSTS = gql`
  query {
    post(id: 1) {
      id
      title
      body
    }
  }
`;

export const GET_ALL_POSTS = gql`
query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
    }
    meta {
      totalCount
    }
  }
}
`;

export const GET_SINGLE_POST = gql`
query (
  $id: ID!
){
  post(id: $id) {
    id
    title
    body
    user {
      name
      username
    }
    comments(options: { paginate: { page: 1, limit: 4 } }) {
      data {
        name
        email
        body
      }
    }
  }
}
`;