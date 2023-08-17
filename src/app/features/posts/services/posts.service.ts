import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  GET_ALL_POSTS,
  GET_POSTS,
  GET_POSTS_BY_SEARCH,
  GET_SINGLE_POST,
} from '../../../graphql.operations';
import { ApolloQueryResult } from '@apollo/client/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private apollo: Apollo) {}

  getPosts(): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query: GET_POSTS,
    }).valueChanges;
  }

  getAllPosts(page: number, limit: number): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query: GET_ALL_POSTS,
      variables: {
        options: {
          paginate: {
            page,
            limit,
          },
        },
      },
    }).valueChanges as Observable<ApolloQueryResult<any>>;
  }

  searchPostsByTitle(
    title: string,
    page: number,
    limit: number
  ): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query: GET_POSTS_BY_SEARCH,
      variables: {
        options: {
          search: {
            q: title,
          },
          paginate: {
            page,
            limit,
          },
        },
      },
    }).valueChanges as Observable<ApolloQueryResult<any>>;
  }

  getSinglePost(
    id: number,
    page: number,
    limit: number
  ): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query: GET_SINGLE_POST,
      variables: {
        id,
        options: {
          paginate: {
            page,
            limit,
          },
        },
      },
    }).valueChanges;
  }

  createSinglePost(
    id: number,
    title: string,
    body: string
  ): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query: GET_SINGLE_POST,
      variables: {
        id,
        title,
        body,
      },
    }).valueChanges;
  }
}
