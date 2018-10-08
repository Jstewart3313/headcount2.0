import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  trackChange = (event) => {
    const { value } = event.target;
    this.setState({location: value});
    this.props.searchCard(this.state.location);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({location: ''});
  }

  render() {
    return (
      <div>
        <form 
          className='search-form'
          onSubmit={this.handleSubmit}
        >
          <input 
            className='search-input'
            value={this.state.location}
            placeholder='Search'
            name= 'location'
            onChange={this.trackChange}
          />
        </form>
      </div>
    );
  }
}

SearchCardForm.propTypes = {
  searchCard: PropTypes.func
};

export default SearchCardForm;
