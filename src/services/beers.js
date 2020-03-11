import axios from 'axios';

const listOfBeersFromApi = () =>
  new Promise((resolve, reject) =>
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then(result => {
        const products = result.data;
        resolve(products);
      })
      .catch(reject)
  );
const singleBeerFromApi = id =>
  new Promise((resolve, reject) =>
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then(result => {
        const products = result.data;
        resolve(products);
      })
      .catch(reject)
  );
const randomBeerFromApi = id =>
  new Promise((resolve, reject) =>
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(result => {
        const products = result.data;
        resolve(products);
      })
      .catch(reject)
  );
const createBeer = (name, tagline, description, brewers_tip, attenuation_level, contributed_by) =>
  new Promise((resolve, reject) =>
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: name,
        tagline: tagline,
        description: description,
        brewers_tip: brewers_tip,
        attenuation_level: attenuation_level,
        contributed_by: contributed_by
      })
      .then(result => {
        console.log(result);
        // const products = result.data;
        // resolve(products);
      })
      .catch(reject)
  );

export { listOfBeersFromApi, singleBeerFromApi, randomBeerFromApi, createBeer };
