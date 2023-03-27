import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {


  heroes!: Observable<any[]>;
  publisher: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.publisher);
    this.heroes = this.dataService.getHeroes();
  }

  ionSegmentChange(event: any) {
    console.log(event.detail.value);
    console.log(this.publisher);
    if (event.detail.value === 'all') {
      return this.publisher = '';
    }
    return this.publisher = event.detail.value;
  }

}
