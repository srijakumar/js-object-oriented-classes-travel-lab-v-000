class Driver {
  constructor (name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
}


yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1);

    let totalYears = (endDate - this.startDate)/(1000*60*60*24*365);
    return Math.ceil(totalYears);
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avenueToInteger(avenue){
      return eastWest.indexOf(avenue)
    }
    blocksTravelled(){
      let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
      let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
      return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
    }


}
