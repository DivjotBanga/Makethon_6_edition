import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-ads',
  templateUrl: './create-ads.component.html',
  styleUrls: ['./create-ads.component.scss']
})
export class CreateAdsComponent implements OnInit {

  constructor() { }
  fileuploaded = false;
  uploadedFilePath;
  baseUrl = 'http://192.168.43.211:8000/';
  ngOnInit() {
  }

  onFileComplete(data: any) {
    console.log(data); // We just print out data bubbled up from event emitter.
    this.uploadedFilePath = this.baseUrl + data;
    this.fileuploaded = true;
  }
}
