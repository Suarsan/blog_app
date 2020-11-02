import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class TagsDaoService {

  constructor(private apollo: Apollo) { }

  public getTags() {
    const getTags = gql`
      query getTags {
        getTags {
          id
          content
        }
      }
    `;
    return this.apollo.watchQuery({query: getTags }).valueChanges;
  }

}
