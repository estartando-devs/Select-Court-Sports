import { Schedule } from './schedule';

export class User{
  id?: string;
  displayName?: string;
  email: string;
  phoneNumber?: string;
  photoURL?: string;
  team?: string;
  schedules?: Array<Schedule>
}
