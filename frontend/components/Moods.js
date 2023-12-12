/*
MOODS Instructions

Watch the short video in `design-files/moods.gif`:

How many slices of state do you think are necessary to act as "sources of truth" for all
the things that change in this widget? Give it some thought before continuing reading!

Some might say 3 different states: one per mood (happy, sad, and uncertain).
But a single slice of state is more than enough to keep track of all these moods!

STEP 0:
  Study the component below, and import the state hook.

STEP 1:
  Create a 'mood', 'setMood' pair using the state hook.
  The 'mood' slice of state should be initialized to one of the three variables right below our imports.
  Those variables exist so we don't need to write those long strings anywhere inside the component.

STEP 2:
  Make the color of the text be royalblue if the state of the mood is happy, crimson otherwise.

STEP 3:
  Remove the hard-coded mood and interpolate the 'mood' slice of state instead, using curly brackets.

STEPS 4, 5, 6:
  Inside these click handlers set the correct mood, using 'setMood' and the variables below the imports.
*/

import React, { useState } from 'react'; // STEP 0

const happyMood = "I'm feeling happy!";
const sadMood = "I'm feeling sad!";
const neutralMood = "I'm feeling neutral.";

export default function Moods() {
  const [mood, setMood] = useState(happyMood); // STEP 1

  const style = { // STEP 2
    color: mood === happyMood ? 'royalblue' : 'crimson',
  };

  const makeHappy = () => { // STEP 4
    setMood(happyMood);
  };

  const makeSad = () => { // STEP 5
    setMood(sadMood);
  };

  const makeNeutral = () => { // STEP 6
    setMood(neutralMood);
  };

  return (
    <div style={style}>
      <p>{mood}</p> {/* STEP 3 */}
      <button onClick={makeHappy}>Happy</button>
      <button onClick={makeSad}>Sad</button>
      <button onClick={makeNeutral}>Neutral</button>
    </div>
  );
}
