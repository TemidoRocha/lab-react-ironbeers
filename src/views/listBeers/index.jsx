import React, { Component } from 'react';
import { listOfBeersFromApi } from './../../services/beers';
import { Link } from 'react-router-dom';


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
        {listOfBeers.map(beer => (
          <Link to={`/beer/${beer._id}`} key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <article>
              <strong>
                <h1>{beer.name}</h1>
              </strong>
              <p>{beer.tagline}</p>
              <strong>
                <small>Contributed by: </small>
                {beer.contributed_by}
              </strong>
            </article>
          </Link>
        ))}
      </div>
    );
  }
}

export default listBeers;
