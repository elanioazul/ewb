import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-select-tolist',
  templateUrl: './select-tolist.component.html',
  styleUrls: ['./select-tolist.component.scss']
})
export class SelectTolistComponent implements OnInit {

  datasets: any = ['water existing locations', 'water potential locations', 'sanitation exisiting locations', 'sanitation potential locations']

  @Output() changeEvent = new EventEmitter<string>();

  constructor(public fb: FormBuilder) { }

  myForm = this.fb.group({
    mycontrol: ['']
  })

  changeDesire(e) {
    this.myForm.get('mycontrol').setValue(e.target.value, {
      onlySelf: true
    })
    // this.myForm.get('mycontrol').valueChanges.subscribe((e) => {
    //   this.userSelection.emit(e.target.value)
    // })
    //console.log('selections is : ' + e.target.value)
    this.changeEvent.emit(e.target.value)
  }

  ngOnInit(): void {
  }

}
