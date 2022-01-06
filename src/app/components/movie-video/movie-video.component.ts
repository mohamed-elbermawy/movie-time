import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-video',
  templateUrl: './movie-video.component.html',
  styleUrls: ['./movie-video.component.scss']
})
export class MovieVideoComponent implements OnInit {
  @Input() key: string | null = null;
  @Input() site: string = 'YouTube';
  safeUrl: SafeResourceUrl | null = null;

  constructor(private sinitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.key) {
      switch (this.site) {
        case 'YouTube':
          this.safeUrl = this.getSafeURL(`https://www.youtube.com/embed/${this.key}`);
          break;

        case 'Vimeo':
          this.safeUrl = this.getSafeURL(`https://www.vimeo.com/embed/${this.key}`);
          break;
      }
    }
  }

  getSafeURL(url: string) {
    return this.sinitizer.bypassSecurityTrustResourceUrl(url);
  }
}
