import {Mount} from './Mount';
import {Activity} from './Activity';
import {Job} from './Job';

export class User {
  id: number;
  pseudo: string;
  jobDTO: Job[];
  activitiyDTO: Activity[];
  mountDTO: Mount[];
}
