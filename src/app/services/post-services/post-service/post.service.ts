import { Injectable, isDevMode } from '@angular/core';
import { PostDaoService } from '../../../dao/post-dao-services/post-dao-service/post-dao.service';
import { map, tap } from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private postDaoService: PostDaoService) { }

  public getMainPosts() {
    return this.postDaoService.getMainPosts().pipe(
      tap(res => console.dir(res)),
      map(res => res['data']['getPosts'])
    );
  }

  public getPost(slug) {
    return this.postDaoService.getPost(slug).pipe(
      tap(res => console.dir(res)),
      map(post => post['data']['getPostBySlug'][0])
    );
  }
}
