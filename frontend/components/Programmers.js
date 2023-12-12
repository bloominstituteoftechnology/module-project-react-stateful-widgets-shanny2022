/*
PROGRAMMERS Instructions

Watch the short video in `design-files/programmers.gif`:

This component keeps track of a list of pioneers in the field of programming on the one hand,
and the id of the currently featured programmer on the other. That's two slices of state!
We can only feature one awesome programmer at a time.

Find comments below to help you along.
*/

import React, { useState } from 'react';
import { listOfAwesome } from './Programmers';

export default function Programmers() {
  const [programmers] = useState(listOfAwesome);
  const [featuredId, setFeaturedId] = useState(null); // slice of state for the featured programmer id

  const getNameOfFeatured = () => {
    const featured = programmers.find(dev => dev.id === featuredId);
    return featured ? featured.name : '';
  };

  const style = {
    fontSize: '1.5em',
    marginTop: '0.5em',
    color: featuredId ? 'gold' : 'royalblue', // color turns to gold when celebrating
  };

  return (
    <div className='widget-programmers container'>
      <h2>Programmers</h2>
      <div className='programmers'>
        {
          programmers.map(dev =>
            <div className='programmer' key={dev.id}>
              {dev.name} <button onClick={() => setFeaturedId(dev.id)}>Feature</button>
            </div>
          )
        }
      </div>
      <div id='featured' style={style}>
        {
          featuredId
            ? `🎉 Let's celebrate ${getNameOfFeatured()}! 🥳`
            : 'Pick an awesome programmer'
        }
      </div>
    </div>
  );
}
