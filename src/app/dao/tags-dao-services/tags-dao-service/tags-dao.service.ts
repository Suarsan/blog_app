import {Apollo, gql} from 'apollo-angular';
import { Injectable } from '@angular/core';



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
