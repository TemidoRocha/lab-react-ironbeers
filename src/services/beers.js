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

export { listOfBeersFromApi };
