import React, { Component } from 'react'



const Card = ({location, stats}) => {
    const years = Object.keys(stats)
    const schoolData = years.map( year => {
      return <p className='data'>{year} : {stats[year]}</p>
    })
    return (
      <div className='card'>
        <h3 className='location'>{location}</h3>
           {schoolData}
      </div>
    )
  }

export default Card