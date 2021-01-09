import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authority',
  templateUrl: './authority.component.html',
  styleUrls: ['./authority.component.scss']
})
export class AuthorityComponent implements OnInit {

  public varYear;

  constructor() { }

  ngOnInit(): void {
    let date = new Date();
    let year = date.getFullYear();
    this.varYear = year;
  }

}
