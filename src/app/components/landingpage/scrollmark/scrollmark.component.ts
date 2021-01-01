import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollmark',
  templateUrl: './scrollmark.component.html',
  styleUrls: ['./scrollmark.component.scss']
})
export class ScrollmarkComponent implements OnInit {

  //public bar: any;
  public list: HTMLCollectionOf<Element>;

  constructor() { }

  // ngOnInit(): void {
  //   this.bar = document.querySelectorAll(".progress");
  //   window.addEventListener("scroll", () => {
  //     let max = document.body.scrollHeight - innerHeight;
  //     this.bar.style.width = `${(pageYOffset / max) * 100}%`
  //   })
  // }

  ngOnInit(): void {
    let list = document.getElementsByClassName('progress');
    window.addEventListener("scroll", () => {
      let max = document.body.scrollHeight - innerHeight;
      // Array.from(list).forEach((element) => {
      //   element.style.width = `${(pageYOffset / max) * 100}%`;
      // })
      for (let item of this.list[Symbol.iterator]()) {
        console.log(item.id);
      }
    })
  }

  //https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements

}
