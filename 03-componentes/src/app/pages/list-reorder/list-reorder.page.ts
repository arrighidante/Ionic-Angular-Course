import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Spider-Man'];
  toggleReorder: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {
    event.detail.complete();
    console.log(this.personajes);

    const itemToMove = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemToMove);
  }

  reorder() {
    this.toggleReorder = !this.toggleReorder;
  }

}
