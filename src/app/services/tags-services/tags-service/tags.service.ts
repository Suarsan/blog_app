import { Injectable } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/internal/operators/map';
import { TagsDaoService } from 'src/app/dao/tags-dao-services/tags-dao-service/tags-dao.service';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private tagsDaoService: TagsDaoService) { }

  public getTags() {
    return this.tagsDaoService.getTags().pipe(
      tap(o => o['data']['getTags']),
      map(o => o['data']['getTags'])
    );
  }
}
