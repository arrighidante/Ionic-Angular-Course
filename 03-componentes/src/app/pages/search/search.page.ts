import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {


  albums: any[] = [];
  searchTerm: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

  onSearchChange(event: any) {
    this.searchTerm = event.detail.value;
  }

}
