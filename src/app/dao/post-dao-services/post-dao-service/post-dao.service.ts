import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class PostDaoService {

  constructor(private apollo: Apollo) { }

  public getPost(slug) {
    const getPostBySlug = gql`
      query getPostBySlug($slug: String!) {
        getPostBySlug(slug:$slug) {
          id
          slug
          title
          image
          author {
            firstname
            lastname
          }
          type {
            id
            content
          }
          readTime
          analysis {
            score
            pros
            cons
          }
          paragraphs {
            content
            htmlTag {
              id
              content
            }
            classes
          }
          tags {
            content
          }
        }
      }
    `;
    return this.apollo.watchQuery({
      query: getPostBySlug,
      variables: {
        slug
      }}).valueChanges;
  }
  public getPostsByType(typeId) {
    const getPostsByType = gql`
      query getPostsByType($typeId: Int!) {
        getPostsByType(typeId:$typeId) {
          id
          slug
          title
          image
          readTime
          author {
            firstname
            lastname
          }
          type {
            id
            content
          }
          analysis {
            score
            pros
            cons
          }
          paragraphs {
            content
            htmlTag {
              id
              content
            }
            classes
          }
          tags {
            content
          }
        }
      }
    `;
    return this.apollo.watchQuery({
      query: getPostsByType,
      variables: {
        typeId
      }}).valueChanges;
  }
  public getPostsByParent(parentId) {
    const getPostsByParent = gql`
      query getPostsByParent($parentId: Int!) {
        getPostsByParent(parentId:$parentId) {
          id
          slug
          title
          image
          readTime
          author {
            firstname
            lastname
          }
          type {
            id
            content
          }
          analysis {
            score
            pros
            cons
          }
          paragraphs {
            content
            htmlTag {
              id
              content
            }
            classes
          }
          tags {
            content
          }
        }
      }
    `;
    return this.apollo.watchQuery({
      query: getPostsByParent,
      variables: {
        parentId
      }}).valueChanges;
  }
  public getPostsByAuthor(firstname, lastname) {
    const getPostsByAuthor = gql`
      query getPostsByAuthor($firstname: String!, $lastname: String!) {
        getPostsByAuthor(firstname:$firstname, lastname:$lastname) {
          id
          slug
          title
          image
          readTime
          author {
            firstname
            lastname
          }
          type {
            id
            content
          }
          analysis {
            score
            pros
            cons
          }
          paragraphs {
            content
            htmlTag {
              id
              content
            }
            classes
          }
          tags {
            content
          }
        }
      }
    `;
    return this.apollo.watchQuery({
      query: getPostsByAuthor,
      variables: {
        firstname,
        lastname
      }}).valueChanges;
  }
  public getPostsByTag(tag) {
    const getPostsByTag = gql`
      query getPostsByTag($tag: String!) {
        getPostsByTag(tag:$tag) {
          id
          slug
          title
          image
          readTime
          author {
            firstname
            lastname
          }
          type {
            id
            content
          }
          analysis {
            score
            pros
            cons
          }
          paragraphs {
            content
            htmlTag {
              id
              content
            }
            classes
          }
          tags {
            content
          }
        }
      }
    `;
    return this.apollo.watchQuery({
      query: getPostsByTag,
      variables: {
        tag
      }}).valueChanges;
  }
}
