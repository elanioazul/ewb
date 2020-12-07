import { Injectable } from '@angular/core';
import { Imagen } from '../../app/types/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photos: Imagen[] =[
    {
      title:'Baseline survey',
      subtitle: 'Form filling out by locals in a socialization meeting',
      src: 'men_survey_1.jpg',
      desc: 'asasa yes oo asasasassssssd dddsd d d sd  e',
      comments: 'ssaaas',
      date: 'Jan 2019',
      category: 'Baseline survey'

    },
    {
      title:'Baseline survey',
      subtitle: 'Form filling out by locals in their homes',
      src: 'men_survey_4.jpg',
      desc: 'osoasoaisi aisiss isdhjdj a ahhdhd ',
      comments: 'ssaaas',
      date: 'Jan 2019',
      category: 'Baseline survey'
    },
    {
      title:'Socialization',
      subtitle: 'Socialization meeting with water comitte, chief and local partner',
      src: 'sociabilizacion_1.jpg',
      desc: 'asasa',
      comments: 'ssaaas',
      date: 'Jan 2019',
      category: 'Baseline survey'
    },
    {
      title:'Utilities',
      subtitle: 'Some of the sanitation facilities to be renovated',
      src: 'sanitation_1.jpg',
      desc: 'asasa',
      comments: 'ssaaas',
      date: '02/10/2019',
      category: 'mWater survey'
    },
    {
      title:'Utilities',
      subtitle: 'Some of the water facilities to be renovated',
      src: 'water_2.jpg',
      desc: 'asasa',
      comments: 'ssaaas',
      date: 'Oct 2019',
      category: 'mWater survey'
    },
    {
      title:'Utilities',
      subtitle: 'Some of the water facilities to be renovated',
      src: 'water_3.jpg',
      desc: 'asasa',
      comments: 'ssaaas',
      date: 'Oct 2019',
      category: 'mWater survey'
    }
]

  constructor() { }
}
