import {Time} from '@angular/common';
import {Mount} from './Mount';

export class Activity {
  id: number;
  name: string;
  exp: Experience;
  memoquartz: number;
  activityType: ActivityType;
  mount: Mount;
  length: Time;
  recurency: Recurency;
  done: boolean;
}
