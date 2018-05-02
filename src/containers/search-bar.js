import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {

  constructor(props){

    super(props)

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(event){
    this.setState({term:event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault()
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }

  render(){
    return(
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input type="text" value={this.state.term} onChange={this.onInputChange} placeholder="Get a 5 day forecast" className="form-control"/>
          <span className ="input-group-btn">
            <button type="Submit" className="btn btn-primary">Submit</button>
          </span>

        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather },dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);