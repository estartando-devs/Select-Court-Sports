export class Filter{
  turn =  new Turn();
  date = new Date().getDate();
  day = new Date().getDate()
}

export class Turn{
  morning: false;
  evening: false;
  night: false;
}
