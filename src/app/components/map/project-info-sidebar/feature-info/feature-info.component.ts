import { Component, OnInit, Input } from '@angular/core';
import { Feature } from 'ol';

@Component({
  selector: 'app-feature-info',
  templateUrl: './feature-info.component.html',
  styleUrls: ['./feature-info.component.scss']
})
export class FeatureInfoComponent implements OnInit {

  @Input() feature: any;


  constructor() { }

  ngOnInit(): void {
  }

}
