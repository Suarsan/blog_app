import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Post } from '../../../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostDaoService {

  constructor(private apollo: Apollo) { }

  public getMainPosts() {
    const getPosts = gql`
      query getPosts {
        getPosts {
          slug
          title
          image
          type
          read_time
          paragraphs {
            content
            html_tag
            classes
          }
        }
      }
    `;
    return this.apollo.watchQuery<Post>({query: getPosts }).valueChanges;
  }
  public getPost(slug) {
    const getPostBySlug = gql`
      query getPostBySlug($slug: String) {
        getPostBySlug(slug:$slug) {
          slug
          title
          image
          type
          read_time
          analysis {
            score
            pros
            cons
          }
          paragraphs {
            content
            html_tag
            classes
          }
        }
      }
    `;
    return this.apollo.watchQuery<Post>({
      query: getPostBySlug,
      variables: {
        slug
      }}).valueChanges;
  }
}
