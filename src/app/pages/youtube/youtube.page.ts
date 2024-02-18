import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.page.html',
  styleUrls: ['./youtube.page.scss'],
})
export class YoutubePage {
  videoUrl : string = "https://www.youtube.com/embed/lbZJxO3n7-g";
  constructor(private sanitizer:DomSanitizer) { }

  showVideo(video:any){
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }
}
