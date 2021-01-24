import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.scss']
})
export class FootComponent implements OnInit {

  public varYear;

  constructor() { }

  ngOnInit(): void {
    let date = new Date();
    let year = date.getFullYear();
    this.varYear = year;
  }

}
