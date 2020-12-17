import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-loyalty-privacy',
  templateUrl: './loyalty-privacy.component.html',
  styleUrls: ['./loyalty-privacy.component.scss']
})
export class LoyaltyPrivacyComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this._setMetaInfo();
  }

  private _setMetaInfo() {
    this.seoService.setMetaTags({
      title: 'Políticas de privacidad · camisetasbaiscas.online',
      description: 'Toda la información disponible acerca de los políticas de privacidad asociadas al sitio www.camisetasbasicas.online',
      slug: 'privacy'
    });
  }
}
