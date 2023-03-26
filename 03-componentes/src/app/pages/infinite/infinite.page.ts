import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  data: any[] = new Array(20);

  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll!: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }
  loadData(event: any) {
    // console.log(event);

    if (this.data.length > 120) {
      this.infiniteScroll.complete();
      this.infiniteScroll.disabled = true;
      return;
    };

    const nuevoArr = Array(20);
    this.data.push(...nuevoArr);

    setTimeout(() => {
      this.infiniteScroll.complete();
    }, 3500)
  }

}
