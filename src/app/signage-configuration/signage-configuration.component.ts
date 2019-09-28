import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { UiServiceService } from '../ui-service.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-signage-configuration',
  templateUrl: './signage-configuration.component.html',
  styleUrls: ['./signage-configuration.component.scss']
})
export class SignageConfigurationComponent implements OnInit {
  baseUrl = 'http://192.168.43.211:8000/';
  tiles: Tile[] = [
    { text: '', cols: 4, rows: 1, color: 'lightblue' },
    { text: '', cols: 2, rows: 1, color: 'lightgreen' },
    { text: '', cols: 2, rows: 1, color: 'lightpink' }
  ];
  ads = [];
  templateData = [];
  constructor(private httpClient: HttpClient, private ui: UiServiceService) { }
  get_ads() {
    this.ui.spin$.next(true);
    this.httpClient.get('/api/ads?dataBy=type').subscribe((res: any) => {
      console.log(res);
      this.ads = res;
      this.ui.spin$.next(false);
    }, (error) => {
      this.ui.spin$.next(false);
    });
  }
  save_ads_layout() {
    this.httpClient.post('/api/ads', this.templateData[0]).subscribe((res: any) => {
      console.log(res);
      this.ads = res;
    });
  }
  ngOnInit() {
    this.get_ads();
  }
  modifyTemplateData(value, index) {
    this.templateData.splice(index, 1, value);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // transferArrayItem(event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex);
      event.container.data[event.currentIndex]['text'] = event.previousContainer.data[event.previousIndex]['text'];
      event.previousContainer.data.splice(event.previousIndex, 1);
    }
  }
  dropOnDiv(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  saveTemplate() {
    this.save_ads_layout();
  }

}
