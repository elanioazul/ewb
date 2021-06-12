import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-select-tolist',
  templateUrl: './select-tolist.component.html',
  styleUrls: ['./select-tolist.component.scss']
})
export class SelectTolistComponent implements OnInit {

  datasets: any = ['water-e', 'water-p', 'sanitation-e', 'sanitation-p']

  constructor(public fb: FormBuilder) { }

  myForm = this.fb.group({
    mycontrol: ['']
  })

  onSubmit() {
    alert(JSON.stringify(this.myForm.value))
  }

  changeDesire(e) {
    this.myForm.get('mycontrol').setValue(e.target.value, {
      onlySelf: true
    })
  }

  ngOnInit(): void {
  }

}
