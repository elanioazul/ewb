import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollmark',
  templateUrl: './scrollmark.component.html',
  styleUrls: ['./scrollmark.component.scss']
})
export class ScrollmarkComponent implements OnInit {

  public bar: any;

  constructor() { }

  ngOnInit(): void {
    this.bar = document.getElementsByClassName('progress')[0];
    window.addEventListener("scroll", () => {
      let max = document.body.scrollHeight - innerHeight;
      this.bar.style.width = `${(pageYOffset / max) * 100}%`;
    })
  }

  //https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements
  //https://github.com/microsoft/TypeScript/issues/3263

}
