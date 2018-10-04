import React, { Component } from 'react'

class SearchCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
  }

  trackChange = (event) => {
    const { value } = event.target;
    this.setState({location: value})
    this.props.searchCard(this.state.location)
  }

  render() {
    return(
      <div>
      <form 
        classname='search-form'
        onSubmit=''
      >
        <input 
          value={this.state.location}
          placeholder='Search'
          name= 'location'
          onChange={this.trackChange}
        />
      </form>
      </div>
    )
  }











}

export default SearchCardForm
