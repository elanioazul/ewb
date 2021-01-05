import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public varYear;

  constructor() { }

  ngOnInit(): void {
    let date = new Date();
    let year = date.getFullYear();
    this.varYear = year;
  }


}
