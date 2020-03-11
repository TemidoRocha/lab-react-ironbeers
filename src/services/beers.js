import axios from 'axios';

const listOfBeersFromApi = async () => {
  try {
    const result = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const beerSearch = async query => {
  try {
    const beerSearch = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
    );
    return beerSearch.data;
  } catch (error) {
    console.log(error);
  }
};

const singleBeerFromApi = async id => {
  try {
    const singleBeer = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
    return singleBeer.data;
  } catch (error) {
    console.log(error);
  }
};

const randomBeerFromApi = async id => {
  try {
    const randomBeer = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
    return randomBeer.data;
  } catch (error) {
    console.log(error);
  }
};

const createBeer = async (
  name,
  tagline,
  description,
  brewers_tip,
  attenuation_level,
  contributed_by
) => {
  try {
    const createBeerNow = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      name: name,
      tagline: tagline,
      description: description,
      brewers_tip: brewers_tip,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by
    });
    return console.log(createBeerNow);
  } catch (error) {
    console.log(error);
  }
};

export { listOfBeersFromApi, singleBeerFromApi, randomBeerFromApi, createBeer, beerSearch };

//using promises
// const listOfBeersFromApi = () =>
//   new Promise((resolve, reject) =>
//     axios
//       .get('https://ih-beers-api2.herokuapp.com/beers')
//       .then(result => {
//         const products = result.data;
//         resolve(products);
//       })
//       .catch(reject)
//   );
