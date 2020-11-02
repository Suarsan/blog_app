import { Injectable } from '@angular/core';
import { PostDaoService } from '../../../dao/post-dao-services/post-dao-service/post-dao.service';
import { map,  tap} from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private postDaoService: PostDaoService) { }

  public getPost(slug) {
    return this.postDaoService.getPost(slug).pipe(
        tap(o => console.dir(o)),
        map(o => o['data']['getPostBySlug'])
    );
  }
  public getLastReviews() {
    return this.postDaoService.getPostsByType(1).pipe(
      tap(o => console.dir(o)),
      map(o => o['data']['getPostsByType'])
    );
  }
  public getBrands() {
    return this.postDaoService.getPostsByType(4).pipe(
      tap(o => console.dir(o)),
      map(o => o['data']['getPostsByType'])
    );
  }
  public getPostsByParent(parentId) {
    return this.postDaoService.getPostsByParent(parentId).pipe(
      tap(o => console.dir(o)),
      map(o => o['data']['getPostsByParent'])
    );
  }
  public getPostsByAuthor(firstname, lastname) {
    return this.postDaoService.getPostsByAuthor(firstname, lastname).pipe(
      tap(o => console.dir(o)),
      map(o => o['data']['getPostsByAuthor'])
    );
  }
  public getPostsByTag(tag) {
    return this.postDaoService.getPostsByTag(tag).pipe(
      tap(o => console.dir(o)),
      map(o => o['data']['getPostsByTag'])
    );
  }
}
