import {User} from './User';

export class Job {
  id: number;
  name: string;
  level: number;
  jobType: JobType;
  users: User[];
}
