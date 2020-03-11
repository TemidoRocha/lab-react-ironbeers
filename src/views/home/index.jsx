import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const home = () => {
  return (
    <nav>
      <Link className="home" to="/listBeers">
        <img src={process.env.PUBLIC_URL + '/images/beers.png'} alt="beers at a bar" />
        <h3>All Beers</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestias perferendis, qui,
          eos nam numquam molestiae nobis, exercitationem dolores omnis recusandae enim laboriosam
          rem repellendus autem sequi magnam similique saepe sapiente sit quae!
        </p>
      </Link>
      <Link className="home" to="/randomBeer">
        <img src={process.env.PUBLIC_URL + '/images/random-beer.png'} alt="beer tap" />
        <h3>Random Beers</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestias perferendis, qui,
          eos nam numquam molestiae nobis, exercitationem dolores omnis recusandae enim laboriosam
          rem repellendus autem sequi magnam similique saepe sapiente sit quae!
        </p>
      </Link>
      <Link className="home" to="/newBeer">
        <img src={process.env.PUBLIC_URL + '/images/new-beer.png'} alt="new beer" />
        <h3>New Beer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestias perferendis, qui,
          eos nam numquam molestiae nobis, exercitationem dolores omnis recusandae enim laboriosam
          rem repellendus autem sequi magnam similique saepe sapiente !
        </p>
      </Link>
    </nav>
  );
};

export default home;
