import { gql } from "apollo-angular"


export const GET_POSTS = gql`
query {
    post(id: 1) {
      id
      title
      body
    }
  }
`