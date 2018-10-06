import Kinderdata from './data/kindergartners_in_full_day_program.js'


export default class DistrictRepository {
  constructor(kinderData) {
    this.kinderData = kinderData;
    this.stats = this.makeStats();
  }


  makeStats = () => {
    let district = this.kinderData.reduce((Unit, School) => {
      if (School.Data === 'N/A') {
        School.Data = 0;
      }
      if (!Unit[School.Location.toUpperCase()]) {
        Unit[School.Location.toUpperCase()] = {
          stats: {[School.TimeFrame]: Math.round(School.Data * 1000) / 1000},
          location: School.Location.toUpperCase()
        }
      }
      if (Unit[School.Location.toUpperCase()]) {
        Unit[School.Location.toUpperCase()].stats={
        ...Unit[School.Location.toUpperCase()].stats,
        [School.TimeFrame] : Math.round(School.Data * 1000) / 1000}
      }

      return Unit
    }, {})
    
    return district
  }



  findAverage = (location) => {
    const values = Object.values(this.stats[location].stats)
    const finalAvg = values.reduce( (avg, data) => {
      avg += data;

      return avg
    }, 0) / 11
    return Math.round(finalAvg * 1000) / 1000
  }


  compareDistrictAverages = (avg1, avg2) => {
    avg1 = avg1.toUpperCase();
    avg2 = avg2.toUpperCase();
     const average1 = this.findAverage(avg1);
     const average2 = this.findAverage(avg2);
     const roundedCompared = Math.round(average1 / average2 * 1000) / 1000



    return { [avg1]: average1, [avg2]: average2, "compared": roundedCompared }
  }

  findByName = (name) => {
    if (!name || !this.stats[name.toUpperCase()]) {
      return undefined
    }
    return this.stats[name.toUpperCase()]
  }

  findAllMatches = (name) => {
    let locations = Object.keys(this.stats)
    if (name === undefined) {
      return locations.map( location => this.stats[location])
    } else { 
      let locationsFiltered = locations.filter( location => 
        location.includes(name.toUpperCase())
      )
    return locationsFiltered.map( location => this.stats[location])
    }}
}









