import React, { Component } from 'react';
import { createBeer } from './../../services/beers';
import NavBar from './../../components/NavBar';
import './style.scss';

class newBeer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tagline: '',
      description: '',
      brewers_tip: '',
      attenuation_level: 0,
      contributed_by: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.postData = this.postData.bind(this);
  }

  postData(e) {
    e.preventDefault();
    createBeer(
      this.state.name,
      this.state.tagline,
      this.state.description,
      this.state.brewers_tip,
      this.state.attenuation_level,
      this.state.contributed_by
    );
    this.props.history.push('/');
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar />
        <form onSubmit={this.postData}>
          <label htmlFor="name">Name</label>
          <input
            className="inputSearch"
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            className="inputSearch"
            type="text"
            name="tagline"
            placeholder="Tagline"
            value={this.state.tagline}
            onChange={this.handleInputChange}
          />
          <label htmlFor="description">Description</label>
          <textarea
            className="inputSearch"
            name="description"
            placeholder="Message"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <label htmlFor="brewers_tip">Brewers Tip</label>
          <input
            className="inputSearch"
            type="text"
            name="brewers_tip"
            placeholder="Brewers Tip"
            value={this.state.brewers_tip}
            onChange={this.handleInputChange}
          />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            className="inputSearch"
            type="number"
            name="attenuation_level"
            placeholder="Attenuation Level"
            value={this.state.attenuation_level}
            onChange={this.handleInputChange}
          />
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            className="inputSearch"
            type="text"
            name="contributed_by"
            placeholder="Contributed by"
            value={this.state.contributed_by}
            onChange={this.handleInputChange}
          />
          <button>Send Message</button>
        </form>
      </div>
    );
  }
}

export default newBeer;
