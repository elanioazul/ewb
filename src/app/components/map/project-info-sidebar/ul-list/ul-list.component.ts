import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { WaterService } from '../../../../services/water.service';
import { SanitationService } from '../../../../services/sanitation.service';

@Component({
  selector: 'app-ul-list',
  templateUrl: './ul-list.component.html',
  styleUrls: ['./ul-list.component.scss']
})
export class UlListComponent implements OnInit, OnChanges {

  @Input() datasetToList: string;

  constructor(public waterS: WaterService, public sanitationS: SanitationService) { }



  ngOnInit(): void {
    //console.log('this is the waterS :' + JSON.stringify(this.waterS.getWaterExistingData))
  }

  ngOnChanges() {
    console.log('comp para listar va a listar :' + this.datasetToList)
  }

}
