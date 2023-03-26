import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage {

  public progress = 0;

  constructor() {

  }

  rangeChange(event: any) {
    console.log(event);
    this.progress = event.detail.value.upper / 100;
  }

}
