import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-loyalty-cookies',
  templateUrl: './loyalty-cookies.component.html',
  styleUrls: ['./loyalty-cookies.component.scss']
})
export class LoyaltyCookiesComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this._setMetaInfo();
  }

  private _setMetaInfo() {
    this.seoService.setTitle('Política de cookies · camisetasbaiscas.online');
    this.seoService.setMetaTags({
      title: 'Política de cookies · camisetasbaiscas.online',
      description: 'Toda la información disponible acerca de las cookies y políticas asociadas del sitio www.camisetasbasicas.online',
      slug: 'cookies'
    });
  }
}
