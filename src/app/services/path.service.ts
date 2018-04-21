import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';
import { isDevMode } from '@angular/core';

@Injectable()
export class PathService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  apiHost(): string {
    if (isDevMode()) {
      return 'http://localhost:8080';
    }
    let base = this.document.baseURI;

    if (base.endsWith('/')) {
      base = base.substring(0, base.length - 1);
    }

    return base;
  }

  apiBase(): string {
    return new URL('/api/', this.apiHost()).toString();
  }

  shareBase(): string {
    return new URL('share/', this.apiBase()).toString();
  }

  shareBySlug(slug: string): string {
    return new URL(slug, this.shareBase()).toString();
  }

  renditionBySlug(slug: string, renditionID: number): string {
    return [this.shareBySlug(slug), 'renditions', renditionID.toString()].join('/');
  }

}
