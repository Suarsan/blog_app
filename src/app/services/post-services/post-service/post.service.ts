import { Injectable } from '@angular/core';
import { PostDaoService } from '../../../dao/post-dao-services/post-dao-service/post-dao.service';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private postDaoService: PostDaoService) { }

  public getPost(slug) {
    return this.postDaoService.getPost(slug).pipe(
      map(o => o['data']['getPostBySlug'])
    );
  }
  public getLastReviews() {
    return this.postDaoService.getPostsByType(1).pipe(
      map(o => o['data']['getPostsByType'])
    );
  }
  public getBrands() {
    return this.postDaoService.getPostsByType(4).pipe(
      map(o => o['data']['getPostsByType'])
    );
  }
  public getPostsByParent(parentId) {
    return this.postDaoService.getPostsByParent(parentId).pipe(
      map(o => o['data']['getPostsByParent'])
    );
  }
  public getPostsByAuthor(firstname, lastname) {
    return this.postDaoService.getPostsByAuthor(firstname, lastname).pipe(
      map(o => o['data']['getPostsByAuthor'])
    );
  }
  public getPostsByTag(tag) {
    return this.postDaoService.getPostsByTag(tag).pipe(
      map(o => o['data']['getPostsByTag'])
    );
  }
  public getPostsByTags(tags) {
    return this.postDaoService.getPostsByTags(tags).pipe(
      map(o => o['data']['getPostsByTags'])
    );
  }
  public getPostsByScore() {
    return this.postDaoService.getPostsByScore().pipe(
      map(o => o['data']['getPostsByScore'])
    );
  }
}
