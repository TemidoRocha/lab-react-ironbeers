import React, { Component } from 'react';
import { randomBeerFromApi } from '../../services/beers';
import NavBar from './../../components/NavBar';
import './style.scss';

class randomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      single: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    randomBeerFromApi()
      .then(beer => {
        this.setState({
          single: beer
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const beer = this.state.single;
    return (
      <div>
        <NavBar />
        <img className="single" src={beer.image_url} alt={beer.name} />
        <article className="singleInfo">
          <h1>{beer.name}</h1>
          <p>{beer.attenuation_level}</p>
        </article>
        <article className="singleInfo1">
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
        </article>
        <article className="singleInfo2">
          <p>{beer.description}</p>
          <small>Contributed by: {beer.contributed_by}</small>
        </article>
      </div>
    );
  }
}

export default randomBeer;
