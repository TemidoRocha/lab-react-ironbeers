import React, { Component } from 'react';
import { listOfBeersFromApi } from './../../services/beers';
import { Link } from 'react-router-dom';
import NavBar from './../../components/NavBar';
import './style.scss';

class listBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfBeers: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    listOfBeersFromApi()
      .then(listOfBeers => {
        this.setState({
          listOfBeers
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const listOfBeers = this.state.listOfBeers;
    return (
      <div>
        <NavBar />

        {listOfBeers.map(beer => (
          <Link className="listOfBeers" to={`/beer/${beer._id}`} key={beer._id}>
            <div className="articleImage">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <article>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <small>Contributed by: {beer.contributed_by}</small>
            </article>
          </Link>
        ))}
      </div>
    );
  }
}

export default listBeers;
