
class Driver {
  constructor( name, startDate) {
    this.name = name;
    this.startDate = new Date (startDate);
  }
  yearsExperienceFromBeginningOf(endDate){
      return endDate - this.startDate.getFullYear() - 1;
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
}