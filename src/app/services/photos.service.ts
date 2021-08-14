import { Injectable } from '@angular/core';
import { Imagen } from '../../app/types/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  photosArray: Imagen[] =[
    {
      title:'Baseline survey',
      subtitle: 'Form filling out by locals in a socialization meeting',
      src: 'men_survey_1.jpg',
      desc: 'Some of the questions asked where: What type of toilet does your household use most of the time?; Which category best describes your household monthly income?; What is the main source of drinking water for your household during the dry season?; If you transport your water, what do you most often use to transport it?; How many families use this toilet facility? ...	',
      comments: 'The assessment was aimed at examining the existing water, sanitation, and hygiene (WASH) conditions including infrastructure in Garzah community.',
      date: 'Jan 2019',
      category: 'Baseline survey'

    },
    {
      title:'Baseline survey',
      subtitle: 'Form filling out by locals in their homes',
      src: 'men_survey_4.jpg',
      desc: 'The form asked to inhabitants about issues concerning access to water and hygiene facilities. Time to complete the entirely form was about 20 minutes. Participation was voluntary.',
      comments: 'Local partner perople were present all the time so participants could ask doubts about questions asked.',
      date: 'Jan 2019',
      category: 'Baseline survey'
    },
    {
      title:'Socialization',
      subtitle: 'Socialization meeting with water comitte, chief and local partner',
      src: 'sociabilizacion_1.JPG',
      desc: 'The Monrovia Entrepreneurs Network was able to successfully access Garza Community due to its close cooperation and good relations with community leaders and the inhabitants. This provided an environment for frank and open discussions about the challenges the community is facing and possible solutions.',
      comments: 'Upon getting consent, a team of M.E.N volunteers were sent to Garza to conduct a household survey.',
      date: 'Jan 2019',
      category: 'Baseline survey'
    },
    {
      title:'Sanitation facilities',
      subtitle: 'Example of the sanitation facilities to be renovated',
      src: 'sanitation_1.jpg',
      desc: 'Four enumerators profiles where set up to conduct the 4 geosurveys proposed to assess current state of facilitites and water points to get a better understanding of the situation.',
      comments: 'The conditions are very bad, specially some of the sanitation facilities. 4 sanitation points were showed. All are unprotected (excrement migrates through soil and water). All are collapsed and filled out, specially two, closed currently. Plastic drum urine diverting dry toilet where initially thought as a proposel. This way seat provides reduction of 2/3 of the mass and 1/3 of the area and pedestal will increase in length to ease urinating and squatting both for men and women.',
      date: 'Oct 2019',
      category: 'mWater survey'
    },
    {
      title:'Water utilities',
      subtitle: 'Example of the water facilities to be renovated',
      src: 'water_1.jpg',
      desc: 'Only 4 out of 35 water points are well hand pumps. Two are dry, one is functioning fine and last one is located in a defecation area. 3 out of 35 water points are river/streams. 23 unprotected open pits (hand dug likely. Some partially bricked. 5 protected pits (hand dug likely. Some partially bricked.',
      comments: 'An idea of the available water sources was needed. Usually surface sources are the last option. Ideal option in a development context are springs.',
      date: 'Oct 2019',
      category: 'mWater survey'
    },
    {
      title:'Water utilities',
      subtitle: 'Example of the water facilities to be renovated',
      src: 'water_3.jpg',
      desc: 'Only 4 out of 35 water points are well hand pumps. Two are dry, one is functioning fine and last one is located in a defecation area. 3 out of 35 water points are river/streams. 23 unprotected open pits (hand dug likely. Some partially bricked. 5 protected pits (hand dug likely. Some partially bricked.',
      comments: 'An idea of the available water sources was needed. Usually surface sources are the last option. Ideal option in a development context are springs.',
      date: 'Oct 2019',
      category: 'mWater survey'
    }
]

  constructor() { }
}
