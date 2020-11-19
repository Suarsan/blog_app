import { Component, OnInit, Inject, Optional, PLATFORM_ID } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { isPlatformServer } from '@angular/common';
import { Request, Response } from 'express';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(@Optional() @Inject(REQUEST) private request: Request,
              @Optional() @Inject(RESPONSE) private response: Response,
              @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      console.dir('enviando error');
      this.response.status(404);
    }
  }

}
