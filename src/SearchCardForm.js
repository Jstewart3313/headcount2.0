import React, { Component } from 'react'

class SearchCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
  }

  trackChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({location: value})
    this.props.searchCard(this.state.location)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({location: ''})
  }

  render() {
    return(
      <div>
      <form 
        classname='search-form'
        onSubmit={this.handleSubmit}
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
