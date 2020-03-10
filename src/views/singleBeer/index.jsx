import React, { Component } from 'react';
import { listOfBeersFromApi } from '../../services/beers';

class singleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      single: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    listOfBeersFromApi()
      .then(listOfBeers => {
        console.log(this.props.match.prams.id, 'hi');
        const single = listOfBeers.find(beer => beer.id === this.props.match.prams.id);
        this.setState({
          single
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.props.match.params.id, 'state: ' + this.state);
    return <div>singleBeer</div>;
  }
}

export default singleBeer;
