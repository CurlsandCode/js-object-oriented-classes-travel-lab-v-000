
class Driver {
  constructor( name, startDate) {
    this.name = name;
    this.startDate = new Date (startDate);
  }
  yearsExperienceFromBeginningOf(endDate){
      this.endDate = new Date(endDate);
    return endDate.getYear() - startDate.getYear();
  }

}
